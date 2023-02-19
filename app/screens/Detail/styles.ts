import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: colors.waferBlue,
    justifyContent: 'center',
  },
  viewCover: {
    width: 130,
    height: 200,
    alignSelf: 'center',
    backgroundColor: colors.greyCheeseLighter,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  containerCreator: {margin: 15, alignItems: 'center'},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  creator: {
    flexDirection: 'row',
    marginTop: 5,
  },
  titleBy: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.white,
  },
  titleAuthorWrap: {
    flexWrap: 'wrap',
    fontSize: 14,
    fontWeight: 400,
    color: colors.white,
  },
  containerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  columnDetail: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  txtSubTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.white,
  },
  txtValueSub: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  stylesButton: {
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#1E858E',
    alignItems: 'center',
    position: 'absolute',
    bottom: -20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  txtButton: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
    marginLeft: 10,
  },
  containerDesc: {marginTop: 35, marginBottom: 15, marginHorizontal: 15},
  fontDesc: {fontSize: 18, fontWeight: 'bold', color: colors.black},
  txtDetailDesc: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.greyCheeseLight,
    lineHeight: 20,
    marginTop: 5,
  },
});
