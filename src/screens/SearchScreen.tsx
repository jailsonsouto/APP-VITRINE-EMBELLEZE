import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { ChevronLeft, Search, X, Clock, TrendingUp } from 'lucide-react-native';
import { ProductCard } from '../components/ProductCard';

const productImage = require('../assets/images/products/shampoo_premium.png');

const recentSearches = ['Shampoo hidratante', 'Novex colágeno', 'Máscara capilar', 'Tintura castanho'];
const trendingSearches = ['Super Babosão', 'Santo Black', 'Gelato de Pistache', 'Infusão Colágeno', 'Doctor Rícino', 'Maxton loiro'];

const mockResults = [
    { id: '1', brand: 'Novex', name: 'Shampoo Hidratante Premium', sku: 'NOV001', image: productImage, isPromo: false },
    { id: '2', brand: 'Novex', name: 'Máscara Infusão Colágeno', sku: 'NOV002', image: productImage, isPromo: true },
    { id: '3', brand: 'Novex', name: 'Creme Super Babosão', sku: 'NOV003', image: productImage, isPromo: false },
    { id: '4', brand: 'Natucor', name: 'Tintura Óleos Amazônicos', sku: 'NAT001', image: productImage, isPromo: false },
];

interface SearchScreenProps {
    onBack: () => void;
    onProductPress: (productId: string) => void;
}

export function SearchScreen({ onBack, onProductPress }: SearchScreenProps) {
    const [query, setQuery] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = () => {
        if (query.trim()) {
            setHasSearched(true);
            Keyboard.dismiss();
        }
    };

    const handleClearSearch = () => {
        setQuery('');
        setHasSearched(false);
    };

    const handleQuickSearch = (term: string) => {
        setQuery(term);
        setHasSearched(true);
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <ChevronLeft size={24} color="#111827" />
                </TouchableOpacity>

                <View style={styles.searchContainer}>
                    <Search size={18} color="#9CA3AF" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar produtos..."
                        placeholderTextColor="#9CA3AF"
                        value={query}
                        onChangeText={setQuery}
                        onSubmitEditing={handleSearch}
                        returnKeyType="search"
                        autoFocus
                    />
                    {query.length > 0 && (
                        <TouchableOpacity onPress={handleClearSearch}>
                            <X size={18} color="#9CA3AF" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {!hasSearched ? (
                    <>
                        {/* Recent Searches */}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Buscas Recentes</Text>
                            {recentSearches.map((term, index) => (
                                <TouchableOpacity key={index} style={styles.searchItem} onPress={() => handleQuickSearch(term)}>
                                    <Clock size={16} color="#9CA3AF" />
                                    <Text style={styles.searchItemText}>{term}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Trending Searches */}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Em Alta</Text>
                            <View style={styles.tagsContainer}>
                                {trendingSearches.map((term, index) => (
                                    <TouchableOpacity key={index} style={styles.tag} onPress={() => handleQuickSearch(term)}>
                                        <TrendingUp size={12} color="#8B5CF6" />
                                        <Text style={styles.tagText}>{term}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </>
                ) : (
                    <>
                        {/* Search Results */}
                        <View style={styles.resultsHeader}>
                            <Text style={styles.resultsText}>{mockResults.length} resultados para "{query}"</Text>
                        </View>

                        <View style={styles.productGrid}>
                            {mockResults.map((product) => (
                                <View key={product.id} style={styles.productItem}>
                                    <ProductCard
                                        brand={product.brand}
                                        name={product.name}
                                        sku={product.sku}
                                        imageSource={product.image}
                                        isPromo={product.isPromo}
                                        onPress={() => onProductPress(product.id)}
                                    />
                                </View>
                            ))}
                        </View>
                    </>
                )}

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    backButton: {
        padding: 4,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 10,
        paddingHorizontal: 12,
        marginLeft: 8,
        height: 42,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#111827',
        marginLeft: 8,
        paddingVertical: 0,
    },
    scrollView: {
        flex: 1,
    },
    section: {
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 12,
    },
    searchItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    searchItemText: {
        fontSize: 14,
        color: '#374151',
        marginLeft: 12,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F3FF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
    },
    tagText: {
        fontSize: 13,
        color: '#8B5CF6',
        fontWeight: '500',
        marginLeft: 4,
    },
    resultsHeader: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#F9FAFB',
    },
    resultsText: {
        fontSize: 13,
        color: '#6B7280',
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    productItem: {
        width: '50%',
    },
    bottomSpacer: {
        height: 100,
    },
});
