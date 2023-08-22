import {StyleSheet} from 'react-native';
import {Colors, moderateScale, verticalScale} from '../../themes';

export const styles = StyleSheet.create({
  rootViewStyle: {
    alignItems: 'center',
  },
  iconImageViewStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
  },
  iconImageStyle: {
    height: '100%',
    width: '100%',
  },
  valueTextStyle: {
    marginVertical: verticalScale(5),
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: Colors.white,
  },
  propertyTextStyle: {
    fontSize: moderateScale(16),
    color: Colors.white,
  },
});
