# Implementation Plan - Navigation Refinement & Education Section

## Goal
Update the `DrawerMenu` order, add missing brands, and implement a new "Educação" section with wiki-like content.

## Proposed Changes

### [Navigation & Drawer]

#### [MODIFY] [DrawerMenu.tsx](file:///C:/Users/criacao/OneDrive - Embelleze/MEUS-PROJETOS-IA/CATALOGO-VITRINE-APP/TESTE-MCP-FIGMA/APP-VITRINE-EMBELLEZE/src/components/DrawerMenu.tsx)
- **Reorder Menu**:
    1.  Mais Vendidos
    2.  Novidades
    3.  Tratamento (Accordion) -> Sub-items: Máscara Capilar, Creme de Tratamento, Óleos, Tônicos, Recargas.
    4.  Coloração (Accordion) -> Existing tones.
    5.  Transformação (Accordion) -> Existing types.
    6.  Profissional (Accordion) -> Sub-items: Nutrisalon, Salon Blindagem, Hanova (check if valid or just generic 'Blindagem'). *Correction: Based on research: Nutrisalon, Yantra, Alkimia, Misuke, Bllex.*
    7.  Linha Kids (Accordion) -> Sub-items: Cacheados (Meus Cachinhos), Lisos (Liso Lisinho).
    8.  Marcas (Accordion) -> Add: Misuke, Urban Style, DNA Do Cacho. Split into generic list or just full sorted list.
    9.  Categorias de Produtos (Accordion) -> Remaining categories (Shampoo, Condicionador, Kit, Finalizadores).
    10. Necessidades do Cabelo (Accordion) -> Existing needs.
    11. Cronograma Capilar (Quick Link)
    12. Educação (Accordion) -> Sub-items: Guia para Iniciantes, Dicas de Produtos, Vídeos de Treinamento. *Actually, user said "Education Accordion with types" pointing to Wiki pages.*

#### [NEW] [EducationScreen.tsx](file:///C:/Users/criacao/OneDrive - Embelleze/MEUS-PROJETOS-IA/CATALOGO-VITRINE-APP/TESTE-MCP-FIGMA/APP-VITRINE-EMBELLEZE/src/screens/EducationScreen.tsx)
- **Layout**: List of articles/videos with thumbnails.
- **Content**:
    - "Saiba tudo sobre Transição Capilar"
    - "7 erros no cronograma capilar"
    - "Teste de porosidade capilar"
    - "Como saber se o cabelo está saudável?"

#### [NEW] [ArticleScreen.tsx](file:///C:/Users/criacao/OneDrive - Embelleze/MEUS-PROJETOS-IA/CATALOGO-VITRINE-APP/TESTE-MCP-FIGMA/APP-VITRINE-EMBELLEZE/src/screens/ArticleScreen.tsx)
- **Layout**: Title, Cover Image, Text Body (Markdown or rich text), Embedded Video placeholder.

### [App Navigation]

#### [MODIFY] [App.tsx](file:///C:/Users/criacao/OneDrive - Embelleze/MEUS-PROJETOS-IA/CATALOGO-VITRINE-APP/TESTE-MCP-FIGMA/APP-VITRINE-EMBELLEZE/App.tsx)
- **Routes**: Add `education` (list) and `article` (detail) to `renderScreen`.
- **Params**: Handle navigation from Drawer to Education.

## Verification Plan
1.  **Drawer Order**: Verify the exact order matches the request.
2.  **Brands**: Check if Misuke, Urban Style, DNA Do Cacho are in "Marcas".
3.  **Education**: Open "Educação" > Click an item > Verify Article Screen loads with content.
