import React from 'react'
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  Icons  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const ParticularGroundScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    // Back button action
    navigation.goBack();
  };

  return (
    
    <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content"/>
    <Image 
      source={require('../../assets/Ground.jpg')}
      style={styles.backgroundImage}
   />
      <View style={{ flexDirection: 'row', justifyContent:"space-between", padding: 16 ,width:'100%',alignItems:'center',position:'absolute',top:25}}>
      
        <TouchableOpacity onPress={goBack} >
          <Icon name="keyboard-arrow-left"  color="white" size={18} style={{backgroundColor:'rgba(0, 0, 0, 0.35)',padding:5,borderRadius:50}}  />
        </TouchableOpacity>
        {/* <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>asdasd</Text> */}
        <Icons name="staro"   size={18} color="white" style={{backgroundColor:'rgba(0, 0, 0, 0.35)',padding:5,borderRadius:50}}  />
      </View>
   

   
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    marginTop: 0,
    padding: 0,
    backgroundColor: 'white',


},
backgroundImage:{
  width:"100%",
  height:223,
  objectFit:'cover'
}
  
})

export default ParticularGroundScreen