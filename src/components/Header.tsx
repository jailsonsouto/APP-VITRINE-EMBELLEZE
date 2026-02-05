import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Search, Menu } from 'lucide-react-native';

export function Header() {
    return (
        <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoSection}>
                <View style={styles.logoBadge}>
                    <Text style={styles.logoBadgeText}>E</Text>
                </View>
                <View>
                    <Text style={styles.logoSubtitle}>Vitrine Digital</Text>
                    <Text style={styles.logoTitle}>Embelleze</Text>
                </View>
            </View>

            {/* Action Icons */}
            <View style={styles.actions}>
                <TouchableOpacity style={styles.iconButton}>
                    <Search size={20} color="#6B7280" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Menu size={20} color="#6B7280" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    logoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoBadge: {
        backgroundColor: '#8B5CF6',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    logoBadgeText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 12,
    },
    logoSubtitle: {
        fontSize: 10,
        color: '#6B7280',
    },
    logoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111827',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    iconButton: {
        padding: 8,
    },
});
