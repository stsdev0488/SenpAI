import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { styles, containerSize } from './CircleItem.styles';

export const CircleItem = ({ image, size }) => {
  const containerStyle = [styles.container, containerSize[size]];
  return (
    <View style={containerStyle}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

CircleItem.defaultProps = {
  image: null,
  size: 'small',
};

CircleItem.propTypes = {
  image: PropTypes.shape({
    uri: PropTypes.string,
  }),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
