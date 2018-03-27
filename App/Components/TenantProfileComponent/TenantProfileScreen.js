import React,{Component} from 'react';

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
    Dimensions
} from 'react-native';

//import CacheStore from 'react-native-cache-store';

import{ Actions}    from 'react-native-router-flux';
import Colors       from '../../Constants/Colors';
import Strings      from '../../Constants/Strings';
import styles       from './TenantProfileScreenStyle';
import defualtUserProfile from '../../Assets/userAvtar.png';
import profileStatus from '../../Assets/profile_status.png';
import rentalResume from '../../Assets/rental_resume.png';
import mySearches from '../../Assets/my_searches.png';
import vettingStatus from '../../Assets/vetting_status.png';
import biddingStatus from '../../Assets/bidding_status.png';
import viewPDF from '../../Assets/view_as_pdf.png';

import logoutIcon from '../../Assets/logout.png';

const window = Dimensions.get('window');

class TenantProfileScreen extends Component{


    constructor() {

        super();
            this.state = {
               
            };   
            
    }
    
    componentWillMount() {
        console.log("loggedInUserData>>>> "+JSON.stringify(this.props.loggedInUserData));
    }

    componentWillUnmount(){        
        
    }
    
    onRentalResumeClick(){
        Actions.RentalResumeMenu();
    }
    
    onProfileStatusClick(){
        
    }

    onMySearchesClick(){
        Actions.SavedSearchesScreen();
    }

    onBiddingStatusClick(){
        Actions.BiddingStatusListingComponent();
    }

    onLogoutClick() {        
        Alert.alert(
            'LeaseAgent',
            Strings.LOGOUT_CONFIRMATION_MSG,
            [
                { text: 'Yes', onPress: () => this.callUserLogoutWebService() },
                { text: 'No', onPress: () => console.log("Logout Denied") },
            ],
            { cancelable: false }
        )
    }

    callUserLogoutWebService() {
        AsyncStorage.clear();
        //CacheStore.flush();
        Actions.pop();
    }

	render(){
    	return(    		
            <View style={styles.mainContainer}>
                <View style={styles.profileImageContainer}>

                    <View style={styles.userImageViewStyle}>
                            <Image
                                    style={styles.userImageStyle}
                                    source={defualtUserProfile}
                            ></Image>
                    </View>
                    <TouchableOpacity onPress={()=>this.onLogoutClick()}
                        style={{position:'absolute', top:20, right:20, alignItems:'center'}}>
                        <Image                                
                                source={logoutIcon}
                        ></Image>
                        <Text style={{color:'red', fontSize:12}}>Logout</Text>
                    </TouchableOpacity>
                    <View style={styles.userInfoViewStyle}>
                        <Text style={styles.textColorStyle}>{this.props.loggedInUserData.FirstName? this.props.loggedInUserData.FirstName : ''}</Text>
                        <Text style={styles.textColorStyle}>{this.props.loggedInUserData.Email? this.props.loggedInUserData.Email : ''}</Text>
                    </View>
                </View>

                {this.props.loggedInUserData.IsRentalResumeCompleted?null:
                    <View style={{height:100, }}>
                        <View style={{height:50, backgroundColor:Colors.APP_THEME_RED_COLOR, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:12, color:'#ffffff', fontWeight:'bold', width:window.width*0.95}}>
                                {Strings.RENTAL_RESUME_ALERT_TITLE}
                            </Text>
                        </View>
                        <View style={{height:50, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:12, color:'#000000', fontWeight:'bold', width:window.width*0.9}}>
                                {Strings.RENTAL_RESUME_ALERT_MESSAGE}
                            </Text>
                        </View>
                    </View>                    
                }

                <ScrollView>

                    <View style={{flex:1,backgroundColor:'#EFEFEF',paddingLeft:20,paddingRight:20,paddingBottom:68}}>                    
                       
                        <View style={styles.tabViewStyle}>
                            <TouchableOpacity onPress={()=>this.onProfileStatusClick()}>
                                <View style={styles.cardViewStyle}>
                                    <Image source={profileStatus} ></Image>
                                    <Text style={{marginTop:10}}>Profile Status</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.onRentalResumeClick()}>   
                                <View style={styles.cardViewStyle}>
                                    <Image source={rentalResume}></Image>
                                    <Text style={{marginTop:10}}>Rental Resume</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                   

                        <View style={styles.tabViewStyle}>                        
                            <TouchableOpacity onPress={()=>this.onMySearchesClick()}>   
                                <View style={styles.cardViewStyle}>
                                    <Image source={mySearches} ></Image>
                                    <Text style={{marginTop:10}}>My Searches</Text>
                                </View>
                            </TouchableOpacity>
                        
                            <TouchableOpacity >   
                                <View style={styles.cardViewStyle}>
                                    <Image source={vettingStatus} ></Image>
                                    <Text style={{marginTop:10}}>Vetting Status</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.tabViewStyle}>                        
                            <TouchableOpacity onPress={()=>this.onBiddingStatusClick()}>   
                                <View style={styles.cardViewStyle}>
                                    <Image source={biddingStatus}></Image>
                                    <Text style={{marginTop:10}}>Bidding Status</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity >   
                                <View style={styles.cardViewStyle}>
                                    <Image source={viewPDF} ></Image>
                                    <Text style={{marginTop:10}}>View as PDF</Text>
                                </View >
                            </TouchableOpacity>
                        </View>                

                    </View>

                </ScrollView>

           </View>
    	);
	}

}

module.exports = (TenantProfileScreen);
