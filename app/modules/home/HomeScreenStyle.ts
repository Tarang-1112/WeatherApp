import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes';

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  cityThemeViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityNameStyle: {
    marginHorizontal: horizontalScale(10),
    fontSize: moderateScale(45),
    fontWeight: 'bold',
    color: Colors.white,
  },
  dateTextStyle: {
    marginHorizontal: horizontalScale(10),
    fontSize: moderateScale(20),
    color: Colors.grey,
  },
  themeImageViewStyle: {
    height: moderateScale(60),
    width: horizontalScale(60),
    borderRadius: moderateScale(30),
    marginHorizontal: horizontalScale(20),
  },
  themeImageStyle: {
    height: '100%',
    width: '100%',
  },
  temperatureWeatherViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: horizontalScale(10),
  },
  temperatureTextStyle: {
    fontSize: moderateScale(60),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  weatherDescriptionTextStyle: {
    fontSize: moderateScale(25),
    color: Colors.grey,
    textAlign: 'center',
  },
  weatherImageViewStyle: {
    justifyContent: 'center',
    height: moderateScale(150),
    width: moderateScale(150),
    borderRadius: moderateScale(75),
  },
  weatherImageStyle: {
    width: '100%',
    height: '100%',
  },
  weatherPropertyViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.darkGrey,
    borderRadius: moderateScale(30),
    marginHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(20),
  },
  degreeIconViewStyle: {
    flexDirection: 'row',
  },
  degreeOuterViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
    height: moderateScale(20),
    width: moderateScale(20),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
  },
  degreeInnerViewStyle: {
    height: moderateScale(10),
    width: moderateScale(10),
    backgroundColor: Colors.black,
    borderRadius: moderateScale(5),
  },
  indicatorViewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
