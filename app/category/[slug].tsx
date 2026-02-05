import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, SlidersHorizontal } from 'lucide-react-native';
import { ProductCard } from '../../src/components/ProductCard';

const productImage = require('../../src/assets/images/products/shampoo_premium.png');

// Mock products for the category
const mockProducts = [
    { id: '1', brand: 'Novex', name: 'Shampoo Hidratante Premium', sku: 'NOV001', image: productImage, isPromo: false },
    { id: '2', brand: 'Novex', name: 'Máscara Reparadora Intensiva', sku: 'NOV002', image: productImage, isPromo: true },
    { id: '3', brand: 'Novex', name: 'Condicionador Nutrição Profunda', sku: 'NOV003', image: productImage, isPromo: false },
    { id: '4', brand: 'Novex', name: 'Óleo de Coco Premium', sku: 'NOV004', image: productImage, isPromo: false },
    { id: '5', brand: 'Novex', name: 'Leave-in Proteção Térmica', sku: 'NOV005', image: productImage, isPromo: true },
    { id: '6', brand: 'Novex', name: 'Ampola de Tratamento Capilar', sku: 'NOV006', image: productImage, isPromo: false },
    { id: '7', brand: 'Novex', name: 'Creme de Pentear Modelador', sku: 'NOV007', image: productImage, isPromo: false },
    { id: '8', brand: 'Novex', name: 'Sérum Reparador de Pontas', sku: 'NOV008', image: productImage, isPromo: false },
];

const categoryTitles: Record<string, string> = {
    'cabelos': 'Cabelos',
    'perfumes': 'Perfumes e Perfumaria',
    'maquiagem': 'Maquiagem',
    'cuidados-pele': 'Cuidados para Pele',
    'corpo-banho': 'Corpo e Banho',
    'saude': 'Bem-Estar e Saúde',
    'presentes': 'Presentes',
    'mais-vendidos': 'Mais Vendidos',
    'cronograma-capilar': 'Cronograma Capilar',
    'necessidades': 'Necessidades do Cabelo',
    'categorias': 'Todas as Categorias',
    'marcas': 'Todas as Marcas',
    'novidades': 'Novidades',
    'coloracao': 'Coloração',
    'transformacao': 'Transformação',
    'kids': 'Linha Kids',
    'profissional': 'Profissional',
    'diversos': 'Diversos',
};

export default function CategoryScreen() {
    const router = useRouter();
    const { slug } = useLocalSearchParams<{ slug: string }>();

    const categoryTitle = categoryTitles[slug] || slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Produtos';

    const handleProductPress = (productId: string) => {
        router.push(`/product/${productId}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <ChevronLeft size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle} numberOfLines={1}>{categoryTitle}</Text>
                <TouchableOpacity style={styles.filterButton}>
                    <SlidersHorizontal size={20} color="#111827" />
                </TouchableOpacity>
            </View>

            {/* Results count */}
            <View style={styles.resultsBar}>
                <Text style={styles.resultsText}>{mockProducts.length} produtos encontrados</Text>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.productGrid}>
                    {mockProducts.map((product) => (
                        <View key={product.id} style={styles.productItem}>
                            <ProductCard
                                brand={product.brand}
                                name={product.name}
                                sku={product.sku}
                                imageSource={product.image}
                                isPromo={product.isPromo}
                                onPress={() => handleProductPress(product.id)}
                            />
                        </View>
                    ))}
                </View>
                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
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
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
        textAlign: 'center',
        marginHorizontal: 8,
    },
    filterButton: {
        padding: 8,
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
    },
    resultsBar: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#F9FAFB',
    },
    resultsText: {
        fontSize: 13,
        color: '#6B7280',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    productItem: {
        width: '50%',
    },
    bottomSpacer: {
        height: 40,
    },
});
