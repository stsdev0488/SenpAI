import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { StateItem } from './components/StateItem';
import { styles } from './State.styles';

export const State = ({ states }) => {
  return (
    <View style={styles.container}>
      {states.map((item, index) => (
        <StateItem
          key={`${item.type}-${index}-state`}
          type={item.type}
          state={item.state}
        />
      ))}
    </View>
  );
};

State.defaultProps = {
  states: [],
};

State.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      state: PropTypes.number,
    }),
  ),
};
