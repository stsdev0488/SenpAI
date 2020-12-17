import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { ChampionInfo } from '@components/ChampionInfo';
import { State } from '@components/State';
import { styles } from './ChampionHeader.styles';

export const ChampionHeader = ({ splash, name, nickName, classes, states }) => {
  return (
    <View style={styles.container}>
      <Image source={splash} style={styles.image} />
      <LinearGradient
        colors={['transparent', '#232633E7']}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <ChampionInfo name={name} nickName={nickName} classes={classes} />
        <State states={states} />
      </View>
    </View>
  );
};

ChampionHeader.defaultProps = {
  splash: null,
  name: '',
  nickName: '',
  classes: [],
  states: [],
};

ChampionHeader.propTypes = {
  splash: PropTypes.shape({
    uri: PropTypes.string,
  }),
  name: PropTypes.string,
  nickName: PropTypes.string,
  classes: PropTypes.arrayOf(PropTypes.string),
  states: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      state: PropTypes.number,
    }),
  ),
};
