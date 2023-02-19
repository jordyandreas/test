import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {IcArrowLeft, IcCalendar} from '../../assets/icons';
import {HeaderDefault, ModalSuccess} from '../../components';
import styles from './styles';

const Detail = ({navigation, route}: {navigation: any; route: any}) => {
  const {item} = route.params;

  const [openDate, setOpenDate] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderDefault
        title={'Book Detail'}
        leftIcon={<IcArrowLeft />}
        onPressLeft={() => navigation.navigate('Home')}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.viewCover}>
            <Text>Book Cover</Text>
          </View>
          <View style={styles.containerCreator}>
            <Text style={styles.title}>{item?.title}</Text>
            <View style={styles.creator}>
              <Text style={styles.titleBy}>By </Text>
              {item?.authors.map((item, i) => (
                <Text key={i} style={styles.titleAuthorWrap}>
                  {item.name}{' '}
                </Text>
              ))}
            </View>
            <View style={styles.containerDetail}>
              <View style={styles.columnDetail}>
                <Text style={styles.txtSubTitle}>Edition Count</Text>
                <Text style={styles.txtValueSub}>{item.edition_count}</Text>
              </View>
              <View style={styles.columnDetail}>
                <Text style={styles.txtSubTitle}>Edition Number</Text>
                <Text style={styles.txtValueSub}>{item.cover_edition_key}</Text>
              </View>
              <View style={styles.columnDetail}>
                <Text style={styles.txtSubTitle}>Year Published</Text>
                <Text style={styles.txtValueSub}>
                  {item.first_publish_year}
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.stylesButton}
            onPress={() => setOpenDate(true)}>
            <IcCalendar />
            <Text style={styles.txtButton}>Pick Up Schedule</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerDesc}>
          <Text style={styles.fontDesc}>Descriptions</Text>
          <Text style={styles.txtDetailDesc}>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly able to cover it and seemed ready
            to slide off any moment. His many legs, pitifully thin compared with
            the size of the rest of him, waved about helplessly as he looked.
            "What's happened to me?" he tho
          </Text>
        </View>
      </ScrollView>
      {success ? (
        <ModalSuccess
          typeResult={'Success'}
          msgType={''}
          msgResult={'Success Pick Up Schedule'}
        />
      ) : null}
      <DatePicker
        theme="light"
        modal
        mode="date"
        minimumDate={new Date()}
        open={openDate}
        date={new Date()}
        onConfirm={() => {
          setSuccess(true);
          const timer = setTimeout(() => {
            clearTimeout(timer);
            navigation.navigate('History');
          }, 1500);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />
    </SafeAreaView>
  );
};

export default Detail;
