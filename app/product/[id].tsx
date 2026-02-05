import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, Share2, Heart, Eye } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const productImage = require('../../src/assets/images/products/shampoo_premium.png');

// Mock product data
const mockProduct = {
    id: '1',
    brand: 'Novex',
    name: 'Shampoo Hidratante Premium Super Nutrição',
    sku: 'NOV001',
    description: 'Shampoo de alta performance desenvolvido com tecnologia exclusiva para cabelos secos e danificados. Fórmula enriquecida com óleos naturais que proporcionam hidratação intensa desde a primeira aplicação.',
    howToUse: 'Aplique o shampoo nos cabelos molhados, massageie suavemente o couro cabeludo e deixe agir por 2 minutos. Enxágue bem e repita a aplicação se necessário. Para melhores resultados, use com a linha completa Novex Nutrição.',
    ingredients: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Pantheno, Arginine, Hydrolyzed Keratin, Cocos Nucifera Oil, Parfum, Citric Acid, Sodium Chloride.',
    images: [productImage, productImage, productImage],
};

const tabs = ['Sobre', 'Modo de Uso', 'Ingredientes'];

export default function ProductDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const [activeTab, setActiveTab] = React.useState(0);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <Text style={styles.tabContentText}>{mockProduct.description}</Text>;
            case 1:
                return <Text style={styles.tabContentText}>{mockProduct.howToUse}</Text>;
            case 2:
                return <Text style={styles.tabContentText}>{mockProduct.ingredients}</Text>;
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
                    <ChevronLeft size={24} color="#111827" />
                </TouchableOpacity>
                <View style={styles.headerActions}>
                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() => setIsFavorite(!isFavorite)}
                    >
                        <Heart
                            size={22}
                            color={isFavorite ? '#EF4444' : '#111827'}
                            fill={isFavorite ? '#EF4444' : 'transparent'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerButton}>
                        <Share2 size={22} color="#111827" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Product Image */}
                <View style={styles.imageContainer}>
                    <Image source={productImage} style={styles.productImage} resizeMode="contain" />
                </View>

                {/* Product Info */}
                <View style={styles.productInfo}>
                    <Text style={styles.brand}>{mockProduct.brand}</Text>
                    <Text style={styles.name}>{mockProduct.name}</Text>
                    <Text style={styles.sku}>SKU: {mockProduct.sku}</Text>
                </View>

                {/* Tab Navigation */}
                <View style={styles.tabBar}>
                    {tabs.map((tab, index) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.tab, activeTab === index && styles.tabActive]}
                            onPress={() => setActiveTab(index)}
                        >
                            <Text style={[styles.tabText, activeTab === index && styles.tabTextActive]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Tab Content */}
                <View style={styles.tabContent}>
                    {renderTabContent()}
                </View>

                {/* Related Products */}
                <View style={styles.relatedSection}>
                    <Text style={styles.relatedTitle}>Produtos Relacionados</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {[1, 2, 3, 4].map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={styles.relatedCard}
                                onPress={() => router.push(`/product/${item + 10}`)}
                            >
                                <Image source={productImage} style={styles.relatedImage} resizeMode="cover" />
                                <Text style={styles.relatedBrand}>Novex</Text>
                                <Text style={styles.relatedName} numberOfLines={2}>Produto Relacionado {item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.bottomSpacer} />
            </ScrollView>

            {/* Bottom Action */}
            <View style={styles.bottomAction}>
                <TouchableOpacity style={styles.detailsButton}>
                    <Eye size={18} color="#FFFFFF" />
                    <Text style={styles.detailsButtonText}>Ver no Site</Text>
                </TouchableOpacity>
            </View>
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
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    headerButton: {
        padding: 8,
    },
    headerActions: {
        flexDirection: 'row',
        gap: 4,
    },
    scrollView: {
        flex: 1,
    },
    imageContainer: {
        width: width,
        height: width * 0.8,
        backgroundColor: '#F9FAFB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        width: '70%',
        height: '70%',
    },
    productInfo: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    brand: {
        fontSize: 13,
        color: '#8B5CF6',
        fontWeight: '600',
        marginBottom: 4,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 8,
        lineHeight: 28,
    },
    sku: {
        fontSize: 12,
        color: '#9CA3AF',
    },
    tabBar: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    tab: {
        flex: 1,
        paddingVertical: 14,
        alignItems: 'center',
    },
    tabActive: {
        borderBottomWidth: 2,
        borderBottomColor: '#8B5CF6',
    },
    tabText: {
        fontSize: 14,
        color: '#6B7280',
        fontWeight: '500',
    },
    tabTextActive: {
        color: '#8B5CF6',
    },
    tabContent: {
        padding: 16,
    },
    tabContentText: {
        fontSize: 14,
        color: '#374151',
        lineHeight: 22,
    },
    relatedSection: {
        paddingTop: 8,
        paddingBottom: 16,
    },
    relatedTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 12,
        paddingHorizontal: 16,
    },
    relatedCard: {
        width: 140,
        marginLeft: 16,
        marginRight: 4,
    },
    relatedImage: {
        width: 140,
        height: 140,
        borderRadius: 12,
        backgroundColor: '#F9FAFB',
        marginBottom: 8,
    },
    relatedBrand: {
        fontSize: 11,
        color: '#8B5CF6',
        fontWeight: '500',
    },
    relatedName: {
        fontSize: 13,
        color: '#111827',
        fontWeight: '500',
    },
    bottomSpacer: {
        height: 100,
    },
    bottomAction: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8B5CF6',
        paddingVertical: 14,
        borderRadius: 12,
        gap: 8,
    },
    detailsButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
