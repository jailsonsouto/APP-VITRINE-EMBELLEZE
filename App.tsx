import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';
import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { BrandsScreen } from './src/screens/BrandsScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { BottomNavigation } from './src/components/BottomNavigation';

type TabName = 'inicio' | 'categorias' | 'buscar' | 'marcas' | 'mais';
type ScreenName = 'home' | 'categories' | 'brands' | 'search' | 'productList' | 'productDetail';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>('inicio');
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('home');
  const [screenParams, setScreenParams] = useState<any>(null);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8B5CF6" />
      </View>
    );
  }

  const handleTabPress = (tab: TabName) => {
    setActiveTab(tab);

    switch (tab) {
      case 'inicio':
        setCurrentScreen('home');
        break;
      case 'categorias':
        setCurrentScreen('categories');
        break;
      case 'buscar':
        setCurrentScreen('search');
        break;
      case 'marcas':
        setCurrentScreen('brands');
        break;
      case 'mais':
        // TODO: Open drawer menu
        break;
    }
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
    setActiveTab('inicio');
  };

  const handleCategoryPress = (categoryId: string) => {
    setScreenParams({ categoryId });
    // TODO: Navigate to product list
    console.log('Category pressed:', categoryId);
  };

  const handleBrandPress = (brandId: string) => {
    setScreenParams({ brandId });
    // TODO: Navigate to product list
    console.log('Brand pressed:', brandId);
  };

  const handleProductPress = (productId: string) => {
    setScreenParams({ productId });
    // TODO: Navigate to product detail
    console.log('Product pressed:', productId);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onProductPress={handleProductPress} />;
      case 'categories':
        return (
          <CategoriesScreen
            onBack={navigateToHome}
            onCategoryPress={handleCategoryPress}
          />
        );
      case 'brands':
        return (
          <BrandsScreen
            onBack={navigateToHome}
            onBrandPress={handleBrandPress}
          />
        );
      case 'search':
        return (
          <SearchScreen
            onBack={navigateToHome}
            onProductPress={handleProductPress}
          />
        );
      default:
        return <HomeScreen onProductPress={handleProductPress} />;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <StatusBar style="dark" />

        {/* Main Content */}
        <View style={styles.content}>
          {renderScreen()}
        </View>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
});
