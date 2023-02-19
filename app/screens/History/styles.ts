import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  stylesSV: {paddingHorizontal: 15},
  txtSchedule: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginVertical: 10,
  },
});
