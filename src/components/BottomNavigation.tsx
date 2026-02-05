import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Home, Grid3X3, Search, Tag, MoreHorizontal } from 'lucide-react-native';

type TabName = 'inicio' | 'categorias' | 'buscar' | 'marcas' | 'mais';

interface BottomNavigationProps {
    activeTab: TabName;
    onTabPress: (tab: TabName) => void;
}

export function BottomNavigation({ activeTab, onTabPress }: BottomNavigationProps) {
    const tabs = [
        { id: 'inicio' as TabName, label: 'Início', icon: Home },
        { id: 'categorias' as TabName, label: 'Categorias', icon: Grid3X3 },
        { id: 'buscar' as TabName, label: 'Buscar', icon: Search, isCenter: true },
        { id: 'marcas' as TabName, label: 'Marcas', icon: Tag },
        { id: 'mais' as TabName, label: 'Mais', icon: MoreHorizontal },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                if (tab.isCenter) {
                    return (
                        <TouchableOpacity
                            key={tab.id}
                            onPress={() => onTabPress(tab.id)}
                            style={styles.centerButton}
                        >
                            <Icon size={20} color="#FFFFFF" />
                        </TouchableOpacity>
                    );
                }

                return (
                    <TouchableOpacity
                        key={tab.id}
                        onPress={() => onTabPress(tab.id)}
                        style={styles.tabButton}
                    >
                        <Icon size={20} color={isActive ? '#8B5CF6' : '#6B7280'} />
                        <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    tabButton: {
        alignItems: 'center',
        paddingVertical: 4,
    },
    tabLabel: {
        fontSize: 10,
        marginTop: 4,
        color: '#6B7280',
    },
    tabLabelActive: {
        color: '#8B5CF6',
        fontWeight: '500',
    },
    centerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8B5CF6',
        borderRadius: 24,
        width: 48,
        height: 48,
        marginTop: -24,
        shadowColor: '#8B5CF6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
});
