import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions
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

// Sample product data - in real app this would come from API
const sampleProduct = {
    id: 'gelato-pistache',
    brand: 'Novex',
    name: 'Creme de Tratamento Novex Gelato de Pistache',
    sku: 'EMB0001',
    rating: 5,
    reviews: 11,
    originalPrice: 40.00,
    salePrice: 24.90,
    discount: 38,
    sizes: [
        { label: '1KG', price: 24.90 },
        { label: '400G', price: 12.45 }
    ],
    images: [
        'https://embelleze.com/cdn/shop/files/CREME_DE_TRATAMENTO_GELATO_DE_PISTACHE_1KG.png?v=1730140188&width=800',
        'https://embelleze.com/cdn/shop/files/CREME_DE_TRATAMENTO_GELATO_DE_PISTACHE_1KG_2.png?v=1730140188&width=400'
    ],
    sections: {
        description: 'O Creme de Tratamento Novex Gelato de Pistache é um tratamento ultraprofundo que combina a tecnologia Bomba Lamelar 8 em 1 com ativos poderosos para transformar seus cabelos. Indicado para todos os tipos de cabelo que buscam hidratação intensa, nutrição e brilho espelhado.',
        indication: 'Indicado para todos os tipos de cabelo que precisam de hidratação profunda, nutrição e reconstrução. Ideal para cabelos ressecados, danificados, com frizz ou sem brilho.',
        composition: 'Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Cetyl Alcohol, Stearamidopropyl Dimethylamine, Parfum, Isopropyl Myristate, Propylene Glycol, Glycerin, Hydrolyzed Keratin, Pistacia Vera Seed Oil, Prunus Amygdalus Dulcis Oil, Tocopheryl Acetate...',
        benefits: '• Hidratação profunda e duradoura\n• Nutrição intensiva dos fios\n• Reconstrução da fibra capilar\n• Brilho espelhado\n• Maciez extrema\n• Redução do frizz\n• Proteção contra danos externos\n• Efeito Bomba Lamelar 8 em 1',
        action: 'A tecnologia Bomba Lamelar penetra nas camadas mais profundas do fio, reconstruindo a estrutura capilar de dentro para fora. Os ativos naturais do pistache e amêndoas nutrem e hidratam intensamente.',
        actives: '• Óleo de Pistache: rico em vitaminas E e B, nutre e fortalece\n• Óleo de Amêndoas: hidrata e suaviza os fios\n• Queratina Hidrolisada: reconstrói a fibra capilar\n• Complexo de Vitaminas: protege e revitaliza',
        results: 'Cabelos macios, sedosos e com brilho espelhado logo na primeira aplicação. Fios mais fortes, saudáveis e protegidos contra danos do dia a dia.',
        howToUse: '1. Após lavar os cabelos com shampoo Novex, retire o excesso de água\n2. Aplique o creme de tratamento mecha por mecha\n3. Deixe agir por 3 a 5 minutos (ou mais para tratamento intensivo)\n4. Enxágue bem\n5. Finalize como preferir'
    },
    relatedProducts: [
        { id: 'gelato-cereja', name: 'Gelato de Cereja', price: 24.90, image: 'https://embelleze.com/cdn/shop/products/gelato-cereja.png' },
        { id: 'gelato-morango', name: 'Gelato de Morango', price: 24.90, image: 'https://embelleze.com/cdn/shop/products/gelato-morango.png' }
    ]
};

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ productId, onBack }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedSize, setSelectedSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [expandedSection, setExpandedSection] = useState<string | null>('description');

    const product = sampleProduct; // In real app: fetch by productId

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
                {product.discount > 0 && (
                    <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>-{product.discount}%</Text>
                    </View>
                )}

                {/* Product Image */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.images[0] }}
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
                    {product.images.map((img, index) => (
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

                    {/* Price */}
                    <View style={styles.priceContainer}>
                        {product.originalPrice > product.salePrice && (
                            <Text style={styles.originalPrice}>
                                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                            </Text>
                        )}
                        <Text style={styles.salePrice}>
                            R$ {product.sizes[selectedSize].price.toFixed(2).replace('.', ',')}
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
                        content={product.sections.description}
                        expanded={expandedSection === 'description'}
                        onToggle={() => toggleSection('description')}
                    />
                    <AccordionItem
                        title="Indicação"
                        content={product.sections.indication}
                        expanded={expandedSection === 'indication'}
                        onToggle={() => toggleSection('indication')}
                    />
                    <AccordionItem
                        title="Composição"
                        content={product.sections.composition}
                        expanded={expandedSection === 'composition'}
                        onToggle={() => toggleSection('composition')}
                    />
                    <AccordionItem
                        title="Benefícios"
                        content={product.sections.benefits}
                        expanded={expandedSection === 'benefits'}
                        onToggle={() => toggleSection('benefits')}
                    />
                    <AccordionItem
                        title="Ação"
                        content={product.sections.action}
                        expanded={expandedSection === 'action'}
                        onToggle={() => toggleSection('action')}
                    />
                    <AccordionItem
                        title="Ativos"
                        content={product.sections.actives}
                        expanded={expandedSection === 'actives'}
                        onToggle={() => toggleSection('actives')}
                    />
                    <AccordionItem
                        title="Resultados"
                        content={product.sections.results}
                        expanded={expandedSection === 'results'}
                        onToggle={() => toggleSection('results')}
                    />
                    <AccordionItem
                        title="Modo de Uso"
                        content={product.sections.howToUse}
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
    }
});
