import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,useColorScheme,View,} from 'react-native';

const Dashboard = () =>{

  const [data, setData] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res)=>{
    return res.json();
  })
  .then((fetchdata)=>{
    setData(fetchdata);
  })
  .catch((error)=>{
    alert(error);
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.header}>
        <View><Text style={{color: '#fff', fontWeight: 'bold', fontSize: 21}}>HEADING</Text></View>
      </View>
      <View style={styles.mainContent}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            data.map((val)=>{
              return(
                <View key={val.id} style={{borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10}}>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', borderBottomWidth: 1, padding: 5}}><Text style={{color: '#000', fontWeight: 'bold', fontSize: 19}}>{val.title}</Text></View>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap',padding: 5}}><Text style={{fontSize: 16}}>{val.body}</Text></View>
                </View>
              );
            })
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header:{
    flex: 1,
    backgroundColor: '#ff0040',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContent:{
    flex: 10,
    paddingHorizontal: 10,
    paddingTop: 10
  }
});

export default Dashboard;
