import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {IcArrowLeft} from '../../assets/icons';
import {CardBook, HeaderDefault} from '../../components';
import {dataHistoryDummy} from './dummy';
import styles from './styles';

const History = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderDefault
        title={'History Pickup'}
        leftIcon={<IcArrowLeft />}
        onPressLeft={() => navigation.navigate('Home')}
      />
      <ScrollView style={styles.stylesSV}>
        {dataHistoryDummy.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.txtSchedule}>{item.pick_up_schedule}</Text>
              <CardBook item={item.works} onPress={() => {}} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
