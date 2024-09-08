import { ActivityIndicator } from 'react-native-paper';

import { styles } from './styles';

import { usePetsContext } from '~/context/petsContext';

export const Loading = () => {
  const { loading } = usePetsContext();

  return (
    <>
      {loading && (
        <ActivityIndicator animating color="#fff" size={50} style={styles.loadingButton} />
      )}
    </>
  );
};
