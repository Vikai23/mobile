# Pokédex dos Iniciais

App (Expo 58 / React Native) com os Pokémon iniciais das 5 primeiras gerações. Os dados vêm da **pokedex-api**, a API em Spring Boot feita para este app.

## Fluxo

1. **Início**: tela de entrada, com os botões **Entrar** e **Criar conta**.
2. **Entrar / Criar conta / Esqueci a senha**: formulários com email e senha. Se faltar algo, o `AlertBanner` mostra o aviso; quando dá certo, o `DetailsModal` confirma (no cadastro e na troca de senha) ou o app abre a lista de gerações (no login). Essas telas não usam a API: as contas não ficam salvas.
3. **Gerações**: as 5 primeiras gerações (Kanto, Johto, Hoenn, Sinnoh e Unova).
4. **Iniciais**: escolha o inicial tocando nas bolinhas ou nas setas. O cartão mostra a categoria, o tipo e a descrição dele, e o botão **Ver na Pokédex** abre a ficha completa. Mais embaixo ficam onde conseguir os iniciais no jogo, o mapa da região e os 8 líderes de ginásio.
5. **Pokédex**: número, categoria, tipos, altura, peso, geração, a descrição e as evoluções (com o nível de cada uma). Tocando em uma evolução, abre a Pokédex dela.

Gerações, iniciais, descrições em português, evoluções, mapas e líderes de ginásio vêm todos da pokedex-api. Enquanto os dados chegam aparece um "carregando", e se a API não responder aparece o aviso com o botão **Tentar de novo**.

Os mapas são as imagens do Town Map de cada região, do site Serebii.net. Formas regionais e Mega Evoluções ficaram de fora.

## Rodando local

1. Suba a **pokedex-api** (veja o README dela). Ela roda em `http://localhost:8080`.
2. Confira o endereço da API em `src/config.js`:

```js
export const API_URL = "http://localhost:8080";
// no celular: "http://<IP-do-PC>:8080"
```

No navegador do PC, `localhost` funciona. No celular, troque `localhost` pelo IP do PC na rede Wi-Fi (o comando `ipconfig` mostra o "Endereço IPv4").

3. Rode o app:

```bash
npm install
npx expo start
```

Abra o **Expo Go** no celular e leia o QR Code. O celular precisa estar no **mesmo Wi-Fi** do PC.

## Gerar APK (EAS)

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

O perfil `preview` do `eas.json` gera um `.apk` que instala direto no Android. Para o APK funcionar fora de casa, a API precisa estar online (por exemplo no Render) e o `API_URL` precisa apontar para ela.

## Bibliotecas

React Navigation (native-stack), styled-components e @expo/vector-icons.

## Estrutura

```
App.js                 rotas (Stack)
src/
├── config.js          URL da API e da pasta de imagens
├── theme.js           cores do app e dos tipos
├── helpers.js         funções pequenas (número da Pokédex, vírgula nos decimais, link da imagem)
├── services/api.js    chamadas HTTP na pokedex-api
├── components/        alert-banner, modal, form-header, loading, error-message, type-badge e ui
└── screens/           home, login, register, forgot-password, generations, generation e pokemon
```

Aliases (`@screens`, `@components`, `@services`, `@config` e `@/`) estão definidos no `jsconfig.json`.
