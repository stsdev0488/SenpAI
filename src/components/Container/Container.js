import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { Header } from '@components/Header';
import { styles } from './Container.styles';

export const Container = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('@assets/images/g-bg_winter.jpg')}
        style={styles.image}
      />
      <LinearGradient
        style={styles.gradientView}
        colors={['transparent', '#23242F']}
      >
        {children}
      </LinearGradient>
      <Header />
    </View>
  );
};

Container.defaultProps = {
  children: null,
};

Container.prototypes = {
  children: PropTypes.node,
};
