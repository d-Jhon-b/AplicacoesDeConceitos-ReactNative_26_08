import { StyleSheet,Text, View } from 'react-native';
import Pai from '../src/Pai'
import React, {useState} from 'react';
// import Filho from '../src/Filho';

export default function TabOneScreen() {
  return (
    <View  style={styles.container}>
      <View style={styles.box}>
        <Pai   />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center',alignItems:'center',alignContent:'center', backgroundColor:'#8f8f8fb5'},
  box:{width: '95%', height:'95%', alignItems:'center', justifyContent:'center', borderWidth:2, borderColor:'black', borderTopStartRadius:15,borderTopEndRadius:15}
});
