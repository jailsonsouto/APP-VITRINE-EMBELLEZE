import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

const brands = [
    { id: 'novex', name: 'Novex', products: 142, color: '#8B5CF6' },
    { id: 'natucor', name: 'Natucor', products: 87, color: '#F59E0B' },
    { id: 'maxton', name: 'Maxton', products: 45, color: '#3B82F6' },
    { id: 'rena', name: 'Rená', products: 32, color: '#EF4444' },
    { id: 'pelucia', name: 'Pelúcia', products: 28, color: '#EC4899' },
    { id: 'hairlife', name: 'HairLife', products: 24, color: '#10B981' },
    { id: 'amacihair', name: 'AmaciHair', products: 18, color: '#6366F1' },
    { id: 'botohair', name: 'BotoHair', products: 15, color: '#14B8A6' },
];

interface BrandsScreenProps {
    onBack: () => void;
    onBrandPress: (brandId: string) => void;
}

export function BrandsScreen({ onBack, onBrandPress }: BrandsScreenProps) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <ChevronLeft size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Marcas</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.grid}>
                    {brands.map((brand) => (
                        <TouchableOpacity
                            key={brand.id}
                            style={styles.brandCard}
                            onPress={() => onBrandPress(brand.id)}
                        >
                            <View style={[styles.brandLogo, { backgroundColor: brand.color }]}>
                                <Text style={styles.brandInitial}>{brand.name[0]}</Text>
                            </View>
                            <Text style={styles.brandName}>{brand.name}</Text>
                            <Text style={styles.brandProducts}>{brand.products} produtos</Text>
                        </TouchableOpacity>
                    ))}
                </View>
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
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    brandCard: {
        width: '48%',
        backgroundColor: '#F9FAFB',
        borderRadius: 16,
        padding: 16,
        alignItems: 'center',
        marginBottom: 12,
    },
    brandLogo: {
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    brandInitial: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    brandName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 4,
    },
    brandProducts: {
        fontSize: 12,
        color: '#6B7280',
    },
    bottomSpacer: {
        height: 100,
    },
});
