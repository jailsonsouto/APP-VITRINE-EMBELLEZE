import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Heart, ShoppingBag } from 'lucide-react-native';
import { api, Product } from '../services/api';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

interface ProductListScreenProps {
    params?: {
        type?: string;
        slug?: string;
        name?: string;
        productId?: string;
    };
    onBack: () => void;
    onProductPress: (productId: string) => void;
}



interface ProductCardListProps {
    product: Product;
    onPress: () => void;
}

const ProductCardList: React.FC<ProductCardListProps> = ({ product, onPress }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const discount = product.discount || 0;

    return (
        <TouchableOpacity style={styles.productCard} onPress={onPress}>
            {/* Discount Badge */}
            {discount > 0 && (
                <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-{product.discount}%</Text>
                </View>
            )}

            {/* Favorite Button */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => setIsFavorite(!isFavorite)}
            >
                <Heart
                    size={18}
                    color={isFavorite ? '#EF4444' : '#9CA3AF'}
                    fill={isFavorite ? '#EF4444' : 'none'}
                />
            </TouchableOpacity>

            {/* Product Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                    resizeMode="contain"
                />
            </View>

            {/* Product Info */}
            <View style={styles.productInfo}>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>

                {/* Rating */}
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingStars}>{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</Text>
                    <Text style={styles.reviewCount}>({product.reviews})</Text>
                </View>

                {/* Price */}
                <View style={styles.priceContainer}>
                    {(product.originalPrice || 0) > (product.salePrice || product.price) && (
                        <Text style={styles.originalPrice}>
                            R$ {(product.originalPrice || 0).toFixed(2).replace('.', ',')}
                        </Text>
                    )}
                    <Text style={styles.salePrice}>
                        R$ {(product.salePrice || product.price).toFixed(2).replace('.', ',')}
                    </Text>
                </View>

                {/* Add Button */}
                <TouchableOpacity style={styles.addButton}>
                    <ShoppingBag size={16} color="#FFFFFF" />
                    <Text style={styles.addButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export const ProductListScreen: React.FC<ProductListScreenProps> = ({
    params,
    onBack,
    onProductPress
}) => {
    const title = params?.name || 'Produtos';

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                if (params?.type === 'categoria' && params.slug) {
                    const data = await api.getProductsByCategory(params.slug);
                    setProducts(data);
                } else if (params?.type === 'marca' && params.slug) {
                    const data = await api.getProductsByBrand(params.slug);
                    setProducts(data);
                } else {
                    const data = await api.getProducts();
                    setProducts(data);
                }
            } catch (error) {
                console.error('Failed to fetch products', error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [params]);

    // Loading State
    if (loading) {
        return (
            <SafeAreaView style={[styles.container, styles.centerContent]} edges={['top']}>
                <View style={[styles.header, { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }]}>
                    <TouchableOpacity onPress={onBack} style={styles.backButton}>
                        <ChevronLeft size={24} color="#111827" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{title}</Text>
                    <View style={styles.headerSpacer} />
                </View>
                <ActivityIndicator size="large" color="#7C3AED" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <ChevronLeft size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
                <View style={styles.headerSpacer} />
            </View>

            {/* Results Count */}
            <View style={styles.resultsBar}>
                <Text style={styles.resultsText}>{products.length} produtos encontrados</Text>
            </View>

            {/* Product Grid */}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.productGrid}
                showsVerticalScrollIndicator={false}
            >
                {products.map((product) => (
                    <ProductCardList
                        key={product.id}
                        product={product}
                        onPress={() => onProductPress(product.id)}
                    />
                ))}
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    backButton: {
        padding: 8
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827'
    },
    headerSpacer: {
        width: 40
    },
    resultsBar: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    resultsText: {
        fontSize: 14,
        color: '#6B7280'
    },
    scrollView: {
        flex: 1
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
        paddingTop: 12
    },
    productCard: {
        width: cardWidth,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginHorizontal: 6,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        overflow: 'hidden'
    },
    discountBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#EF4444',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        zIndex: 10
    },
    discountText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700'
    },
    favoriteButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        padding: 6,
        zIndex: 10
    },
    imageContainer: {
        width: '100%',
        height: cardWidth * 1.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9FAFB',
        padding: 10
    },
    productImage: {
        width: '85%',
        height: '85%'
    },
    productInfo: {
        padding: 12
    },
    brand: {
        fontSize: 11,
        color: '#7C3AED',
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 2
    },
    productName: {
        fontSize: 13,
        fontWeight: '500',
        color: '#111827',
        marginBottom: 6,
        lineHeight: 18,
        height: 36
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6
    },
    ratingStars: {
        fontSize: 12,
        color: '#F59E0B'
    },
    reviewCount: {
        fontSize: 11,
        color: '#9CA3AF',
        marginLeft: 4
    },
    priceContainer: {
        marginBottom: 10
    },
    originalPrice: {
        fontSize: 12,
        color: '#9CA3AF',
        textDecorationLine: 'line-through'
    },
    salePrice: {
        fontSize: 16,
        fontWeight: '700',
        color: '#EF4444'
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EC4899',
        paddingVertical: 10,
        borderRadius: 8
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 6
    },
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
