import { View, Text, StyleSheet } from 'react-native';
import { TopMenu } from '../../components/TopMenu';
import { BottomMenu } from '../../components/BottomMenu';
import { FeedPublication } from '../../components/FeedPublication';

import { styles } from './styles'

export const Feed = ({ username, tweet }) => {
  return (
    <View style={styles.container}>
      <TopMenu />
      <View style={styles.notFoundcontainer}>
        <Text style={styles.notFoundText}>Não há publicações no momento</Text>
      </View>
      <BottomMenu />
    </View>
  );
};