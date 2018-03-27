import ACTION_TYPES from '../../../Action/ActionsType';
const INITIAL_STATE = {	
	tenantBidDetailResponse:'',	
}


export default 	(state = INITIAL_STATE, action) => {

	switch(action.type){
		
		case ACTION_TYPES.GET_TENANT_BID_DETAILS_ACTION:
			return {...state, tenantBidDetailResponse: action.payload}		

		case ACTION_TYPES.CLEAR_TENANT_BID_DETAILS_ACTION:
			return {...state, tenantBidDetailResponse: ''}		

		default:
			return state;
	}

};