import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const CardBook = ({item, onPress}: {item: any; onPress: any}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.card}>
      <View style={styles.flex1}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.textSubTitle}>Edition Number: </Text>
        <Text style={styles.textValueSub}>
          {item.cover_edition_key ? item.cover_edition_key : '-'}
        </Text>
      </View>

      <View style={styles.wrap}>
        <Text style={styles.textSubTitle}>Authors: </Text>

        {item.authors.length > 0 ? (
          item.authors.map((item: any, i: any) => (
            <Text key={i} style={styles.textValueSub}>
              {item.name}{' '}
            </Text>
          ))
        ) : (
          <Text style={styles.textValueSub}>{item.name}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardBook;
