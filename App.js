/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';

import CommonStyles from './App/CommonStyle/CommonStyle';

// Screens
import SplashScreen from './App/Components/SplashComponent/SplashScreen';
import Login from './App/Components/LoginComponent/Login';
import HomeScreen from './App/Components/HomeComponent/HomeScreen';
import SearchScreen from './App/Components/SearchComponent/SearchScreen';
import FilterScreen from './App/Components/FilterComponent/FilterScreen';
import PropertyListing from './App/Components/PropertyListComponent/PropertyListingScreen';
import MapScreen from './App/Components/MapScreenComponent/MapScreen';
import SavedSearchesScreen from './App/Components/SavedSearchesComponent/SavedSearchesScreen';

import RentalResumeMenu from './App/Components/RentalResumeComponent/RentalResumeMenu/RentalResumeMenu';
import GeneralInfoScreen from './App/Components/RentalResumeComponent/GeneralInfoScreen/GeneralInfoScreen';
import PetsScreen from './App/Components/RentalResumeComponent/PetsComponent/PetsScreen';
import OtherInformationScreen from './App/Components/RentalResumeComponent/OtherInformationComponent/OtherInformationScreen';
import OtherResidentScreen from './App/Components/RentalResumeComponent/OtherResidentComponent/OtherResidentScreen';
import CurrentAddressScreen from './App/Components/RentalResumeComponent/CurrentAddressComponent/CurrentAddressScreen';
import PreviousResidentialAddressScreen from './App/Components/RentalResumeComponent/PreviousResidentialAddressComponent/PreviousResidentialAddressScreen';
import EmploymentHistoryScreen from './App/Components/RentalResumeComponent/EmploymentHistoryComponent/EmploymentHistoryScreen';
import PreviousEmploymentDetails from './App/Components/RentalResumeComponent/PreviousEmploymentDetailsComponent/PreviousEmploymentDetails';

import ContactReferenceScreen from './App/Components/RentalResumeComponent/ContactReferenceComponent/ContactReferenceScreen';
import IdentificationDocScreen from './App/Components/RentalResumeComponent/IdentificationDocComponent/IdentificationDocScreen';
import SupportiveDocScreen from './App/Components/RentalResumeComponent/SupportiveDocComponent/SupportiveDocScreen';

import TenantProfileDashboard from './App/Components/TenantProfileDashboardComponent/TenantProfileDashboard';
import PropertyDetailScreen from './App/Components/PropertyDetailComponent/PropertyDetailScreen';
import BiddingDetailScreen from './App/Components/BiddingDetailComponent/BiddingDetailScreen';
import Dashboard from './App/Components/DashboardComponent/Dashboard';

import BiddingStatusListingComponent from './App/Components/BiddingStatuscomponent/BiddingStatusListing/BiddingStatusListingComponent';
import BiddingStatusDetailComponent from './App/Components/BiddingStatuscomponent/BiddingStatusDetail/BiddingStatusDetailComponent';

import UnderConstruction from './App/Components/UnderConstruction/TIUnderConstruction';
import WeatherUpdates from './App/Components/WeatherUpdatesComponent/WeatherUpdates';


const scenes = Actions.create(
  <Scene key="root" headerTintColor="#fff">

                    <Scene key="SplashScreen" component={SplashScreen} 
                      hideNavBar={true}
                      initial
                    />

                    <Scene key="HomeScreen" component={HomeScreen} title="Home"
                      hideNavBar={true}                      
                    />

                    <Scene key="Login" component={Login} title="Login"
                      hideNavBar={true}                     
                    />

                    <Scene key="FilterScreen" component={FilterScreen} title="Filter"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="PropertyListing" component={PropertyListing} title="Tenants"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="MapScreen" component={MapScreen} title="Map"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="SavedSearchesScreen" component={SavedSearchesScreen} title="Saved Searches"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="SearchScreen" component={SearchScreen} title="Search Screen"
                      hideNavBar={true}                                           
                    />

                    <Scene key="TenantProfileDashboard" component={TenantProfileDashboard} title="Profile"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="RentalResumeMenu" component={RentalResumeMenu} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="GeneralInfoScreen" component={GeneralInfoScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="PetsScreen" component={PetsScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="OtherInformationScreen" component={OtherInformationScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="OtherResidentScreen" component={OtherResidentScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="CurrentAddressScreen" component={CurrentAddressScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="PreviousResidentialAddressScreen" component={PreviousResidentialAddressScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="EmploymentHistoryScreen" component={EmploymentHistoryScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="PreviousEmploymentDetails" component={PreviousEmploymentDetails} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="IdentificationDocScreen" component={IdentificationDocScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="SupportiveDocScreen" component={SupportiveDocScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="ContactReferenceScreen" component={ContactReferenceScreen} title="Rental Resume"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="TenantProfileDashboard" component={TenantProfileDashboard} title="Profile"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="PropertyDetailScreen" component={PropertyDetailScreen} title="Property Name"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="BiddingDetailScreen" component={BiddingDetailScreen} title="Bidding Detail"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="BiddingStatusListingComponent" component={BiddingStatusListingComponent} title="Bidding Detail"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="BiddingStatusDetailComponent" component={BiddingStatusDetailComponent} title="Bidding Detail"
                      hideNavBar={false}     
                      navigationBarStyle={CommonStyles.navigationBarStyle}
                      leftButtonIconStyle={CommonStyles.navigationBarBackButtonStyle}
                      titleStyle={CommonStyles.navigationBarTitleStyle}                
                    />

                    <Scene key="Dashboard" component={Dashboard} title=""
                      hideNavBar={true}                                      
                    />

                    <Scene key="UnderConstruction" component={UnderConstruction} title="Under Construction"
                      hideNavBar={false}
                    />

                    <Scene key="WeatherUpdates" component={WeatherUpdates} title="Weather Updates"
                      hideNavBar={false}
                    />
    

  </Scene>
);

export default class App extends Component<{}> {
    render() {
        return (
            <Router
                scenes={scenes}
            />
        );
    }
}


