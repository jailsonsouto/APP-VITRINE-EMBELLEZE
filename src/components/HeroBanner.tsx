import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface HeroBannerProps {
    imageSource: ImageSourcePropType;
    title: string;
    subtitle: string;
}

export function HeroBanner({ imageSource, title, subtitle }: HeroBannerProps) {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} resizeMode="cover" />
            {/* Overlay Content */}
            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 14,
        borderRadius: 12,
        overflow: 'hidden',
        height: 160,
        position: 'relative',
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.25)',
        paddingHorizontal: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 4,
    },
    subtitle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 14,
        textAlign: 'center',
    },
});
