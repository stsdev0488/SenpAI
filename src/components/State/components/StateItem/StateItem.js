import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { StateBarItem } from './components/StateBarItem';
import { capitalizeFirstLetter } from '@utilities/string';
import { styles } from './StateItem.styles';

export const StateItem = ({ type, state }) => {
  return (
    <View>
      <Text style={styles.title}>{capitalizeFirstLetter(type)}</Text>
      <View style={styles.itemsContainer}>
        {[0, 0, 0].map((item, index) => (
          <View
            key={`${type}-${index}-state-item`}
            style={index ? styles.componentSpace : null}
          >
            <StateBarItem type={type} state={state > index} />
          </View>
        ))}
      </View>
    </View>
  );
};

StateItem.defaultProps = {
  state: 0,
  type: 'damage',
};

StateItem.propTypes = {
  state: PropTypes.number,
  type: PropTypes.oneOf(['damage', 'utility', 'toughness', 'difficulty']),
};
