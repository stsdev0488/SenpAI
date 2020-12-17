import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#8B220A',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export const containerSize = StyleSheet.create({
  small: {
    width: 27,
    height: 27,
  },
  medium: {
    width: 37,
    height: 37,
  },
  large: {
    width: 47,
    height: 47,
  },
});
