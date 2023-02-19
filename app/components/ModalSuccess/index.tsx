import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  BackHandler,
  Dimensions,
  Image,
  Switch,
  Alert,
  StyleSheet,
} from 'react-native';
import {colors} from '../../theme';

const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

const ModalSuccess = ({typeResult, msgType, msgResult, type = 1}) => {
  return (
    // <SafeAreaView style={styles.safeAreaView}>
    <View
      style={{
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 100,
      }}>
      <View
        style={{
          backgroundColor:
            typeResult === 'Success' ? colors.greenTea : colors.redVelvet,
          padding: 10,
          borderRadius: 15,
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          top: 60,
          width: Dimensions.get('window').width * 0.9,
        }}>
        <View style={{marginLeft: 15, flex: 0}}>
          {type == 0 ? (
            <Text
              style={{
                fontSize: 16,

                fontWeight: '400',
                lineHeight: 21,
                color: typeResult === 'Success' ? colors.black : colors.white,
              }}>
              {msgResult}
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 16,

                fontWeight: '400',
                lineHeight: 21,
                color: typeResult === 'Success' ? colors.black : colors.white,
              }}>
              {msgType === '' ? '' : msgType} {msgResult}
            </Text>
          )}
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default ModalSuccess;
