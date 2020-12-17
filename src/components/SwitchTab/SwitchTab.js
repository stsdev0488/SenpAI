import React from 'react';
import PropTypes from 'prop-types';
import SwitchSelector from 'react-native-switch-selector';
import { View } from 'react-native';
import { styles } from './SwitchTab.styles';

export const SwitchTab = ({ tabs }) => {
  return (
    <View style={styles.container}>
      <SwitchSelector
        options={tabs}
        initial={0}
        hasPadding
        valuePadding={3}
        selectedColor="#FFFFFF"
        textColor="#EAEAEA4C"
        buttonColor="#0076D14C"
        backgroundColor="#1A1D2D"
        borderWidth={0}
        textStyle={styles.tabText}
        selectedTextStyle={styles.tabText}
        height={30}
      />
    </View>
  );
};

SwitchTab.defaultProps = {
  tabs: [],
};

SwitchTab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
  ),
};
