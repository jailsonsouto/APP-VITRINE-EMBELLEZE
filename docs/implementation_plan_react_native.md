# Implementation Plan: Embelleze Vitrine (React Native)

## Goal
Create a native Android application using React Native (Expo) that replicates the "Aplicativo Vitrine Digital Embelleze" design from Figma.

## Tech Stack
- **Framework:** React Native (via Expo)
- **Language:** TypeScript
- **Styling:** NativeWind (Tailwind for RN) or StyleSheet (Standard) - *Decision pending Figma analysis*
- **Navigation:** Expo Router or React Navigation

## Phase 1: Setup & Analysis
1.  Initialize new Expo project in `TESTE-MCP-FIGMA/EmbellezeApp`.
2.  Analyze the provided Figma URL (`aK8FN8KgUxwECTn1DIpqrl`) to understand the mobile specific layout.
3.  Set up directory structure for components and assets.

## Phase 2: Component Implementation
We will break down the design into reusable components:
- `Header`: Navigation and branding.
- `Hero`: Main promotion area.
- `ProductCard`: Reusable list item.

## Phase 3: Assets & Styling
- Extract SVGs and Images from the new Figma file.
- Define theme colors and typography based on Figma tokens.

## Verification
- User will verify visually.
- *(Simulated)*: We will run the dev server, but user will need to scan QR code or we rely on code review + basic rendering checks if possible.
