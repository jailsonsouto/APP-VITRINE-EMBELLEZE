
export interface Product {
    id: string;
    brand: string;
    name: string;
    price: number;
    originalPrice?: number;
    salePrice?: number;
    discount?: number;
    image: string;
    rating: number;
    reviews: number;
    description?: string;
    isPromo?: boolean;
    sku?: string;
    images?: string[];
    sizes?: { label: string; price: number }[];
    sections?: {
        description: string;
        indication: string;
        composition: string;
        benefits: string;
        action: string;
        actives: string;
        results: string;
        howToUse: string;
    };
}

export interface Category {
    id: string;
    name: string;
    image: any;
}

// Mock Data
const products: Product[] = [
    {
        id: 'novex-colageno',
        brand: 'Novex',
        name: 'Mini Creme de Tratamento Infusão Colágeno',
        price: 8.90,
        originalPrice: 11.00,
        salePrice: 8.90,
        discount: 19,
        rating: 5,
        reviews: 24,
        image: 'https://embelleze.com/cdn/shop/files/Novex-Mini-Creme-de-Tratamento-Infusao-Colageno-210g.png?v=1690466453&width=533'
    },
    {
        id: 'natucor-louro',
        brand: 'Natucor',
        name: 'Tinta Extrovertida Louro Natural 7.0',
        price: 13.90,
        originalPrice: 16.00,
        salePrice: 13.90,
        discount: 13,
        rating: 4,
        reviews: 18,
        image: 'https://embelleze.com/cdn/shop/files/natucor-extrovertida-7.0-louro-natural.png?v=1690466453&width=533'
    },
    {
        id: 'maxton-preto',
        brand: 'Maxton',
        name: 'Tinta Você Mais Surpreendente Preto Carvão 1.01',
        price: 14.90,
        originalPrice: 17.00,
        salePrice: 14.90,
        discount: 12,
        rating: 5,
        reviews: 32,
        image: 'https://embelleze.com/cdn/shop/files/maxton-preto-carvao-1.01.png?v=1690466453&width=533'
    },
    {
        id: 'pelucia-hene',
        brand: 'Pelúcia',
        name: 'Henê Pelúcia Médio Pouch',
        price: 12.90,
        originalPrice: 17.00,
        salePrice: 12.90,
        discount: 24,
        rating: 4,
        reviews: 15,
        image: 'https://embelleze.com/cdn/shop/files/hene-pelucia-medio-pouch.png?v=1690466453&width=533'
    },
    {
        id: 'hairlife-alisante',
        brand: 'HairLife',
        name: 'Creme Alisante Liso & Natural',
        price: 16.90,
        originalPrice: 20.00,
        salePrice: 16.90,
        discount: 16,
        rating: 5,
        reviews: 41,
        image: 'https://embelleze.com/cdn/shop/files/hairlife-liso-natural.png?v=1690466453&width=533'
    },
    {
        id: 'amacihair-hialuronico',
        brand: 'AmaciHair',
        name: 'Creme Alisante e Relaxante Mix Hialurônico',
        price: 31.90,
        originalPrice: 37.00,
        salePrice: 31.90,
        discount: 14,
        rating: 5,
        reviews: 28,
        image: 'https://embelleze.com/cdn/shop/files/amacihair-mix-hialuronico.png?v=1690466453&width=533'
    },
    {
        id: 'gelato-pistache',
        brand: 'Novex',
        name: 'Creme de Tratamento Novex Gelato de Pistache 1kg',
        price: 24.90,
        originalPrice: 40.00,
        salePrice: 24.90,
        discount: 38,
        rating: 5,
        reviews: 11,
        image: 'https://embelleze.com/cdn/shop/files/CREME_DE_TRATAMENTO_GELATO_DE_PISTACHE_1KG.png?v=1730140188&width=400',
        sku: 'EMB0001',
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
        }
    },
    {
        id: 'super-babosao',
        brand: 'Novex',
        name: 'Hidra Creme de Tratamento Super Babosão',
        price: 21.90,
        originalPrice: 35.00,
        salePrice: 21.90,
        discount: 37,
        rating: 5,
        reviews: 25,
        image: 'https://embelleze.com/cdn/shop/files/SUPER_BABOSAO_TRATAMENTO_1KG.png?v=1730140188&width=400'
    }
];

// Helper to simulate delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
    getProducts: async (): Promise<Product[]> => {
        await delay(500);
        return products;
    },

    getProductById: async (id: string): Promise<Product | undefined> => {
        await delay(500);
        return products.find(p => p.id === id) || products[0]; // Fallback to first product if not found for demo
    },

    getProductsByCategory: async (categorySlug: string): Promise<Product[]> => {
        await delay(500);
        if (categorySlug === 'tratamento') {
            return products.filter(p => p.name.toLowerCase().includes('creme'));
        }
        return products;
    },

    getProductsByBrand: async (brandSlug: string): Promise<Product[]> => {
        await delay(500);
        return products.filter(p => p.brand.toLowerCase().replace(' ', '-') === brandSlug.toLowerCase())
            .length > 0 ? products.filter(p => p.brand.toLowerCase().replace(' ', '-') === brandSlug.toLowerCase()) : products;
    }
};
