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
import {
    ChevronLeft,
    Heart,
    Share2,
    Star,
    Minus,
    Plus,
    ChevronDown,
    ChevronUp
} from 'lucide-react-native';
import { api, Product } from '../services/api';

const { width } = Dimensions.get('window');

interface ProductDetailScreenProps {
    productId?: string;
    onBack: () => void;
}

interface AccordionItemProps {
    title: string;
    content: string;
    expanded: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, expanded, onToggle }) => (
    <View style={styles.accordionItem}>
        <TouchableOpacity style={styles.accordionHeader} onPress={onToggle}>
            <Text style={styles.accordionTitle}>{title}</Text>
            {expanded ? (
                <ChevronUp size={20} color="#6B7280" />
            ) : (
                <ChevronDown size={20} color="#6B7280" />
            )}
        </TouchableOpacity>
        {expanded && (
            <View style={styles.accordionContent}>
                <Text style={styles.accordionText}>{content}</Text>
            </View>
        )}
    </View>
);



export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ productId, onBack }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedSize, setSelectedSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [expandedSection, setExpandedSection] = useState<string | null>('description');

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const loadProduct = async () => {
            setLoading(true);
            try {
                if (productId) {
                    const data = await api.getProductById(productId);
                    setProduct(data || null);
                }
            } catch (error) {
                console.error('Failed to load product', error);
            } finally {
                setLoading(false);
            }
        };
        loadProduct();
    }, [productId]);

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, styles.centerContent]} edges={['top']}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onBack} style={styles.headerButton}>
                        <ChevronLeft size={24} color="#111827" />
                    </TouchableOpacity>
                </View>
                <ActivityIndicator size="large" color="#7C3AED" />
            </SafeAreaView>
        );
    }

    if (!product) {
        return (
            <SafeAreaView style={styles.container} edges={['top']}>
                <View style={[styles.header, styles.centerContent]}>
                    <TouchableOpacity onPress={onBack} style={styles.headerButton}>
                        <ChevronLeft size={24} color="#111827" />
                    </TouchableOpacity>
                    <Text>Produto não encontrado</Text>
                </View>
            </SafeAreaView>
        );
    }

    const discount = product.discount || 0;
    const currentPrice = product.sizes ? product.sizes[selectedSize]?.price : (product.salePrice || product.price);
    const sections = product.sections || {
        description: product.description || 'Sem descrição.',
        indication: 'Consulte a embalagem.',
        composition: 'Consulte a embalagem.',
        benefits: 'Consulte a embalagem.',
        action: 'Consulte a embalagem.',
        actives: 'Consulte a embalagem.',
        results: 'Consulte a embalagem.',
        howToUse: 'Consulte a embalagem.'
    };
    const images = product.images && product.images.length > 0 ? product.images : [product.image];

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const handleQuantityChange = (delta: number) => {
        const newQty = quantity + delta;
        if (newQty >= 1 && newQty <= 10) {
            setQuantity(newQty);
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.headerButton}>
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
                            fill={isFavorite ? '#EF4444' : 'none'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerButton}>
                        <Share2 size={22} color="#111827" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Discount Badge */}
                {discount > 0 && (
                    <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>-{discount}%</Text>
                    </View>
                )}

                {/* Product Image */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: images[0] }}
                        style={styles.productImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Thumbnail Strip */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.thumbnailStrip}
                    contentContainerStyle={styles.thumbnailContent}
                >
                    {images.map((img, index) => (
                        <TouchableOpacity key={index} style={styles.thumbnail}>
                            <Image
                                source={{ uri: img }}
                                style={styles.thumbnailImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Product Info */}
                <View style={styles.productInfo}>
                    {/* Brand */}
                    <Text style={styles.brand}>{product.brand}</Text>

                    {/* Name */}
                    <Text style={styles.productName}>{product.name}</Text>

                    {/* Rating */}
                    <View style={styles.ratingContainer}>
                        <View style={styles.stars}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    color="#F59E0B"
                                    fill={i <= product.rating ? '#F59E0B' : 'none'}
                                />
                            ))}
                        </View>
                        <Text style={styles.reviewCount}>({product.reviews} avaliações)</Text>
                    </View>

                    {/* SKU */}
                    <Text style={styles.sku}>SKU: {product.sku}</Text>

                    {/* Size Selector */}
                    {product.sizes && (
                        <>
                            <Text style={styles.sizeLabel}>Tamanho:</Text>
                            <View style={styles.sizeSelector}>
                                {product.sizes.map((size, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[
                                            styles.sizeButton,
                                            selectedSize === index && styles.sizeButtonActive
                                        ]}
                                        onPress={() => setSelectedSize(index)}
                                    >
                                        <Text style={[
                                            styles.sizeButtonText,
                                            selectedSize === index && styles.sizeButtonTextActive
                                        ]}>
                                            {size.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </>
                    )}

                    {/* Price */}
                    <View style={styles.priceContainer}>
                        {(product.originalPrice || 0) > currentPrice && (
                            <Text style={styles.originalPrice}>
                                R$ {(product.originalPrice || 0).toFixed(2).replace('.', ',')}
                            </Text>
                        )}
                        <Text style={styles.salePrice}>
                            R$ {currentPrice.toFixed(2).replace('.', ',')}
                        </Text>
                    </View>

                    {/* Quantity Selector */}
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => handleQuantityChange(-1)}
                        >
                            <Minus size={18} color="#111827" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => handleQuantityChange(1)}
                        >
                            <Plus size={18} color="#111827" />
                        </TouchableOpacity>
                    </View>

                    {/* Add to Cart Button */}
                    <TouchableOpacity style={styles.addToCartButton}>
                        <Text style={styles.addToCartText}>Adicionar ao carrinho</Text>
                    </TouchableOpacity>

                    {/* Free Shipping Notice */}
                    <Text style={styles.freeShipping}>📦 Frete grátis acima de R$149</Text>
                </View>

                {/* Accordion Sections */}
                <View style={styles.accordionContainer}>
                    <AccordionItem
                        title="Descrição"
                        content={sections.description}
                        expanded={expandedSection === 'description'}
                        onToggle={() => toggleSection('description')}
                    />
                    <AccordionItem
                        title="Indicação"
                        content={sections.indication}
                        expanded={expandedSection === 'indication'}
                        onToggle={() => toggleSection('indication')}
                    />
                    <AccordionItem
                        title="Composição"
                        content={sections.composition}
                        expanded={expandedSection === 'composition'}
                        onToggle={() => toggleSection('composition')}
                    />
                    <AccordionItem
                        title="Benefícios"
                        content={sections.benefits}
                        expanded={expandedSection === 'benefits'}
                        onToggle={() => toggleSection('benefits')}
                    />
                    <AccordionItem
                        title="Ação"
                        content={sections.action}
                        expanded={expandedSection === 'action'}
                        onToggle={() => toggleSection('action')}
                    />
                    <AccordionItem
                        title="Ativos"
                        content={sections.actives}
                        expanded={expandedSection === 'actives'}
                        onToggle={() => toggleSection('actives')}
                    />
                    <AccordionItem
                        title="Resultados"
                        content={sections.results}
                        expanded={expandedSection === 'results'}
                        onToggle={() => toggleSection('results')}
                    />
                    <AccordionItem
                        title="Modo de Uso"
                        content={sections.howToUse}
                        expanded={expandedSection === 'howToUse'}
                        onToggle={() => toggleSection('howToUse')}
                    />
                </View>

                {/* Bottom Padding */}
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    headerButton: {
        padding: 8
    },
    headerActions: {
        flexDirection: 'row'
    },
    content: {
        flex: 1
    },
    discountBadge: {
        position: 'absolute',
        top: 16,
        left: 16,
        backgroundColor: '#EF4444',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
        zIndex: 10
    },
    discountText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700'
    },
    imageContainer: {
        width: width,
        height: width * 0.9,
        backgroundColor: '#F9FAFB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    productImage: {
        width: width * 0.7,
        height: width * 0.8
    },
    thumbnailStrip: {
        paddingVertical: 12
    },
    thumbnailContent: {
        paddingHorizontal: 16
    },
    thumbnail: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        marginRight: 8,
        overflow: 'hidden'
    },
    thumbnailImage: {
        width: '100%',
        height: '100%'
    },
    productInfo: {
        padding: 16
    },
    brand: {
        fontSize: 14,
        color: '#7C3AED',
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 4
    },
    productName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 8
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    stars: {
        flexDirection: 'row',
        marginRight: 8
    },
    reviewCount: {
        fontSize: 14,
        color: '#6B7280'
    },
    sku: {
        fontSize: 12,
        color: '#9CA3AF',
        marginBottom: 16
    },
    sizeLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 8
    },
    sizeSelector: {
        flexDirection: 'row',
        marginBottom: 16
    },
    sizeButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        marginRight: 8
    },
    sizeButtonActive: {
        borderColor: '#7C3AED',
        backgroundColor: '#7C3AED'
    },
    sizeButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151'
    },
    sizeButtonTextActive: {
        color: '#FFFFFF'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    originalPrice: {
        fontSize: 16,
        color: '#9CA3AF',
        textDecorationLine: 'line-through',
        marginRight: 12
    },
    salePrice: {
        fontSize: 24,
        fontWeight: '700',
        color: '#EF4444'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    quantityButton: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    quantityText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        paddingHorizontal: 20
    },
    addToCartButton: {
        backgroundColor: '#EC4899',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12
    },
    addToCartText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700'
    },
    freeShipping: {
        fontSize: 14,
        color: '#059669',
        textAlign: 'center'
    },
    accordionContainer: {
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        marginTop: 16
    },
    accordionItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    accordionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    accordionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827'
    },
    accordionContent: {
        paddingHorizontal: 16,
        paddingBottom: 16
    },
    accordionText: {
        fontSize: 14,
        color: '#4B5563',
        lineHeight: 22
    },
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
