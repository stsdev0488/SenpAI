import React from 'react';
import { View } from 'react-native';
import { Container } from '@components/Container';
import { ChampionHeader } from '@components/ChampionHeader';
import { Divider } from '@components/Divider';
import { RuneTabCard } from '@components/RuneTabCard';
import { SwitchTab } from '@components/SwitchTab';
import { Strings } from '@constants';
import { styles } from './Task.styles';
import data from '@data/Ahri.json';

export const Task = () => {
  return (
    <Container>
      <View style={styles.container}>
        <ChampionHeader
          splash={{
            uri: data.splash,
          }}
          name={data.name}
          nickName={data.nickName}
          classes={data.classes}
          states={[
            { type: 'damage', state: data.damage },
            { type: 'utility', state: data.utility },
            { type: 'toughness', state: data.toughness },
            { type: 'difficulty', state: data.difficulty },
          ]}
        />
        <Divider />
        <SwitchTab
          tabs={[
            { label: Strings.switchTab.build, value: 'b' },
            { label: Strings.switchTab.info, value: 'i' },
          ]}
        />
        <View style={styles.content}>
          <RuneTabCard runes={data.runeImages} spells={data.spellImages} />
        </View>
      </View>
    </Container>
  );
};
