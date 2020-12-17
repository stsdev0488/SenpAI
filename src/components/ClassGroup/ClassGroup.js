import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { Images } from '@constants';
import { styles } from './ClassGroup.styles';

export const ClassGroup = ({ classes }) => {
  return (
    <View style={styles.container}>
      {classes.map((item, index) => (
        <View
          key={`${index}-class`}
          style={index ? styles.componentSpace : null}
        >
          <Image source={Images.classIcons[item].icon} style={styles.image} />
        </View>
      ))}
    </View>
  );
};

ClassGroup.defaultProps = {
  classes: [],
};

ClassGroup.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
};
