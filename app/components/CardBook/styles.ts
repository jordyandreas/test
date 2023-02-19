import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    borderColor: colors.greyCheeseLight,
  },
  flex1: {flex: 1},
  flex0: {flex: 0},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  textSubTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.greyCheeseLight,
  },
  textValueSub: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.black,
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
