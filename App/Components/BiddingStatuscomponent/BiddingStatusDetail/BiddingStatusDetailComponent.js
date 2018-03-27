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


import{ Actions}    from 'react-native-router-flux';
import Colors       from '../../../Constants/Colors';
import Strings      from '../../../Constants/Strings';
import styles       from './BiddingStatusDetailStyle';

import check_selected from '../../../Assets/check_selected.png';
import meterImage from '../../../Assets/meter.png';

const window = Dimensions.get('window');

class BiddingStatusDetailComponent extends Component{


    constructor() {

        super();
        this.state = {
            accessToken : '',  
            tenantBids:['1','2','3'],   
            tenantBid:0,       
        };   
        
    }
    
    componentWillMount() {
        
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {                        
            
        });   
    }
    
    componentWillUnmount(){   
    }  

    
    decrementBid(){
        if(this.state.tenantBid > 0){
            var currentBid = this.state.tenantBid;
            currentBid--;
            this.setState({tenantBid:currentBid});
        }
    }

    incrementBid(){
        var currentBid = this.state.tenantBid;
        currentBid++;
        this.setState({tenantBid:currentBid});
    }

    renderItem({ item, index }) {

        return(
                <View style={{flex:1, justifyContent:'center', margin:10}}>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{width:130, fontSize:12, fontWeight:'700', marginRight:20}}>{'Name:'}</Text>
                        <Text style={{fontSize:12, fontWeight:'500', marginRight:20}}>{'Zack Willson'}</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{width:130, fontSize:12, fontWeight:'700', marginRight:20}}>{'Tenant Bid Amount:'}</Text>
                        <Text style={{fontSize:12, fontWeight:'500', marginRight:20}}>{'$ 8934'}</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{width:130, fontSize:12, fontWeight:'700', marginRight:20}}>{'Applied Date:'}</Text>
                        <Text style={{fontSize:12, fontWeight:'500', marginRight:20}}>{'04-03-2018'}</Text>                                     
                    </View>

                </View>
            );
    }  

    render(){
        return(
            <View style={styles.mainContainer}>   

                <View style={{justifyContent:'center', margin:10}}>
                    <Text style={{fontSize:16, fontWeight:'700', marginRight:20}}>{'Bid for Property:'}</Text>
                    <Text style={{fontSize:12, fontWeight:'500', marginRight:20}}>{'53/105 Mountain Highway'}</Text>                

                    <View style={styles.seperatorLine}/>

                    <Text style={{fontSize:16, fontWeight:'700', marginRight:20, marginTop:10}}>{'LandLord Price'}</Text>

                    <Text style={{fontSize:12, fontWeight:'500', marginRight:20, marginTop:10}}>{'Last Bidded Amount: $ 10'}</Text>
                    <Text style={{fontSize:12, fontWeight:'500', marginRight:20}}>{'Base Price: $ 20'}</Text>
                    <Text style={{fontSize:12, fontWeight:'500', marginRight:20}}>{'Increment Amount By: $ 20'}</Text>
                
                    <View style={styles.seperatorLine}/>
                    
                    <View style={styles.sectionContainer}>
                        <Text style={{fontSize:14, fontWeight:'700', marginRight:20}}>{'Your Offer'}</Text>
                        <View style={{alignItems:'center', justifyContent:'center', width:window.width*0.9}}>
                            <Text style={{marginTop:10}}> Bid Price </Text>   
                        </View>
                        
                        <View style={styles.stepperView}>
                            <TouchableOpacity  onPress={() => this.decrementBid()} >
                                <Text style={{fontSize:24, color:'red', margin:10}}> - </Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:20}}>{this.state.tenantBid}</Text>   
                            <TouchableOpacity  onPress={() => this.incrementBid()} >
                                <Text style={{fontSize:24, color:'red', margin:10}}> + </Text>   
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems:'center', justifyContent:'center', width:window.width*0.9}}>
                            <Text style={{marginTop:10}}> The maximum Bid Amount for this Property is 9000 </Text>   
                        </View>
                    </View>


                </View>

                <View style={styles.seperatorLine}/>

                <View>
                    <Text style={{fontSize:14, fontWeight:'700', marginRight:20}}>{'All Offers'}</Text>
                </View>

                <FlatList                        
                    data={this.state.tenantBids}
                    renderItem={this.renderItem}
                    extraData={this.state}
                />
            </View>
        );
    }

}

export default BiddingStatusDetailComponent;