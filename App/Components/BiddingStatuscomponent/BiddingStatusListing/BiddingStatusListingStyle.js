import {
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import Colors from '../../../Constants/Colors';

const window = Dimensions.get('window');

export default StyleSheet.create({


  mainContainer: {
    flex: 1,    
  },

  seperatorLine:{
      width:window.width*0.95, height:2,backgroundColor:'#E1E1E1', marginLeft:10, marginTop:20, margin:10
  },

});