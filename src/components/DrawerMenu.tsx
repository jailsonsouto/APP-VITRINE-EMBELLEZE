import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Dimensions,
    Modal
} from 'react-native';
import { X, ChevronDown, ChevronRight, Star, Calendar, Droplets, Grid3X3, Tag, Sparkles, Palette, Wand2, Baby, Briefcase } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface DrawerMenuProps {
    visible: boolean;
    onClose: () => void;
    onNavigate: (screen: string, params?: any) => void;
}

interface AccordionSectionProps {
    title: string;
    icon: React.ReactNode;
    items: { name: string; slug: string }[];
    expanded: boolean;
    onToggle: () => void;
    onItemPress: (slug: string, name: string) => void;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
    title,
    icon,
    items,
    expanded,
    onToggle,
    onItemPress
}) => (
    <View style={styles.accordionSection}>
        <TouchableOpacity style={styles.accordionHeader} onPress={onToggle}>
            <View style={styles.accordionTitleContainer}>
                {icon}
                <Text style={styles.accordionTitle}>{title}</Text>
            </View>
            {expanded ? (
                <ChevronDown size={20} color="#6B7280" />
            ) : (
                <ChevronRight size={20} color="#6B7280" />
            )}
        </TouchableOpacity>
        {expanded && (
            <View style={styles.accordionContent}>
                {items.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.accordionItem}
                        onPress={() => onItemPress(item.slug, item.name)}
                    >
                        <Text style={styles.accordionItemText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )}
    </View>
);

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ visible, onClose, onNavigate }) => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const handleItemPress = (type: string, slug: string, name: string) => {
        onNavigate('productList', { type, slug, name });
        onClose();
    };

    const necessidades = [
        { name: 'Hidratação', slug: 'hidratacao' },
        { name: 'Nutrição', slug: 'nutricao' },
        { name: 'Reconstrução', slug: 'reconstrucao' },
        { name: 'Antifrizz', slug: 'antifrizz' },
        { name: 'Queda', slug: 'queda' },
        { name: 'Crescimento', slug: 'crescimento' },
        { name: 'Caspa', slug: 'caspa' },
        { name: 'Cachos', slug: 'cachos' },
        { name: 'Lisos', slug: 'lisos' }
    ];

    const categorias = [
        { name: 'Shampoo', slug: 'shampoo' },
        { name: 'Condicionador', slug: 'condicionador' },
        { name: 'Creme de Tratamento', slug: 'creme-de-tratamento' },
        { name: 'Máscara Capilar', slug: 'mascara-capilar' },
        { name: 'Recargas', slug: 'recargas' },
        { name: 'Finalizadores', slug: 'finalizadores' },
        { name: 'Kit', slug: 'kit' },
        { name: 'Tônicos', slug: 'tonicos' }
    ];

    const marcas = [
        { name: 'Novex', slug: 'novex' },
        { name: 'Natucor', slug: 'natucor' },
        { name: 'Maxton', slug: 'maxton' },
        { name: 'Pelúcia', slug: 'pelucia' },
        { name: 'Rená', slug: 'rena' },
        { name: 'Bllex', slug: 'bllex' },
        { name: 'Star Color', slug: 'star-color' },
        { name: 'HairLife', slug: 'hairlife' },
        { name: 'AmaciHair', slug: 'amacihair' },
        { name: 'LisaHair', slug: 'lisahair' },
        { name: 'MaxGlow', slug: 'maxglow' },
        { name: 'Fleury', slug: 'fleury' },
        { name: 'Toin', slug: 'toin' },
        { name: 'Nutrisalon', slug: 'nutrisalon' },
        { name: 'Yantra', slug: 'yantra' },
        { name: 'Alkimia', slug: 'alkimia' }
    ];

    const coloracao = [
        { name: 'Preto', slug: 'preto' },
        { name: 'Castanho', slug: 'castanho' },
        { name: 'Loiro', slug: 'loiro' },
        { name: 'Vermelho', slug: 'vermelho' },
        { name: 'Marsala', slug: 'marsala' },
        { name: 'Chocolate', slug: 'chocolate' },
        { name: 'Cores Fantasia', slug: 'fantasia' }
    ];

    const transformacao = [
        { name: 'Henê', slug: 'hene' },
        { name: 'Guanidina', slug: 'guanidina' },
        { name: 'Tioglicolato', slug: 'tioglicolato' },
        { name: 'Progressiva', slug: 'progressiva' }
    ];

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.overlayTouch} onPress={onClose} />
                <View style={styles.drawer}>
                    {/* Header */}
                    <View style={styles.drawerHeader}>
                        <Text style={styles.drawerTitle}>Menu</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <X size={24} color="#111827" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.drawerContent} showsVerticalScrollIndicator={false}>
                        {/* Quick Links */}
                        <TouchableOpacity
                            style={styles.quickLink}
                            onPress={() => { onNavigate('productList', { type: 'special', slug: 'mais-vendidos', name: 'Mais Vendidos' }); onClose(); }}
                        >
                            <Star size={20} color="#7C3AED" />
                            <Text style={styles.quickLinkText}>Mais Vendidos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.quickLink}
                            onPress={() => { onNavigate('cronograma'); onClose(); }}
                        >
                            <Calendar size={20} color="#7C3AED" />
                            <Text style={styles.quickLinkText}>Cronograma Capilar</Text>
                        </TouchableOpacity>

                        <View style={styles.divider} />

                        {/* Necessidades do Cabelo */}
                        <AccordionSection
                            title="Necessidades do Cabelo"
                            icon={<Droplets size={20} color="#7C3AED" />}
                            items={necessidades}
                            expanded={expandedSection === 'necessidades'}
                            onToggle={() => toggleSection('necessidades')}
                            onItemPress={(slug, name) => handleItemPress('necessidade', slug, name)}
                        />

                        {/* Categorias de Produtos */}
                        <AccordionSection
                            title="Categorias de Produtos"
                            icon={<Grid3X3 size={20} color="#7C3AED" />}
                            items={categorias}
                            expanded={expandedSection === 'categorias'}
                            onToggle={() => toggleSection('categorias')}
                            onItemPress={(slug, name) => handleItemPress('categoria', slug, name)}
                        />

                        {/* Marcas */}
                        <AccordionSection
                            title="Marcas"
                            icon={<Tag size={20} color="#7C3AED" />}
                            items={marcas}
                            expanded={expandedSection === 'marcas'}
                            onToggle={() => toggleSection('marcas')}
                            onItemPress={(slug, name) => handleItemPress('marca', slug, name)}
                        />

                        <View style={styles.divider} />

                        {/* Other Links */}
                        <TouchableOpacity
                            style={styles.quickLink}
                            onPress={() => { onNavigate('productList', { type: 'special', slug: 'novidades', name: 'Novidades' }); onClose(); }}
                        >
                            <Sparkles size={20} color="#7C3AED" />
                            <Text style={styles.quickLinkText}>Novidades</Text>
                        </TouchableOpacity>

                        {/* Coloração */}
                        <AccordionSection
                            title="Coloração"
                            icon={<Palette size={20} color="#7C3AED" />}
                            items={coloracao}
                            expanded={expandedSection === 'coloracao'}
                            onToggle={() => toggleSection('coloracao')}
                            onItemPress={(slug, name) => handleItemPress('categoria', slug, name)}
                        />

                        {/* Transformação */}
                        <AccordionSection
                            title="Transformação"
                            icon={<Wand2 size={20} color="#7C3AED" />}
                            items={transformacao}
                            expanded={expandedSection === 'transformacao'}
                            onToggle={() => toggleSection('transformacao')}
                            onItemPress={(slug, name) => handleItemPress('categoria', slug, name)}
                        />

                        <TouchableOpacity
                            style={styles.quickLink}
                            onPress={() => { onNavigate('productList', { type: 'special', slug: 'linha-kids', name: 'Linha Kids' }); onClose(); }}
                        >
                            <Baby size={20} color="#7C3AED" />
                            <Text style={styles.quickLinkText}>Linha Kids</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.quickLink}
                            onPress={() => { onNavigate('productList', { type: 'special', slug: 'profissional', name: 'Profissional' }); onClose(); }}
                        >
                            <Briefcase size={20} color="#7C3AED" />
                            <Text style={styles.quickLinkText}>Profissional</Text>
                        </TouchableOpacity>

                        <View style={{ height: 40 }} />
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    overlayTouch: {
        flex: 1
    },
    drawer: {
        width: width * 0.85,
        maxWidth: 320,
        backgroundColor: '#FFFFFF',
        height: height,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10
    },
    drawerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    drawerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827'
    },
    closeButton: {
        padding: 8
    },
    drawerContent: {
        flex: 1,
        paddingHorizontal: 16
    },
    quickLink: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 4
    },
    quickLinkText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#111827',
        marginLeft: 12
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E7EB',
        marginVertical: 8
    },
    accordionSection: {
        marginVertical: 4
    },
    accordionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 4
    },
    accordionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    accordionTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#111827',
        marginLeft: 12
    },
    accordionContent: {
        paddingLeft: 36,
        paddingBottom: 8
    },
    accordionItem: {
        paddingVertical: 10
    },
    accordionItemText: {
        fontSize: 14,
        color: '#4B5563'
    }
});
