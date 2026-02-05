import React from 'react';
import { View, Image, Text } from 'react-native';

// Import local assets
// Note: In React Native, we require images or use import
// Since we downloaded them, we assume they are at ../assets/images/
const bannerMain = require('../assets/images/banner_main.png');

export function HeroCarousel() {
    return (
        <View className="mt-4 px-4">
            <View className="w-full h-[160px] rounded-2xl overflow-hidden bg-gray-200 relative">
                <Image
                    source={bannerMain}
                    className="w-full h-full object-cover"
                    resizeMode="cover"
                />
                {/* Overlay Gradient or Text could go here */}
                <View className="absolute bottom-4 left-4">
                    <Text className="text-white font-bold text-lg">Nova Linha de Tratamentos</Text>
                    <Text className="text-white text-sm">Descubra os lançamentos</Text>
                </View>
            </View>
        </View>
    );
}
