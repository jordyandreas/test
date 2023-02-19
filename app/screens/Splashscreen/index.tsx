import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Splashscreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.safeAreaView}>
      <Text style={styles.txt}>CosXXXX Library</Text>
    </View>
  );
};

export default Splashscreen;
