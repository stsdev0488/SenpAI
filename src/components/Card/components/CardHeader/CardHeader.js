import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styles } from './CardHeader.styles';

export const CardHeader = ({ firstTab, secondTab }) => {
  return (
    <View style={styles.header}>
      <LinearGradient
        colors={['#56CCF299', '#0076D199']}
        style={styles.headerGradient}
      />
      <View style={styles.headerOverlay}>
        <View style={styles.firstTabHeader}>
          <Text style={styles.headerText}>{firstTab}</Text>
        </View>
        {secondTab ? (
          <View style={styles.secondTabHeader}>
            <Text style={styles.headerText}>{secondTab}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

CardHeader.defaultProps = {
  secondTab: null,
};

CardHeader.propTypes = {
  firstTab: PropTypes.string.isRequired,
  secondTab: PropTypes.string,
};
