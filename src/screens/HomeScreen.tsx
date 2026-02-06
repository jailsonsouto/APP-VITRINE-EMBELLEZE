import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Header } from '../components/Header';
import { HeroBanner } from '../components/HeroBanner';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';

// Images
const bannerImage = require('../assets/images/banners/banner_tratamentos.png');
const categoryTratamento = require('../assets/images/categories/tratamento.png');
const categoryTintura = require('../assets/images/categories/tintura.png');
const categoryTransformacao = require('../assets/images/categories/transformacao.png');
const categoryPerfumaria = require('../assets/images/categories/perfumaria.png');
const productImage = require('../assets/images/products/shampoo_premium.png');

// Mock products
const mockProducts = [
    { id: '1', brand: 'Embelleze', name: 'Shampoo Hidratante Premium', sku: 'EMB001', image: productImage, isPromo: false },
    { id: '2', brand: 'Embelleze', name: 'Máscara Reparadora Intensiva', sku: 'EMB002', image: productImage, isPromo: false },
    { id: '3', brand: 'Embelleze', name: 'Ampola de Tratamento Capilar', sku: 'EMB003', image: productImage, isPromo: true },
    { id: '4', brand: 'Embelleze', name: 'Óleo Reparador de Pontas', sku: 'EMB004', image: productImage, isPromo: false },
];

const faqQuestions = [
    'Como aplicar os produtos de tratamento?',
    'Qual a durabilidade das tinturas?',
    'Como escolher o tom ideal?',
    'Produtos são testados dermatologicamente?',
];

interface HomeScreenProps {
    onProductPress?: (productId: string) => void;
    onCategoryPress?: (categoryId: string, categoryName: string) => void;
}

export function HomeScreen({ onProductPress, onCategoryPress }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Header />

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Hero Banner */}
                <View style={styles.bannerSection}>
                    <HeroBanner
                        imageSource={bannerImage}
                        title="Nova Linha de Tratamentos"
                        subtitle="Descubra os lançamentos da temporada"
                    />
                </View>

                {/* Categories Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Categorias</Text>

                    <View style={styles.categoryRow}>
                        <CategoryCard
                            title="Tratamento"
                            imageSource={categoryTratamento}
                            onPress={() => onCategoryPress?.('tratamento', 'Tratamento')}
                        />
                        <CategoryCard
                            title="Tintura"
                            imageSource={categoryTintura}
                            onPress={() => onCategoryPress?.('coloracao', 'Coloração')}
                        />
                    </View>

                    <View style={styles.categoryRow}>
                        <CategoryCard
                            title="Transformação"
                            imageSource={categoryTransformacao}
                            onPress={() => onCategoryPress?.('transformacao', 'Transformação')}
                        />
                        <CategoryCard
                            title="Perfumaria"
                            imageSource={categoryPerfumaria}
                            onPress={() => onCategoryPress?.('perfumaria', 'Perfumaria')}
                        />
                    </View>
                </View>

                {/* Tratamento Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Tratamento</Text>
                        <TouchableOpacity
                            style={styles.viewAllButton}
                            onPress={() => onCategoryPress?.('tratamento', 'Tratamento')}
                        >
                            <Text style={styles.viewAllText}>Ver todos</Text>
                            <ChevronRight size={16} color="#6B7280" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.productGrid}>
                        {mockProducts.map((product) => (
                            <View key={product.id} style={styles.productItem}>
                                <ProductCard
                                    brand={product.brand}
                                    name={product.name}
                                    sku={product.sku}
                                    imageSource={product.image}
                                    isPromo={product.isPromo}
                                    onPress={() => onProductPress?.(product.id)}
                                />
                            </View>
                        ))}
                    </View>
                </View>

                {/* FAQ Section */}
                <View style={[styles.section, styles.faqSection]}>
                    <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>

                    {faqQuestions.map((question, index) => (
                        <TouchableOpacity key={index} style={styles.faqItem}>
                            <Text style={styles.faqText}>{question}</Text>
                            <ChevronRight size={16} color="#6B7280" />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
    },
    bannerSection: {
        paddingTop: 16,
    },
    section: {
        marginTop: 28,
        paddingHorizontal: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 12,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    viewAllButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAllText: {
        fontSize: 14,
        color: '#6B7280',
        marginRight: 4,
    },
    categoryRow: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    productItem: {
        width: '50%',
    },
    faqSection: {
        marginBottom: 100,
    },
    faqItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    faqText: {
        fontSize: 14,
        color: '#374151',
        flex: 1,
        paddingRight: 16,
    },
});
