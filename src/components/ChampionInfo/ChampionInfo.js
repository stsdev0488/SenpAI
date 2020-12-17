import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ClassGroup } from '@components/ClassGroup';
import { styles } from './ChampionInfo.styles';

export const ChampionInfo = ({ name, nickName, classes }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <ClassGroup classes={classes} />
      </View>
      <Text style={styles.nickName}>{nickName}</Text>
    </View>
  );
};

ChampionInfo.defaultProps = {
  name: '',
  nickName: '',
  classes: [],
};

ChampionInfo.propTypes = {
  name: PropTypes.string,
  nickName: PropTypes.string,
  classes: PropTypes.arrayOf(PropTypes.string),
};
