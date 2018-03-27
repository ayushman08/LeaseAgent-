import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
	Image,
	StyleSheet,
	View,
    Text,
    Button,
	TouchableOpacity,
	Alert,
	Platform,
	ScrollView,
    AsyncStorage,
    Dimensions,
    FlatList,
    InteractionManager,
    Modal
} from 'react-native';

import {    
    getTenantBidDetails,        
} from "../../../Action/ActionCreators";

import{ Actions}    from 'react-native-router-flux';
import Colors       from '../../../Constants/Colors';
import Strings      from '../../../Constants/Strings';
import styles       from './BiddingStatusListingStyle';

import check_selected from '../../../Assets/check_selected.png';
import meterImage from '../../../Assets/meter.png';

const window = Dimensions.get('window');
var self;

class BiddingStatusListingComponent extends Component{


    constructor() {

        super();
        this.state = {
            accessToken : '',  
            tenantBiddings:['1','2','3'],          
        };   
        self = this;
    }
    
    componentWillMount() {
        
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {                        
            
        });   
    }
    
    componentWillUnmount(){   
    }  

    onRebidClicked(index){
        Actions.BiddingStatusDetailComponent();
    }

    onCancelBidClicked(index){

    }


    renderItem({ item, index }) {

        return(
                <View style={{flex:1, justifyContent:'center', margin:10}}>

                    <Text style={{fontSize:12, fontWeight:'700', marginRight:20}}>{'Property Name:'}</Text>
                    <Text style={{fontSize:12, fontWeight:'500', marginRight:20}}>{'53/105 Mountain Highway'}</Text>

                    <Text style={{fontSize:12, fontWeight:'700', marginRight:20, marginTop:10}}>{'Bid Date: 04-03-2018'}</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                        <View style={{width: (window.width*0.33)-5}}>
                            <Text style={{fontSize:12, fontWeight:'700'}}>No. Of Bid</Text>
                            <Text style={{fontSize:12, fontWeight:'500'}}>{'2'}</Text>                  
                        </View>

                        <View style={{width: (window.width*0.33)-5}}>
                            <Text style={{fontSize:12, fontWeight:'700'}}>Max Bid</Text>
                            <Text style={{width:window.width*0.3, fontSize:12, fontWeight:'500'}}>{'344'}</Text>                  
                        </View>

                        <View style={{width: (window.width*0.33)-5}}>
                            <Text style={{fontSize:12, fontWeight:'700'}}>Tenant Bid</Text>
                            <Text style={{width:window.width*0.3, fontSize:12, fontWeight:'500'}}>{'454'}</Text>                  
                        </View>
                    </View>

                    
                    <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
                        <View style={{width:window.width*0.7, flexDirection:'row' ,justifyContent:'space-between'}}>
                            <TouchableOpacity 
                                onPress={() => self.onRebidClicked(index)}
                                style={{backgroundColor:'green',height:window.width*0.2/2,width:window.width*0.3,alignItems:'center',justifyContent:'center'}}
                            >
                                <Text style={{color:'#ffffff'}}>Rebid</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={() => self.onCancelBidClicked(index)}
                                style={{backgroundColor:'red',height:window.width*0.2/2,width:window.width*0.3,alignItems:'center',justifyContent:'center'}}
                            >
                                <Text style={{color:'#ffffff'}}>Cancel Bid</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.seperatorLine}/>

                </View>
            );
    }  

    render(){
        return(
            <View style={styles.mainContainer}>                  
                <FlatList                        
                    data={this.state.tenantBiddings}
                    renderItem={this.renderItem}
                    extraData={this.state}
                />
            </View>
        );
    }

}

//export default BiddingStatusListingComponent;

const mapStateToProps = ({ loginReducer }) => {

  const {
    tenantBidDetailResponse,
  } = loginReducer;

  return {
    tenantBidDetailResponse: tenantBidDetailResponse,
    
  }
}

export default connect(mapStateToProps,{
    getTenantBidDetails,    
})(BiddingStatusListingComponent);