import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { ChevronLeft, BookOpen, PlayCircle, Info } from 'lucide-react-native';

interface EducationArticle {
    id: string;
    title: string;
    description: string;
    type: 'article' | 'video';
    image: string;
}

const articles: EducationArticle[] = [
    {
        id: '1',
        title: 'Saiba tudo sobre Transição Capilar',
        description: 'Um guia completo para quem está abandonando a química e assumindo os fios naturais. Descubra como passar por essa fase com confiança.',
        type: 'article',
        image: 'https://blog.embelleze.com/wp-content/uploads/2023/10/transicao-capilar-capa-1280x720.jpg' // Placeholder or actual generic image
    },
    {
        id: '2',
        title: '7 erros no cronograma capilar',
        description: 'Lista os principais equívocos que impedem a eficácia do cronograma capilar e como corrigi-los para ter resultados reais.',
        type: 'article',
        image: 'https://blog.embelleze.com/wp-content/uploads/2023/05/cronograma-capilar-erros-capa-1280x720.webp'
    },
    {
        id: '3',
        title: 'Teste de porosidade capilar',
        description: 'Aprenda a realizar o teste do copo d\'água em casa para definir se seus fios precisam de hidratação, nutrição ou reconstrução.',
        type: 'video',
        image: 'https://blog.embelleze.com/wp-content/uploads/2021/08/teste-de-porosidade-capilar-capa.jpg'
    },
    {
        id: '4',
        title: 'Como saber se o cabelo está saudável?',
        description: 'Dicas práticas e sinais visuais para identificar a saúde da fibra capilar no dia a dia e prevenir danos futuros.',
        type: 'article',
        image: 'https://blog.embelleze.com/wp-content/uploads/2022/03/cabelo-saudavel-capa.jpg'
    }
];

interface EducationScreenProps {
    onBack: () => void;
    onArticlePress: (articleId: string) => void;
}

export const EducationScreen: React.FC<EducationScreenProps> = ({ onBack, onArticlePress }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <ChevronLeft size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Educação & Dicas</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.introCard}>
                    <Info size={24} color="#7C3AED" style={styles.introIcon} />
                    <View style={styles.introTextContainer}>
                        <Text style={styles.introTitle}>Bem-vindo à Embelleze Wiki</Text>
                        <Text style={styles.introText}>
                            Sua base de conhecimento para se tornar um especialista em beleza.
                            Explore guias, tutoriais e vídeos exclusivos.
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Destaques</Text>

                {articles.map((article) => (
                    <TouchableOpacity
                        key={article.id}
                        style={styles.card}
                        onPress={() => onArticlePress(article.id)}
                    >
                        <Image source={{ uri: article.image }} style={styles.cardImage} resizeMode="cover" />
                        <View style={styles.cardBody}>
                            <View style={styles.typeTag}>
                                {article.type === 'video' ? (
                                    <PlayCircle size={14} color="#FFFFFF" />
                                ) : (
                                    <BookOpen size={14} color="#FFFFFF" />
                                )}
                                <Text style={styles.typeText}>
                                    {article.type === 'video' ? 'VÍDEO' : 'ARTIGO'}
                                </Text>
                            </View>
                            <Text style={styles.cardTitle}>{article.title}</Text>
                            <Text style={styles.cardDescription} numberOfLines={2}>
                                {article.description}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
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
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    backButton: {
        padding: 4
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827'
    },
    content: {
        padding: 20
    },
    introCard: {
        flexDirection: 'row',
        backgroundColor: '#F3E8FF',
        padding: 16,
        borderRadius: 12,
        marginBottom: 24,
        alignItems: 'flex-start'
    },
    introIcon: {
        marginTop: 2
    },
    introTextContainer: {
        marginLeft: 12,
        flex: 1
    },
    introTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#7C3AED',
        marginBottom: 4
    },
    introText: {
        fontSize: 14,
        color: '#5B21B6',
        lineHeight: 20
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 16
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        overflow: 'hidden'
    },
    cardImage: {
        width: '100%',
        height: 180,
    },
    cardBody: {
        padding: 16
    },
    typeTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7C3AED', // Brand Color
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 8
    },
    typeText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700',
        marginLeft: 4
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 8
    },
    cardDescription: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20
    }
});
