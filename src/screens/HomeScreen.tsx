import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';
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

const categories = [
    { id: 'tratamento', title: 'Tratamento', image: categoryTratamento },
    { id: 'coloracao', title: 'Tintura', image: categoryTintura },
    { id: 'transformacao', title: 'Transformação', image: categoryTransformacao },
    { id: 'perfumes', title: 'Perfumaria', image: categoryPerfumaria },
];

const faqQuestions = [
    'Como aplicar os produtos de tratamento?',
    'Qual a durabilidade das tinturas?',
    'Como escolher o tom ideal?',
    'Produtos são testados dermatologicamente?',
];

export function HomeScreen() {
    const router = useRouter();

    const handleCategoryPress = (categoryId: string) => {
        router.push(`/category/${categoryId}`);
    };

    const handleProductPress = (productId: string) => {
        router.push(`/product/${productId}`);
    };

    const handleViewAllPress = () => {
        router.push('/category/tratamento');
    };

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Hero Banner */}
                <TouchableOpacity
                    style={styles.bannerSection}
                    onPress={() => router.push('/category/novidades')}
                >
                    <HeroBanner
                        imageSource={bannerImage}
                        title="Nova Linha de Tratamentos"
                        subtitle="Descubra os lançamentos da temporada"
                    />
                </TouchableOpacity>

                {/* Categories Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Categorias</Text>

                    <View style={styles.categoryRow}>
                        <CategoryCard
                            title={categories[0].title}
                            imageSource={categories[0].image}
                            onPress={() => handleCategoryPress(categories[0].id)}
                        />
                        <CategoryCard
                            title={categories[1].title}
                            imageSource={categories[1].image}
                            onPress={() => handleCategoryPress(categories[1].id)}
                        />
                    </View>

                    <View style={styles.categoryRow}>
                        <CategoryCard
                            title={categories[2].title}
                            imageSource={categories[2].image}
                            onPress={() => handleCategoryPress(categories[2].id)}
                        />
                        <CategoryCard
                            title={categories[3].title}
                            imageSource={categories[3].image}
                            onPress={() => handleCategoryPress(categories[3].id)}
                        />
                    </View>
                </View>

                {/* Tratamento Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Tratamento</Text>
                        <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllPress}>
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
                                    onPress={() => handleProductPress(product.id)}
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
