# PRD - Product Requirements Document
## Aplicativo Vitrine Digital Embelleze

> "Empoderando a força de vendas com tecnologia e beleza."

---

### 1. Visão do Produto
O **Vitrine Digital Embelleze** é uma ferramenta móvel projetada exclusivamente para a força de vendas e consultores da marca. Seu objetivo é apresentar o portfólio de produtos de forma elegante, rápida e informativa, funcionando como um catálogo digital de alta fidelidade.

Diferente de um e-commerce tradicional, o foco aqui não é a transação, mas a **apresentação**. O aplicativo deve encantar o cliente final através da tela do consultor, substituindo catálogos de papel por uma experiência interativa e multimídia.

---

### 2. Regras de Negócio (Os Mandamentos)
Para garantir o alinhamento com a estratégia de canal, as seguintes regras são inegociáveis:

1.  **ZERO Transacionalidade**: O aplicativo é estritamente uma vitrine.
    *   **Proibido**: Botões "Comprar", "Adicionar ao Carrinho", Ícones de Sacola, Checkout, Preços (exceto se configurável para tabela de revenda, mas por padrão: oculto).
    *   **Permitido**: Botões "Ver Detalhes", "Compartilhar Ficha Técnica", "Adicionar aos Favoritos".
2.  **Foco Mobile-First**: Embora o design considere tablets, a prioridade absoluta é a experiência em **Smartphones Android**, garantindo performance fluida mesmo em dispositivos intermediários.
3.  **Identidade Embelleze**: Uso rigoroso da paleta da marca (Roxo Embelleze #8B5CF6) combinada com a "limpeza" visual do Design System Shadcn/UI.

---

### 3. Especificações de Design & UX
**Inspiração**: *Beleza na Web* (organização, grids limpos) + *Shadcn/UI* (componentes, tipografia Inter/Figtree).

#### Paleta de Cores
*   **Primária (Ação/Destaque)**: Roxo Embelleze (`#8B5CF6`)
*   **Background**: Branco (`#FFFFFF`) e Cinza Gelo (`#F8F9FA`)
*   **Texto**: Cinza Escuro (`#212529`) para leitura confortável.
*   **Bordas/Divisores**: Cinza Claro (`#E9ECEF`)

#### Componentes Chave (Adaptação React Native)
*   **Card de Produto**: Minimalista. Imagem (alta qualidade), Nome da Linha (bold), Nome do Produto (regular), Código SKU (discreto).
*   **Carrossel (Carousel)**: Usado para banners de campanha na Home e galeria de fotos na PDP.
*   **Bottom Sheet**: Substitui modais e menus flutuantes. Usado para Filtros e Menu Principal.
*   **Accordion**: Usado em FAQs e nas especificações técnicas do produto (evita rolagem infinita).

---

### 4. Arquitetura da Informação (Sitemap)

#### 3.1. Home Screen (A Vitrine)
A porta de entrada. Dinâmica e visual.
*   **Header**: Logo Embelleze centralizado/esquerda. Ícone de Busca (lupa) e Menu Hambúrguer (abre Drawer/Sheet).
*   **Hero Banner**: Carrossel rotativo com lançamentos/campanhas do mês.
*   **Atalhos de Categoria**: Cards visuais rápidos: "Transformação", "Tratamento", "Tintura".
*   **Carrossel "Lançamentos"**: Lista horizontal de produtos novos.
*   **Grid "Destaques"**: Sugestões de produtos baseados em sazonalidade.

#### 3.2. PLP - Product Listing Page (Listagem)
Onde o consultor navega pelo mix de produtos.
*   **Layout**: Grid de 2 colunas (Mobile).
*   **Filtros Inteligentes**: Botão flutuante ou fixo "Filtrar". Abre um **Bottom Sheet** com opções:
    *   *Por Marca* (Novex, Maxton, etc.)
    *   *Por Benefício* (Hidratação, Reconstrução)
    *   *Por Tipo de Cabelo*
*   **Busca**: Barra de busca com *typeahead* (sugestão enquanto digita).

#### 3.3. PDP - Product Detail Page (Detalhes)
A ficha técnica completa.
*   **Galeria**: Carrossel de imagens (Packshot, Textura, Resultado).
*   **Header do Produto**: Nome, Linha, Volume (ex: 1kg).
*   **Abas de Conteúdo (Tabs)**:
    *   *Sobre*: Descrição comercial vendedora.
    *   *Modo de Uso*: Passo a passo para o consultor explicar.
    *   *Ingredientes*: Tabela nutricional/química capilar.
*   **Docs & Treinamento**: Botões para baixar PDF da ficha técnica ou ver vídeo de treinamento.
*   **Cross-sell**: "Combina com..." (Produtos da mesma linha).

---

### 5. Stack Tecnológico
Para garantir performance nativa e agilidade de desenvolvimento:

*   **Core**: React Native (via **Expo**)
*   **Linguagem**: TypeScript
*   **Estilização**: **NativeWind** (TailwindCSS para React Native) - *Garante a fidelidade ao Shadcn/UI de forma rápida.*
*   **Navegação**: Expo Router (File-based routing, similar ao Next.js).
*   **Ícones**: Lucide React Native (Padrão do Shadcn).
*   **Fontes**: Inter (Google Fonts via Expo Google Fonts).

---

### 6. Roadmap de Desenvolvimento (MVP)
1.  **Setup**: Criação do projeto Expo + Configuração NativeWind.
2.  **Foundation**: Componentes Base (Button, Input, Card, Text, View baseada em tokens).
3.  **Home Page**: Implementação do Header e Carrossel.
4.  **PLP & Filtros**: Grid de produtos e lógica de filtro visual.
5.  **PDP**: Navegação para detalhes e galeria.
