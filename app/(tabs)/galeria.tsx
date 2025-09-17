import React, { useState } from 'react';
import { FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { PRODUCTS } from '../../constants/productos';

const RESIZE_MODES = ['cover', 'contain', 'stretch'] as const;
type ResizeMode = typeof RESIZE_MODES[number];

export default function Galeria() {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<typeof PRODUCTS[0] | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [resizeMode, setResizeMode] = useState<ResizeMode>('cover');
    const [favorites, setFavorites] = useState<string[]>([]);

    const filteredProducts = PRODUCTS.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    const handlePress = (item: typeof PRODUCTS[0]) => {
        setSelected(item);
        setResizeMode('cover');
        setModalVisible(true);
    };

    const handleLongPress = (id: string) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
        );
    };

    const renderItem = ({ item }: { item: typeof PRODUCTS[0] }) => {
        const isFavorite = favorites.includes(item.id);
        return (
            <Pressable
                onPress={() => handlePress(item)}
                onLongPress={() => handleLongPress(item.id)}
                style={[
                    styles.item,
                    isFavorite && styles.favoriteItem,
                ]}
        >
            <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            {isFavorite && (
                <Text style={styles.favoriteIcon}>★</Text>
            )}
        </Pressable>
    );
};

return (
    <View style={styles.container}>
        <Text style={styles.header}>Galería</Text>
        <TextInput
            style={styles.input}
            placeholder="Buscar por título..."
            value={search}
            onChangeText={setSearch}
        />
        <FlatList
            data={filteredProducts}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
        />
        <Modal
            visible={modalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {selected && (
                        <>
                            <Image
                                source={selected.image}
                                style={styles.modalImage}
                                resizeMode={resizeMode}
                            />
                            <Text style={styles.modalTitle}>{selected.title}</Text>
                            <Text style={styles.modalDesc}>{selected.description}</Text>
                            <View style={styles.resizeButtons}>
                                {RESIZE_MODES.map(mode => (
                                    <Pressable
                                        key={mode}
                                        style={[
                                            styles.resizeButton,
                                            resizeMode === mode && styles.resizeButtonActive,
                                        ]}
                                        onPress={() => setResizeMode(mode)}
                                    >
                                        <Text style={styles.resizeButtonText}>{mode}</Text>
                                    </Pressable>
                                ))}
                            </View>
                            <Pressable
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </Pressable>
                        </>
                    )}
                </View>
            </View>
        </Modal>
    </View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, padding: 16, backgroundColor: '#fff' },
header: { fontSize: 28, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 8, marginBottom: 12,
},
list: { paddingBottom: 24 },
item: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#f9f9f9', marginBottom: 10,
    borderRadius: 10, padding: 10, elevation: 2,
},
favoriteItem: {
    backgroundColor: '#ffe4b5',
    borderColor: '#ffa500',
    borderWidth: 1,
},
image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
info: { flex: 1 },
title: { fontSize: 18, fontWeight: 'bold' },
price: { fontSize: 16, color: '#888' },
favoriteIcon: {
    fontSize: 22, color: '#ffa500', marginLeft: 8,
},
modalOverlay: {
    flex: 1, backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center', alignItems: 'center',
},
modalContent: {
    backgroundColor: '#fff', borderRadius: 12,
    padding: 20, width: '85%', alignItems: 'center',
},
modalImage: { width: 220, height: 220, borderRadius: 12, marginBottom: 16 },
modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
modalDesc: { fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'center' },
resizeButtons: { flexDirection: 'row', marginBottom: 12 },
resizeButton: {
    paddingVertical: 6, paddingHorizontal: 14,
    borderRadius: 6, borderWidth: 1, borderColor: '#aaa',
    marginHorizontal: 4, backgroundColor: '#eee',
},
resizeButtonActive: {
    backgroundColor: '#ffa500', borderColor: '#ffa500',
},
resizeButtonText: { fontSize: 14, color: '#333' },
closeButton: {
    marginTop: 8, paddingVertical: 8, paddingHorizontal: 24,
    backgroundColor: '#ffa500', borderRadius: 8,
},
closeButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});