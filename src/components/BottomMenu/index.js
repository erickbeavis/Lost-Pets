import { View, Text, TouchableOpacity, Image  } from 'react-native'

import { styles } from './styles';

export const BottomMenu = () =>{
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem}>
        <Image
          style={styles.menuItemImage}
          source={require('../../../assets/home-icon.png')}
        />
      </TouchableOpacity >
      <TouchableOpacity style={styles.menuItem}>
        <Image
          style={styles.menuItemImage}
          source={require('../../../assets/search-icon.png')}
        />
      </TouchableOpacity >
    </View>
  )
}