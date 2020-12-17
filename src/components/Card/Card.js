import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CardBody } from './components/CardBody';
import { CardHeader } from './components/CardHeader';
import { styles } from './Card.styles';

export const Card = ({ firstTab, secondTab, children }) => {
  return (
    <View style={styles.container}>
      <CardHeader firstTab={firstTab} secondTab={secondTab} />
      <CardBody>{children}</CardBody>
    </View>
  );
};

Card.defaultProps = {
  secondTab: null,
  children: null,
};

Card.propTypes = {
  firstTab: PropTypes.string.isRequired,
  secondTab: PropTypes.string,
  children: PropTypes.node,
};
