import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export default StyleSheet.create({
  containerHeader: {
    backgroundColor: 'white',
    height: 56,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 10}, // change this for more shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 7,
    // marginBottom: 5,
    zIndex: 100,
  },

  containerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 15,
  },

  leftIcon: {
    flex: 0,
    paddingVertical: 5,
    alignItems: 'flex-start',
  },

  titleContainer: {
    flex: 1,
    marginLeft: 15,
  },

  txtTitle: {
    textAlign: 'left',
    color: colors.black,
    fontSize: 16,
  },

  rightIcon: {
    flex: 0,
    padding: 1,
    alignItems: 'flex-end',
  },
});
