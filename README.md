# Pokédex dos Iniciais

App (Expo 58 / React Native) com os Pokémon iniciais das 5 primeiras gerações. Os dados vêm da [PokéAPI](https://pokeapi.co).

## Fluxo

1. **Início**: tela de entrada, com os botões de Cadastro e Login.
2. **Login**: o botão Login leva pra lista de gerações. As telas de Cadastro e Esqueci a senha são as que foram feitas em aula.
3. **Gerações**: as 5 primeiras gerações (Kanto, Johto, Hoenn, Sinnoh e Unova).
4. **Iniciais**: os 3 iniciais da geração escolhida.
5. **Pokédex**: número, categoria, tipos, altura, peso, a descrição da Pokédex e as evoluções. Tocando em uma evolução, abre a Pokédex dela.

A descrição da Pokédex é o texto original do jogo em que o Pokémon apareceu pela primeira vez (Red, Gold, Ruby, Diamond ou Black). Esses jogos não têm texto em português, por isso ela aparece em inglês.

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
├── data/              as 5 gerações e os iniciais
├── services/api.js    chamadas HTTP na PokéAPI
├── components/        alert-banner, modal, type-badge e ui
└── screens/           home, login, register, forgot-password, generations, generation e pokemon
```

Aliases (`@screens`, `@components`, `@services`, `@config` e `@/`) estão definidos no `jsconfig.json`.
