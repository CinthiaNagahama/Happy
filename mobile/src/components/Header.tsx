import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps){
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={() => {}}>
        <Feather name='arrow-left' size={24} color='#15B6D6' />
      </BorderlessButton>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#F9FAFC',
    borderWidth: 1,
    borderColor: '#DDE3F0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8FA7B3',
    fontSize: 16
  }
})