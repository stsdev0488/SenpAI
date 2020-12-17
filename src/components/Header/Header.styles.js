import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    paddingTop: getStatusBarHeight(),
  },
  header: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
