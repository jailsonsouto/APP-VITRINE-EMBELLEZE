import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Droplets, Zap, Shield, ChevronRight } from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface CronogramaCapilarScreenProps {
    onBack: () => void;
}

export const CronogramaCapilarScreen: React.FC<CronogramaCapilarScreenProps> = ({ onBack }) => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <ChevronLeft size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cronograma Capilar</Text>
                <View style={styles.headerSpacer} />
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Intro Section */}
                <View style={styles.introSection}>
                    <Text style={styles.introTitle}>O que é Cronograma Capilar?</Text>
                    <Text style={styles.introText}>
                        É uma rotina de cuidados com os cabelos que intercala três tratamentos principais: Hidratação, Nutrição e Reconstrução. Cada etapa oferece uma solução específica para os fios danificados.
                    </Text>
                </View>

                {/* Steps */}
                <View style={styles.stepsContainer}>
                    <View style={styles.stepCard}>
                        <View style={[styles.stepIconContainer, { backgroundColor: '#DBEAFE' }]}>
                            <Droplets size={24} color="#2563EB" />
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Hidratação</Text>
                            <Text style={styles.stepDescription}>
                                Repõe a água dos fios, trazendo maciez e suavidade. Ideal para cabelos ressecados e sem brilho.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.stepCard}>
                        <View style={[styles.stepIconContainer, { backgroundColor: '#FEF3C7' }]}>
                            <Zap size={24} color="#D97706" />
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Nutrição</Text>
                            <Text style={styles.stepDescription}>
                                Repõe os óleos naturais, combatendo o frizz e as pontas duplas. Perfeito para cabelos cacheados e crespos.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.stepCard}>
                        <View style={[styles.stepIconContainer, { backgroundColor: '#FCE7F3' }]}>
                            <Shield size={24} color="#DB2777" />
                        </View>
                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Reconstrução</Text>
                            <Text style={styles.stepDescription}>
                                Restaura a massa capilar e fortalece fios quebradiços. Indicado para cabelos quimicamente tratados.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Call to Action */}
                <View style={styles.ctaContainer}>
                    <Text style={styles.ctaTitle}>Descubra o cronograma ideal para você</Text>
                    <Text style={styles.ctaText}>
                        Faça nosso quiz e receba uma rotina personalizada de cuidados.
                    </Text>
                    <TouchableOpacity style={styles.ctaButton}>
                        <Text style={styles.ctaButtonText}>Começar Quiz</Text>
                        <ChevronRight size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
    },
    headerSpacer: {
        width: 40,
    },
    content: {
        flex: 1,
    },
    introSection: {
        padding: 24,
        alignItems: 'center',
    },
    introTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#7C3AED',
        marginBottom: 12,
        textAlign: 'center',
    },
    introText: {
        fontSize: 16,
        color: '#4B5563',
        textAlign: 'center',
        lineHeight: 24,
    },
    stepsContainer: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    stepCard: {
        flexDirection: 'row',
        backgroundColor: '#F9FAFB',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    stepIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    stepContent: {
        flex: 1,
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 4,
    },
    stepDescription: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
    ctaContainer: {
        margin: 16,
        padding: 24,
        backgroundColor: '#7C3AED',
        borderRadius: 24,
        alignItems: 'center',
    },
    ctaTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 8,
        textAlign: 'center',
    },
    ctaText: {
        fontSize: 15,
        color: '#E9D5FF',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 22,
    },
    ctaButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EC4899',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    ctaButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        marginRight: 8,
    },
});
