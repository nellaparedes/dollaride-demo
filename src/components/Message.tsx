import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ children }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        backgroundColor: 'dodgerblue',
        minHeight: 30,
        padding: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex:10,
        
    },
    text: {
        fontSize: 12,
        color:'#FFF'
    }
});



export default Message;