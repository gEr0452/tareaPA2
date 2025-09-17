import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FavoriteIcon from './FavoriteIcon';
import { Product } from '../types';

interface ProductItemProps {
  product: Product;
  onPress: () => void;
  onLongPress: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onPress, onLongPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress} 
      onLongPress={onLongPress}
    >
      <Image 
        source={product.imageUri ? { uri: product.imageUri } : require('../assets/images/local-product.jpg')} 
        style={styles.image} 
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <FavoriteIcon isFavorite={product.isFavorite} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductItem;