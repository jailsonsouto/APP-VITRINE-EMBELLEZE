import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { Eye } from 'lucide-react-native';

interface ProductCardProps {
    brand: string;
    name: string;
    sku: string;
    imageSource: ImageSourcePropType;
    isPromo?: boolean;
    onPress?: () => void;
}

export function ProductCard({ brand, name, sku, imageSource, isPromo, onPress }: ProductCardProps) {
    return (
        <View style={styles.container}>
            {/* Product Image */}
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} resizeMode="cover" />
                {isPromo && (
                    <View style={styles.promoBadge}>
                        <Text style={styles.promoText}>Promoção</Text>
                    </View>
                )}
            </View>

            {/* Product Info */}
            <View style={styles.info}>
                <Text style={styles.brand}>{brand}</Text>
                <Text style={styles.name} numberOfLines={2}>{name}</Text>
                <Text style={styles.sku}>SKU: {sku}</Text>

                {/* Action Button */}
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Eye size={14} color="#6B7280" />
                    <Text style={styles.buttonText}>Ver Detalhes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 4,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 140,
    },
    promoBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#8B5CF6',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    promoText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
    info: {
        padding: 12,
    },
    brand: {
        color: '#8B5CF6',
        fontSize: 10,
        fontWeight: '500',
        marginBottom: 4,
    },
    name: {
        color: '#111827',
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    sku: {
        color: '#9CA3AF',
        fontSize: 10,
        marginBottom: 12,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
    },
    buttonText: {
        color: '#6B7280',
        fontSize: 12,
        marginLeft: 6,
    },
});
