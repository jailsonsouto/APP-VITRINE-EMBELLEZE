import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';
import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { BrandsScreen } from './src/screens/BrandsScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { ProductListScreen } from './src/screens/ProductListScreen';
import { ProductDetailScreen } from './src/screens/ProductDetailScreen';
import { CronogramaCapilarScreen } from './src/screens/CronogramaCapilarScreen';
import { EducationScreen } from './src/screens/EducationScreen';
import { BottomNavigation } from './src/components/BottomNavigation';
import { DrawerMenu } from './src/components/DrawerMenu';

type TabName = 'inicio' | 'categorias' | 'buscar' | 'marcas' | 'mais';
type ScreenName = 'home' | 'categories' | 'brands' | 'search' | 'productList' | 'productDetail' | 'cronograma' | 'education';

interface ScreenParams {
  type?: string;
  slug?: string;
  name?: string;
  productId?: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>('inicio');
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('home');
  const [screenParams, setScreenParams] = useState<ScreenParams>({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        setScreenParams({});
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
        setIsDrawerOpen(true);
        break;
    }
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
    setActiveTab('inicio');
    setScreenParams({});
  };

  const handleCategoryPress = (categoryId: string, categoryName?: string) => {
    setScreenParams({
      type: 'categoria',
      slug: categoryId,
      name: categoryName || categoryId
    });
    setCurrentScreen('productList');
  };

  const handleBrandPress = (brandId: string, brandName?: string) => {
    setScreenParams({
      type: 'marca',
      slug: brandId,
      name: brandName || brandId
    });
    setCurrentScreen('productList');
  };

  const handleProductPress = (productId: string) => {
    // Preserve existing params (type, slug, name) so we can navigate back to list
    setScreenParams(prev => ({ ...prev, productId }));
    setCurrentScreen('productDetail');
  };

  const handleDrawerNavigate = (screen: string, params?: any) => {
    if (screen === 'productList') {
      setScreenParams(params);
      setCurrentScreen('productList');
    } else if (screen === 'cronograma') {
      setCurrentScreen('cronograma');
    } else if (screen === 'education') {
      setCurrentScreen('education');
    }
  };

  const handleBackFromList = () => {
    setCurrentScreen('home');
    setActiveTab('inicio');
    setScreenParams({});
  };

  const handleBackFromDetail = () => {
    // If came from product list, go back to list
    if (screenParams.type) {
      setCurrentScreen('productList');
    } else {
      setCurrentScreen('home');
      setActiveTab('inicio');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            onProductPress={handleProductPress}
            onCategoryPress={handleCategoryPress}
          />
        );
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
      case 'productList':
        return (
          <ProductListScreen
            params={screenParams}
            onBack={handleBackFromList}
            onProductPress={handleProductPress}
          />
        );
      case 'productDetail':
        return (
          <ProductDetailScreen
            productId={screenParams.productId}
            onBack={handleBackFromDetail}
          />
        );
      case 'cronograma':
        return (
          <CronogramaCapilarScreen
            onBack={navigateToHome}
          />
        );
      case 'education':
        return (
          <EducationScreen
            onBack={navigateToHome}
            onArticlePress={(id) => console.log('Article pressed:', id)}
          />
        );
      default:
        return <HomeScreen onProductPress={handleProductPress} />;
    }
  };

  // Determine if we should show the bottom navigation
  const showBottomNav = currentScreen !== 'productDetail';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <StatusBar style="dark" />

        {/* Main Content */}
        <View style={styles.content}>
          {renderScreen()}
        </View>

        {/* Bottom Navigation */}
        {showBottomNav && (
          <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
        )}

        {/* Drawer Menu */}
        <DrawerMenu
          visible={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onNavigate={handleDrawerNavigate}
        />
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
