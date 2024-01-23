// import React, { useState } from 'react';
// import { Text, View, StatusBar, StyleSheet, ScrollView,} from 'react-native'
// import { Fonts } from '../style';
// import ButtonImg from '../../components/ButtonImage';
// import Paypal from '../../assets/paypal.png'
// import Google from '../../assets/google.png'
// import Apple from '../../assets/apple.png'
// const Setting = ({navigation}) => {

//   return (

//         <ScrollView backgroundColor={'white'}>
//         <View style={styles.MainContainer}>
//           <Text style={styles.Heading}>Por favor, selecciona un método de pago</Text>
//             <View style={styles.rowContainer}>
//             <StatusBar backgroundColor={'white'} barStyle="dark-content" />
//          </View>
//     <View style={styles.buttonContainer}>
      
//         <ButtonImg TextButton="Paypal" ImageName={Paypal} />
//         <ButtonImg TextButton="Google Pay" ImageName={Google} />
//         <ButtonImg TextButton="Apple Pay" ImageName={Apple} />
//                 </View>
                
//         </View>
//         <View style={styles.nextButton}>
//                 <ButtonImg TextButton="Apple Pay" ImageName={Apple} />

//                 </View>
//         </ScrollView>
//       )
//     }
//     const styles = StyleSheet.create({
//       nextButton: {
//         position: 'absolute',
//         bottom: 25,
//         width:320
//     },
//         MainContainer:{
//             width:'auto',
//             backgroundColor:'white',
//             flex:1,
//             paddingLeft:15,
//             paddingRight:15,
//             paddingTop:20,
           
//         },
//         buttonContainer:{
//             marginTop:30
//         },
//         Heading: {
//             fontSize:20,
//             color:'#212121',
//             letterSpacing:0.1,
//           fontFamily: Fonts.BOLD
//           },
      
//     })


// export default Setting
import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import { Fonts } from '../style';
import ButtonImg from '../../components/ButtonImage';
import Paypal from '../../assets/paypal.png'
import Google from '../../assets/google.png'
import Apple from '../../assets/apple.png'

const CustomizeProfile = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'}  barStyle="dark-content" />
           
            <View style={styles.MainContainer}>
            <Text style={styles.Heading}>Por favor, selecciona un método de pago</Text>
                <View style={styles.containerButton}>
        <ButtonImg TextButton="Paypal" ImageName={Paypal} />
        <ButtonImg TextButton="Google Pay" ImageName={Google} />
       <ButtonImg TextButton="Apple Pay" ImageName={Apple} />
       </View>
            </View>
                <View style={styles.nextButton}>
                
                <ButtonImg TextButton="Apple Pay" ImageName={Apple}  />
                </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
   
  containerButton:{
    marginTop:30,
  },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        
    }, 
    MainContainer: {
      
       marginRight:5,
       marginLeft:5,
       width:340
    },
    Heading: {
                  fontSize:20,
                  color:'#212121',
                  letterSpacing:0.1,
                fontFamily: Fonts.BOLD
                },
            
    
    nextButton: {
        position: 'absolute',
        bottom: 25,
        width:340
    },
   
  
   
});

export default CustomizeProfile