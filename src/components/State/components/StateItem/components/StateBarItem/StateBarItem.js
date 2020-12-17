import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { styles } from './StateBarItem.styles';

export const StateBarItem = ({ state, type }) => {
  if (type === 'damage' || type === 'utility' || type === 'toughness') {
    return (
      <View style={styles.container}>
        {state ? (
          <LinearGradient
            colors={['#0076D1', '#0076D1']}
            style={styles.gradient}
          />
        ) : null}
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.container,
          // eslint-disable-next-line react-native/no-inline-styles
          { backgroundColor: state ? '#F0BF13' : '#434961' },
        ]}
      />
    );
  }
};

StateBarItem.defaultProps = {
  state: false,
  type: 'damage',
};

StateBarItem.propTypes = {
  state: PropTypes.bool,
  type: PropTypes.oneOf(['damage', 'utility', 'toughness', 'difficulty']),
};
