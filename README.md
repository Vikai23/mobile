# Pokédex dos Iniciais

App (Expo 58 / React Native) com os Pokémon iniciais das 5 primeiras gerações. Os dados vêm da [PokéAPI](https://pokeapi.co).

## Fluxo

1. **Início**: tela de entrada, com os botões de Cadastro e Login.
2. **Login**: o botão Login leva pra lista de gerações. As telas de Cadastro e Esqueci a senha são as que foram feitas em aula.
3. **Gerações**: as 5 primeiras gerações (Kanto, Johto, Hoenn, Sinnoh e Unova).
4. **Iniciais**: escolha o inicial tocando nas bolinhas ou nas setas. O cartão mostra a categoria, o tipo e a descrição dele, e o botão **Ver na Pokédex** abre a ficha completa. Mais embaixo ficam onde conseguir os iniciais no jogo, o mapa da região e os 8 líderes de ginásio.
5. **Pokédex**: número, categoria, tipos, altura, peso, geração, a descrição e as evoluções (com o nível de cada uma). Tocando em uma evolução, abre a Pokédex dela.

Tipos, altura, peso e evoluções vêm da PokéAPI. A PokéAPI não tem as descrições em português, então a categoria e a descrição de cada Pokémon ficam em `src/data/descriptions.js`, escritas com base nas informações da Pokédex dos jogos.

Os mapas são as imagens do Town Map de cada região, do site Serebii.net.

Formas regionais e Mega Evoluções ficaram de fora.

## Rodando local

```bash
npm install
npx expo start
```

Abra o **Expo Go** no celular e leia o QR Code. O celular precisa estar no **mesmo Wi-Fi** do PC. Fora da rede, use `npx expo start --tunnel`.

O app precisa de internet para buscar os dados na PokéAPI.

## Gerar APK (EAS)

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

O perfil `preview` do `eas.json` gera um `.apk` que instala direto no Android.

## Bibliotecas

React Navigation (native-stack), styled-components e @expo/vector-icons.

## Estrutura

```
App.js                 rotas (Stack)
src/
├── config.js          URL da PokéAPI e das imagens
├── theme.js           cores do app e dos tipos
├── helpers.js         funções pequenas (número da Pokédex, primeira letra maiúscula)
├── data/              gerações, iniciais, líderes, mapas e as descrições em português
├── services/api.js    chamadas HTTP na PokéAPI
├── components/        alert-banner, modal, type-badge e ui
└── screens/           home, login, register, forgot-password, generations, generation e pokemon
```

Aliases (`@screens`, `@components`, `@services`, `@config` e `@/`) estão definidos no `jsconfig.json`.
