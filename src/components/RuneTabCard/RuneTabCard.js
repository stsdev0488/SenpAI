import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from '@components/Card';
import { CircleItem } from '@components/CircleItem';
import { RectItem } from '@components/RectItem';
import { Strings } from '@constants';
import { styles } from './RuneTabCard.styles';

export const RuneTabCard = ({ runes, spells }) => {
  return (
    <Card
      firstTab={Strings.runeTabCard.runes}
      secondTab={Strings.runeTabCard.spells}
    >
      <View style={styles.runeTabCardContent}>
        <View style={styles.runeContainer}>
          {runes.map((item, index) => (
            <View key={`${index}-rune`} style={styles.runeItemWrapper}>
              {index ? <View style={styles.runeComponentDivider} /> : null}
              <CircleItem image={item.image} size={item.size} />
            </View>
          ))}
        </View>
        <View style={styles.spellContainer}>
          {spells.map((item, index) => (
            <View
              key={`${index}-spell`}
              style={index ? styles.spellComponentSpace : null}
            >
              <RectItem image={item.image} imagePosition={item.imagePosition} />
            </View>
          ))}
        </View>
      </View>
    </Card>
  );
};

RuneTabCard.defaultProps = {
  runes: [],
  spells: [],
};

RuneTabCard.propTypes = {
  runes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        uri: PropTypes.string,
      }),
      size: PropTypes.oneOf(['small', 'medium', 'large']),
    }),
  ),
  spells: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        uri: PropTypes.string,
      }),
      imagePosition: PropTypes.objectOf(PropTypes.any),
    }),
  ),
};
