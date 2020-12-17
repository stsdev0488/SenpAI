import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 226,
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  content: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    paddingHorizontal: 15,
    paddingBottom: 15,
    justifyContent: 'flex-end',
  },
});
