
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Image, StatusBar, Alert, KeyboardAvoidingView } from 'react-native';
import NewIcons from 'react-native-vector-icons/Fontisto'
import axios from 'axios';
import Foot from './Foot'
import PhoneInput from "react-native-phone-number-input";
import { Fonts } from '../style';

const pickerSelectStyles = StyleSheet.create({

  inputAndroid: {
    marginTop: 12,
    paddingLeft: 12,
    padding: 16,
    paddingRight: 40,
    fontSize: 14,
    lineHeight: 20,
    width: 345,
    borderRadius: 12,
    borderWidth: 0.25,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 1,
    color: '#212121',
    fontFamily: 'Satoshi-Medium',
    backgroundColor: 'rgba(64, 134, 57, 0.05)'
  },
});

const API_URL = 'http://192.168.100.5:5000/register';
const Sigup = ({ navigation }) => {

  const placeholder = {
    label: 'Posición',
    value: null,
    placeholderTextColor: "rgba(33, 33, 33, 0.60)",


  };
  const placeholderLeft = {
    label: 'Pie dominante',
    value: null,
    placeholderTextColor: "rgba(33, 33, 33, 0.60)",

  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [Feildpassword, setFeildpassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedNumber, setFormattedNumber] = useState('');
  const handlePhoneInputChange = (number) => {
    setPhoneNumber(number);
  };
  const handleNavigate = async () => {
    try {
      // Check if any field is empty
      if (!name || !email || !mobileNumber || !Feildpassword) {
        Alert.alert('All fields are required');

        return;
      }

      // Make a POST request to your backend with form data
      const response = await axios.post(API_URL, {
        name,
        email,
        mobileNumber,
        Feildpassword,
      });

      // Handle the response from the server
      if (response.data.success) {
        Alert.alert('Registration successful!');
        navigation.navigate('CustomizeProfile')
        // You can navigate to another screen or perform any other action here
      } else {
        Alert.alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('An error occurred. Please try again later.');
    }
  };


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // Format the date as needed
    const formattedDate = date.toISOString().split('T')[0]; // Get the date part
    setSelectedDate(formattedDate);
    hideDatePicker();
  };
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };


  const [RePassword, setRePassword] = useState('');
  const [isRePasswordVisible, setRePasswordVisibility] = useState(false);

  const toggleRePasswordVisibility = () => {
    setRePasswordVisibility(!isRePasswordVisible);
  };

  const options = ['Zurdo', 'Diestro',];
 const Posición = ['Delantero', 'Defensa', 'Medio','Portero']

  return (

    <ScrollView style={styles.form} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>



      <View style={[styles.inputContainer,{paddingTop:10}]}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          letterSpacing={0.1}
          value={name}
          onChangeText={(text) => setName(text)}
        />


      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          keyboardType="default"
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          letterSpacing={0.1}
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
        />

      </View>
      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Fecha de nacimiento"
          value={selectedDate}
          onFocus={showDatePicker}
          letterSpacing={0.1}
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
        />
        {/* <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                /> */}
        <NewIcons name='date' style={styles.eyeIcon} size={17} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          letterSpacing={0.1}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Equipo"
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          letterSpacing={0.1}


        />

      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Número de dorsal"
          keyboardType="numeric"
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          letterSpacing={0.6}
          maxLength={2}


        />

      </View>
      <View style={styles.inputContainer}>
      <PhoneInput
        defaultCode="MX"
        layout="first"
        onChangeText={(number) => handlePhoneInputChange(number)}
        value={phoneNumber}
        placeholder="Fecha de nacimiento"
        placeholderTextColor="rgba(33, 33, 33, 0.60)"
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.phoneInputTextContainer}
        textInputStyle={styles.phoneInputText}
        codeTextStyle={styles.phoneInputCodeText}
        flagButtonStyle={styles.phoneInputFlagButton}
        onChangeFormattedText={(text) => setFormattedNumber(text)}
        textInputProps={{
          placeholder:"Fecha de nacimiento",
          placeholderTextColor:"rgba(33, 33, 33, 0.60)",
          padding:0 // Change this to the desired color
        }}
      />
</View>
      <View style={styles.inputContainer}>
        {/* <Positon /> */}
        <Foot options={Posición} placeHolder="Posición" />
      </View>
      <View style={styles.inputContainer}>
        <Foot options={options} placeHolder="Pie dominante" />
      </View>
  

    </ScrollView>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


  form: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    paddingTop: 10,
  },

  paragraphs: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    color: '#61646B',
    letterSpacing: 1,
    fontFamily:Fonts.MEDIUM
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 15,
    // width: 345,
    marginLeft: 22,
    marginRight: 30,
    
  },
  input: {
   
    paddingLeft: 12,
    padding: 16,
    paddingRight: 40,
    fontSize: 14,
    lineHeight: 20,
    // width: 345,
    borderRadius: 12,
    borderWidth: 0.25,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 1,
    color: '#212121',
    fontFamily:Fonts.MEDIUM,
    backgroundColor: 'rgba(64, 134, 57, 0.05)'
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    padding: 16,
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 30,
    top: 20,
    color: '#408639'
  },

  eyeText: {
    fontSize: 20,
  }, phoneInputContainer: {
    width: '100%',
              fontSize: 14,
              // width: 345,
              borderRadius: 12,
              borderWidth: 0.25,
              borderColor: 'rgba(0, 0, 0, 0.25)', 
              shadowRadius: 2,
              color: '#212121',
              backgroundColor: 'rgba(64, 134, 57, 0.05)',opacity:1,
              fontFamily:Fonts.MEDIUM
  },
  phoneInputTextContainer: {
    marginLeft:-10,
              padding:0,
              margin:0,
              fontSize: 14,
              borderRadius: 12, 
              color: '#212121',
              backgroundColor: 'transparent',
              opacity:1,
              fontFamily:Fonts.MEDIUM,
              
  },
  phoneInputText: {
    fontSize: 14,
    color: '#212121',
    fontFamily:Fonts.MEDIUM,
  
  },
  phoneInputCodeText: {
    fontSize: 14,
    color: '#212121',
  },
  phoneInputFlagButton: {
    borderWidth: 0,
   
  },

});

export default Sigup;
