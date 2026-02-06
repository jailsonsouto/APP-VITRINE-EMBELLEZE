import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

const categoryTratamento = require('../assets/images/categories/tratamento.png');
const categoryTintura = require('../assets/images/categories/tintura.png');
const categoryTransformacao = require('../assets/images/categories/transformacao.png');
const categoryPerfumaria = require('../assets/images/categories/perfumaria.png');

const categories = [
    { id: 'cabelos', title: 'Cabelos', subtitle: 'Shampoos • Condicionadores • Máscaras', image: categoryTratamento, color: '#F9FAFB' },
    { id: 'perfumes', title: 'Perfumes e Perfumaria', subtitle: 'Perfumes • Desodorantes • Águas', image: categoryPerfumaria, color: '#EBE5F9' },
    { id: 'maquiagem', title: 'Maquiagem', subtitle: 'Base • Batom • Sombras', image: categoryTransformacao, color: '#EBF5FF' },
    { id: 'cuidados-pele', title: 'Cuidados para Pele', subtitle: 'Hidratantes • Limpeza • Proteção', image: categoryTintura, color: '#F0FDF4' },
    { id: 'corpo-banho', title: 'Corpo e Banho', subtitle: 'Sabonetes • Hidratantes • Óleos', image: categoryTratamento, color: '#FEF3C7' },
    { id: 'presentes', title: 'Presentes', subtitle: 'Kits • Conjuntos • Embalagens', image: categoryTransformacao, color: '#FEE2E2' },
];

interface CategoriesScreenProps {
    onBack: () => void;
    onCategoryPress: (categoryId: string) => void;
}

export function CategoriesScreen({ onBack, onCategoryPress }: CategoriesScreenProps) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <ChevronLeft size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Categorias</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={[styles.categoryCard, { backgroundColor: category.color }]}
                        onPress={() => onCategoryPress(category.id)}
                    >
                        <View style={styles.categoryInfo}>
                            <Text style={styles.categoryTitle}>{category.title}</Text>
                            <Text style={styles.categorySubtitle}>{category.subtitle}</Text>
                        </View>
                        <Image source={category.image} style={styles.categoryImage} resizeMode="cover" />
                    </TouchableOpacity>
                ))}
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
    },
    placeholder: {
        width: 32,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    categoryCard: {
        flexDirection: 'row',
        borderRadius: 16,
        marginBottom: 12,
        overflow: 'hidden',
        height: 100,
    },
    categoryInfo: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 8,
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 4,
    },
    categorySubtitle: {
        fontSize: 12,
        color: '#6B7280',
    },
    categoryImage: {
        width: 120,
        height: 100,
    },
    bottomSpacer: {
        height: 100,
    },
});
