import React, { useState } from 'react';
import { View, FlatList, TextInput, Modal, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem';
import { productsData } from '../data/products'; // Assume this is where your product data is stored

const GaleriaScreen = () => {
  const [filter, setFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Filter by title"
        value={filter}
        onChangeText={setFilter}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onPress={() => handleProductPress(item)}
          />
        )}
      />
      {selectedProduct && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContent}>
            <Image
              source={{ uri: selectedProduct.imageUri }}
              style={styles.modalImage}
              resizeMode="contain" // Default resizeMode
            />
            <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
            <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalImage: {
    width: '100%',
    height: 300,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 18,
    color: 'blue',
  },
});

export default GaleriaScreen;