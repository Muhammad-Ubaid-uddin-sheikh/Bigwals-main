import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, ScrollView} from 'react-native';
import AppNavigator from './src/routes/AppNavigator';

const App = () => {
    return (
        <NavigationContainer>
          <StatusBar  barStyle="dark-content"  />
          {/* <ScrollView style={styles.form} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> */}
            <AppNavigator />
            {/* </ScrollView> */}
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({

});