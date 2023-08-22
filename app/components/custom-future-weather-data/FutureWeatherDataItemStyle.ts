import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes';

export const styles = StyleSheet.create({
  rootViewStyle: {
    alignItems: 'center',
    backgroundColor: Colors.darkGrey,
    borderRadius: moderateScale(10),
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
    padding: moderateScale(10),
  },
  imageViewStyle: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(35),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  timeTextStyle: {
    fontSize: moderateScale(15),
    color: Colors.grey,
  },
  degreeTextStyle: {
    fontSize: moderateScale(15),
    color: Colors.white,
    fontWeight: 'bold',
  },
  degreeIconViewStyle: {
    flexDirection: 'row',
  },
  degreeOuterViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(3),
    marginLeft: horizontalScale(1),
    height: moderateScale(8),
    width: moderateScale(8),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(4),
  },
  degreeInnerViewStyle: {
    height: moderateScale(4),
    width: moderateScale(4),
    backgroundColor: Colors.black,
    borderRadius: moderateScale(2),
  },
});
