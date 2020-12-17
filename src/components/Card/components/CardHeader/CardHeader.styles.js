import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    height: 30,
    position: 'relative',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerGradient: {
    flex: 1,
  },
  firstTabHeader: {
    flex: 218,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  secondTabHeader: {
    flex: 128,
    justifyContent: 'center',
    backgroundColor: '#8E8E8E4C',
    paddingLeft: 10,
  },
});
