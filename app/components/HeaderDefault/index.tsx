import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styles';

const HeaderDefault = ({
  title,
  onPressLeft,
  onPressRight,
  leftIcon,
  rightIcon,
  radius,
  align,
  marginRight,
}: {
  title: string;
  onPressLeft: any;
  onPressRight: any;
  leftIcon: any;
  rightIcon: any;
  radius: number;
  align: any;
  marginRight: number;
}) => {
  return (
    <SafeAreaView
      style={[
        styles.containerHeader,
        {
          borderBottomStartRadius: radius,
          borderBottomEndRadius: radius,
        },
      ]}>
      <View style={styles.containerContent}>
        {leftIcon === null ? (
          <></>
        ) : (
          <TouchableOpacity style={styles.leftIcon} onPress={onPressLeft}>
            {leftIcon}
          </TouchableOpacity>
        )}
        <View
          style={[
            styles.titleContainer,
            {alignItems: align, marginRight: marginRight},
          ]}>
          <Text style={styles.txtTitle}>{title}</Text>
        </View>
        {rightIcon === null ? (
          <></>
        ) : (
          <TouchableOpacity style={styles.rightIcon} onPress={onPressRight}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

HeaderDefault.defaultProps = {
  onPressLeft: () => {},
  onPressRight: () => {},
  leftIcon: null,
  rightIcon: null,
  radius: 0,
  align: 'flex-start',
  marginRight: 0,
};

export default HeaderDefault;
