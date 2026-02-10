# PRD de Experiência de Usuário - Vitrine Embelleze

## 1. Visão Geral da Arquitetura

A arquitetura de informação atual da Embelleze.com caracteriza-se por uma estrutura **híbrida e profunda**, tentando equilibrar um vasto portfólio de marcas consolidadas (Novex, Maxton) com uma abordagem baseada em soluções capilares.

Atualmente, a navegação principal no desktop depende fortemente de um **Mega Menu ("Ver Tudo")** que expõe, em um único nível visual, múltiplas taxonomias concorrentes:
1.  **Por Necessidade:** (Funcional/Solução - ex: Hidratação, Queda).
2.  **Por Categoria:** (Tipologia de Produto - ex: Shampoo, Creme de Tratamento).
3.  **Por Marca:** (Fidelidade/Branding - ex: Novex, Natucor).
4.  **Por Transformação:** (Técnico/Químico - ex: Alisantes, Tinturas).

Essa sobreposição, embora completa, gera uma **alta carga cognitiva** inicial para novos usuários, que precisam decifrar qual "caminho" (marca ou função) é o ideal para sua busca.

---

## 2. Mapa de Navegação (Níveis 1, 2 e 3)

Este mapa reflete a estrutura lógica extraída da versão desktop, organizada para a Vitrine Digital.

### Nível 1: Eixos Principais de Entrada
1.  **Necessidades do Cabelo** (O start ideal para "Diagnóstico")
2.  **Categorias de Produtos** (Para reposição de rotina)
3.  **Marcas** (Para a "Lover" da marca)
4.  **Transformação & Cor** (Para mudanças de visual)
5.  **Kits & Cronograma** (Para ticket médio alto e tratamento completo)

### Detalhamento da Hierarquia

#### A. Necessidades do Cabelo (Foco em Solução)
*   **Hidratação e Nutrição**
    *   Cabelos Ressecados
    *   Cabelos Opacos
*   **Reconstrução e Força**
    *   Cabelos Quebradiços
    *   Pós-Química
*   **Definição e Controle**
    *   Cabelos Cacheados (Curvaturas 3A-3C)
    *   Cabelos Crespos (Curvaturas 4A-4C)
    *   Antifrizz e Volume
*   **Saúde do Couro Cabeludo**
    *   Queda
    *   Crescimento
    *   Caspa

#### B. Categorias de Produtos (Foco em Tipo)
*   **Lavagem e Tratamento**
    *   Shampoos (Vitay, Hidratantes, Anticaspa)
    *   Condicionadores
    *   Cremes de Tratamento (Potes 1kg, 400g)
*   **Finalização**
    *   Cremes de Pentear
    *   Óleos e Reparadores
    *   Leave-ins e Gelatinas
*   **Complementares**
    *   Recargas de Queratina (Tubo e Sachê)
    *   Tônicos Capilares

#### C. Marcas (Foco em Identidade)
*   **Tratamento Diário**
    *   Novex (A "Mãe" de todas as famílias)
    *   Magic Liss
*   **Transformação (Alisamento)**
    *   HairLife
    *   AmaciHair
    *   LisaHair
    *   Hene Pelúcia / Rená
*   **Coloração**
    *   Maxton (Permanente)
    *   Natucor (Vegana/Natural)
    *   Fleury

#### D. Transformação & Cor
*   **Coloração**
    *   Pretos e Castanhos
    *   Loiros e Descolorantes
    *   Vermelhos e Marsalas
    *   Cores Fantasia
*   **Alisamento**
    *   Guanidina
    *   Tioglicolato
    *   Henês

---

## 3. Matriz de Fluxo e Redução de Fricção

Comparativo entre o modelo atual (observado no site) e o modelo proposto para o App Vitrine.

| Componente | Estado Atual (Site Desktop) | Ponto de Fricção (Pain Point) | Estado Desejado (App Vitrine) |
| :--- | :--- | :--- | :--- |
| **Menu Principal** | Lista longa e densa dentro de "Ver Tudo". Mistura marcas com tipos de cabelo. | **Paralisia de Escolha:** Usuário gasta muito tempo lendo antes de clicar. | **Acordeões Temáticos:** Menu Drawer (Lateral) segmentado com ícones visuais para cada família (Gota para Necessidade, Pote para Categoria). |
| **Busca de Produto** | Focada em texto e filtro lateral tradicional (checkboxes). | **Scroll Infinito em Filtros:** Difícil filtrar por múltiplos critérios no mobile. | **Filtros Inteligentes (Chips):** Botões horizontais no topo da lista ("Sem Sal", "Vegano", "Liberado") para refino rápido. |
| **Página de Produto** | Muita informação técnica textual corrida. Accordions clássicos. | **Leitura Cansativa:** Usuário perde benefícios chave no meio de textos legais. | **Destaques Visuais:** Ícones de benefícios (ex: "Proteção Térmica", "Brilho 3D") logo abaixo do preço. Review em destaque. |
| **Jornada de Compra** | Linear: Home -> Categoria -> Produto -> Carrinho. | **Falta de Descoberta:** Quem não sabe o que quer, difícil achar. | **Descoberta Guiada (Quiz):** Botão flutuante ou card na Home: "Descubra seu Cronograma Ideal em 3 passos". |
| **Cross-sell** | "Produtos Relacionados" no fim da página. | **Cegueira de Banner:** Usuário muitas vezes ignora o rodapé. | **Bundle no Carrinho:** "Leve o Shampoo junto e ganhe 5% OFF no Kit". |

---

## 4. Notas de UX sobre Micro-interações e Feedback Visual

### Princípios da Taxonomia Visual (Clean, Minimalist, Modern)
1.  **Espaço em Branco (White Space):** É vital para dar "respiro" entre as famílias de produtos coloridas da Embelleze. O app não deve competir visualmente com as embalagens; ele deve ser a "moldura branca" de uma galeria de arte.
2.  **Tipografia Hierárquica:**
    *   **Títulos (H1/H2):** Fonte sem serifa moderna, peso Bold, cor escura (#111827).
    *   **Labels/Tags:** Fonte menor, peso Medium, uppercase, cor secundária ou acento (#7C3AED).
    *   **Preço:** Destaque máximo, cor de ação/promoção (#EF4444 para ofertas).

### Micro-interações Sugeridas
1.  **Feedback de Toque:** Ao adicionar um produto ao carrinho (botão "+"), o ícone do carrinho na barra inferior deve ter uma animação de "pulo" (bounce) com um badge numérico aparecendo suavemente.
2.  **Transição de Categoria:** Ao trocar de aba no Cronograma Capilar (Hidratação -> Nutrição), a transição deve ser suave (fade/slide), e a cor de destaque da aba pode mudar sutilmente para refletir a etapa (Azul para Hidratação, Laranja para Nutrição).
3.  **Skeleton Loading:** Nunca mostrar tela branca. Usar "esqueletos" pulsantes cinzas (shimmer effect) enquanto as imagens dos produtos carregam, mantendo a percepção de performance.

---

## Reflexão Crítica

A estrutura proposta neste documento busca alinhar a interface digital com o **modelo mental da consumidora brasileira de cosméticos**.

Observamos que há dois perfis predominantes de navegação:
1.  **A "Investigadora":** Ela tem um problema (ex: cabelo caindo, pontas duplas) e busca uma solução. Para ela, a entrada via **"Necessidades"** e o **"Quiz/Cronograma"** são essenciais. O atrito é reduzido ao não exigir que ela saiba *qual* produto resolve, mas sim *o que* ela sente.
2.  **A "Fiel":** Ela já usa Novex Broto de Bambu há anos. Para ela, a navegação por **"Marcas"** ou a **Busca Direta** deve ser imediata, sem distrações.

Ao separar claramente esses caminhos no **Nível 1 do Menu Drawer** e na **Home**, respeitamos ambos os fluxos. Além disso, a proposta de **filtros visuais (chips)** moderniza a experiência mobile, onde "clicar em checkboxes pequenos" é uma barreira de usabilidade conhecida.

A introdução de elementos de **descoberta guiada** (como o Cronograma Capilar interativo que já implementamos parcialmente) transforma o app de um simples "catálogo estático" para um "consultor de beleza de bolso", aumentando o valor percebido e a probabilidade de fidelização.
