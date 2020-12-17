import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { styles } from './CardBody.styles.js';

export const CardBody = ({ children }) => {
  return <View style={styles.cardContent}>{children}</View>;
};

CardBody.defaultProps = {
  children: null,
};

CardBody.propTypes = {
  children: PropTypes.node,
};
