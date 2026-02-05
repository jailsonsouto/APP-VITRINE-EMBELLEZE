import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';

interface CategoryCardProps {
    title: string;
    imageSource: ImageSourcePropType;
    onPress?: () => void;
}

export function CategoryCard({ title, imageSource, onPress }: CategoryCardProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={imageSource} style={styles.image} resizeMode="cover" />
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 4,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#F3F4F6',
    },
    image: {
        width: '100%',
        height: 100,
    },
    labelContainer: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: '#FFFFFF',
    },
    label: {
        fontSize: 14,
        color: '#111827',
        textAlign: 'center',
        fontWeight: '500',
    },
});
