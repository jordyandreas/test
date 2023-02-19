import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcHistory} from '../../assets/icons';
import {CardBook, SearchBar} from '../../components';
import {colors} from '../../theme';
import styles from './styles';

const Home = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    fetchData();
  }, []);

  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState('love');
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const setBlur = () => {
    setFocus(false);
    fetchData();
  };

  const fetchData = () => {
    setLoading(true);
    const baseURL = `https://openlibrary.org/subjects/${search}.json`;
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    axios
      .get(baseURL, config)
      .then(response => {
        setLoading(false);
        setBookData(response.data);
      })
      .catch(error => {
        console.log('error', error);
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.flex0}
          onPress={() => navigation.navigate('History')}>
          <IcHistory />
        </TouchableOpacity>
        <Text style={styles.textTitle}>CosXXXX Library</Text>
        <View style={styles.flex0}>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => {}}
          />
        </View>
      </View>
      <SearchBar
        isFocus={focus}
        setFocus={() => setFocus(!focus)}
        setBlur={() => setBlur()}
        setSearchTxt={text => setSearch(text)}
        searchTxt={search}
        placeholder={'Search by Genre / Subject'}
      />
      {bookData?.name !== '' && bookData?.name !== undefined && !loading ? (
        <Text style={styles.textSubjectSearch}>
          Subject Searched{' '}
          <Text style={styles.subjectSearchName}>"{bookData.name}"</Text>
        </Text>
      ) : null}
      <ScrollView style={styles.paddingH15}>
        {loading ? (
          <ActivityIndicator
            size={30}
            color={colors.waferBlue}
            style={{marginTop: 15}}
          />
        ) : bookData?.works?.length > 0 ? (
          bookData.works.map((item, i) => (
            <CardBook
              item={item}
              onPress={() => navigation.navigate('Detail', {item: item})}
              key={i}
            />
          ))
        ) : (
          <Text style={styles.textNoData}>Data Not Found!</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
