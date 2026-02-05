import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

const categories = [
    {
        id: 'cabelos',
        title: 'Cabelos',
        subtitle: 'Shampoos • Condicionadores • Máscaras',
        image: require('../../src/assets/images/categories/tratamento.png'),
        color: '#F9FAFB',
    },
    {
        id: 'perfumes',
        title: 'Perfumes e Perfumaria',
        subtitle: 'Perfumes • Desodorantes • Águas',
        image: require('../../src/assets/images/categories/perfumaria.png'),
        color: '#EBE5F9',
    },
    {
        id: 'maquiagem',
        title: 'Maquiagem',
        subtitle: 'Base • Batom • Sombras',
        image: require('../../src/assets/images/categories/transformacao.png'),
        color: '#EBF5FF',
    },
    {
        id: 'cuidados-pele',
        title: 'Cuidados para Pele',
        subtitle: 'Hidratantes • Limpeza • Proteção',
        image: require('../../src/assets/images/categories/tintura.png'),
        color: '#F0FDF4',
    },
    {
        id: 'corpo-banho',
        title: 'Corpo e Banho',
        subtitle: 'Sabonetes • Hidratantes • Óleos',
        image: require('../../src/assets/images/categories/tratamento.png'),
        color: '#FEF3C7',
    },
    {
        id: 'saude',
        title: 'Bem-Estar e Saúde',
        subtitle: 'Vitaminas • Suplementos • Cuidados',
        image: require('../../src/assets/images/categories/perfumaria.png'),
        color: '#FCE7F3',
    },
    {
        id: 'presentes',
        title: 'Presentes',
        subtitle: 'Kits • Conjuntos • Embalagens',
        image: require('../../src/assets/images/categories/transformacao.png'),
        color: '#FEE2E2',
    },
];

export default function CategoriasScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
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
                        onPress={() => router.push(`/category/${category.id}`)}
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
        height: '100%',
    },
    bottomSpacer: {
        height: 80,
    },
});
