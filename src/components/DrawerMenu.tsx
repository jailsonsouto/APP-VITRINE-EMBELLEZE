import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Modal,
    Animated,
    Dimensions,
    Pressable
} from 'react-native';
import {
    X,
    TrendingUp,
    Calendar,
    HeartPulse,
    Grid3X3,
    Tag,
    Sparkles,
    Palette,
    Wand2,
    Baby,
    Briefcase,
    MoreHorizontal,
    ChevronRight
} from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.85;

interface DrawerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { id: 'mais-vendidos', label: 'Mais Vendidos', icon: TrendingUp, slug: 'mais-vendidos' },
    { id: 'cronograma', label: 'Cronograma Capilar', icon: Calendar, slug: 'cronograma-capilar' },
    { id: 'necessidades', label: 'Necessidades do Cabelo', icon: HeartPulse, slug: 'necessidades' },
    { id: 'categorias', label: 'Categorias de Produtos', icon: Grid3X3, slug: 'categorias' },
    { id: 'marcas', label: 'Marcas', icon: Tag, slug: 'marcas', hasSubmenu: true },
    { id: 'novidades', label: 'Novidades', icon: Sparkles, slug: 'novidades' },
    { id: 'coloracao', label: 'Coloração', icon: Palette, slug: 'coloracao' },
    { id: 'transformacao', label: 'Transformação', icon: Wand2, slug: 'transformacao' },
    { id: 'kids', label: 'Linha Kids', icon: Baby, slug: 'kids' },
    { id: 'profissional', label: 'Profissional', icon: Briefcase, slug: 'profissional' },
    { id: 'diversos', label: 'Diversos', icon: MoreHorizontal, slug: 'diversos' },
];

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
    const router = useRouter();
    const slideAnim = React.useRef(new Animated.Value(-DRAWER_WIDTH)).current;

    React.useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: isOpen ? 0 : -DRAWER_WIDTH,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isOpen]);

    const handleItemPress = (slug: string) => {
        onClose();
        router.push(`/category/${slug}`);
    };

    if (!isOpen) return null;

    return (
        <Modal
            visible={isOpen}
            transparent
            animationType="none"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <Pressable style={styles.backdrop} onPress={onClose} />
                <Animated.View
                    style={[
                        styles.drawer,
                        { transform: [{ translateX: slideAnim }] }
                    ]}
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerSubtitle}>Vitrine Digital</Text>
                            <Text style={styles.headerTitle}>Embelleze</Text>
                        </View>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <X size={24} color="#111827" />
                        </TouchableOpacity>
                    </View>

                    {/* Menu Items */}
                    <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.menuItem}
                                    onPress={() => handleItemPress(item.slug)}
                                >
                                    <View style={styles.menuItemLeft}>
                                        <View style={styles.iconContainer}>
                                            <Icon size={20} color="#8B5CF6" />
                                        </View>
                                        <Text style={styles.menuItemLabel}>{item.label}</Text>
                                    </View>
                                    <ChevronRight size={20} color="#9CA3AF" />
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Versão 1.0.0</Text>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        flexDirection: 'row',
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    drawer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: DRAWER_WIDTH,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    headerSubtitle: {
        fontSize: 12,
        color: '#6B7280',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111827',
    },
    closeButton: {
        padding: 8,
    },
    menuList: {
        flex: 1,
        paddingTop: 8,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 14,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#F5F3FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    menuItemLabel: {
        fontSize: 15,
        color: '#111827',
        fontWeight: '500',
    },
    footer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    footerText: {
        fontSize: 12,
        color: '#9CA3AF',
        textAlign: 'center',
    },
});
