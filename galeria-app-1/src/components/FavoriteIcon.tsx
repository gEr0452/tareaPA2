import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

interface FavoriteIconProps {
  isFavorite: boolean;
  onPress: () => void;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ isFavorite, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={isFavorite ? require('../assets/images/favorite-filled.png') : require('../assets/images/favorite-outline.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default FavoriteIcon;