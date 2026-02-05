import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import { BottomNavigation } from '../../src/components/BottomNavigation';
import { DrawerMenu } from '../../src/components/DrawerMenu';
import { useRouter } from 'expo-router';

type TabName = 'inicio' | 'categorias' | 'buscar' | 'marcas' | 'mais';

export default function TabsLayout() {
    const [activeTab, setActiveTab] = useState<TabName>('inicio');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const router = useRouter();

    const handleTabPress = (tab: TabName) => {
        setActiveTab(tab);

        switch (tab) {
            case 'inicio':
                router.push('/(tabs)');
                break;
            case 'categorias':
                router.push('/(tabs)/categorias');
                break;
            case 'buscar':
                router.push('/search');
                break;
            case 'marcas':
                router.push('/(tabs)/marcas');
                break;
            case 'mais':
                setIsDrawerOpen(true);
                break;
        }
    };

    return (
        <View style={styles.container}>
            <Slot />
            <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
            <DrawerMenu
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});
