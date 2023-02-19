import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.waferBlue,
  },
  txt: {fontSize: 28, color: colors.white},
});
