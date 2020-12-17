import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { styles } from './RectItem.styles';

export const RectItem = ({ image, imagePosition }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={[styles.image, imagePosition]} />
      </View>
    </View>
  );
};

RectItem.defaultProps = {
  image: null,
  imagePosition: null,
};

RectItem.propTypes = {
  image: PropTypes.shape({
    uri: PropTypes.string,
  }),
  imagePosition: PropTypes.objectOf(PropTypes.any),
};
