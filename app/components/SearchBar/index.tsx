import React from 'react';
import {Dimensions, TextInput, View} from 'react-native';
import {IcSearch} from '../../assets/icons';
import {colors} from '../../theme';

const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

const SearchBar = ({
  isFocus,
  setSearchTxt,
  searchTxt,
  placeholder,
  setFocus,
  setBlur,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: ww,
        height: 60,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: ww * 0.95,
          height: 40,
          borderRadius: 32,
          borderColor: isFocus ? '#2BBECB' : colors.greyCheeseLight,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
            width: ww * 0.08,
          }}>
          <IcSearch stroke={colors.greyCheeseLight} />
        </View>
        <TextInput
          style={{
            height: 40,
            width: ww * 0.65,
          }}
          onFocus={setFocus}
          onBlur={setBlur}
          onChangeText={setSearchTxt}
          value={searchTxt}
          placeholder={placeholder}
          keyboardType="default"
        />
      </View>
    </View>
  );
};

export default SearchBar;
