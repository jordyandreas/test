import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  textTitle: {flex: 1, fontSize: 16, color: colors.black, textAlign: 'center'},
  flex0: {
    flex: 0,
  },
  flex1: {
    flex: 1,
  },
  profileContainer: {
    backgroundColor: colors.waferBlue,
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  textSubjectSearch: {
    fontSize: 14,
    color: colors.greyCheeseLight,
    fontWeight: '400',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  subjectSearchName: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '400',
  },
  paddingH15: {paddingHorizontal: 15},
  textNoData: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
    color: colors.black,
  },
});
