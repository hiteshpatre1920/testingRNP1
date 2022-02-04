import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,TouchableOpacity,View,} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LoginPage = ({navigation}) =>{
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 100}}><Text style={{fontSize: 17}}>Welcome !</Text></View>
      <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} style={{ backgroundColor: '#ff0040', paddingVertical: 15, marginHorizontal: 20, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <Text style={{ color: '#fff' }}>Let's Begin</Text>
        <MaterialIcons name="keyboard-arrow-right" color="#fff" size={35} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default LoginPage;
