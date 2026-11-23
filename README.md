# Pokédex dos Iniciais

App (Expo 58 / React Native) com os Pokémon iniciais das 5 primeiras gerações. Os dados vêm da [pokedex-api](https://github.com/Vikai23/pokedex-api), a API em Spring Boot feita para este app.

## Fluxo

1. **Início**: tela de entrada, com os botões **Entrar** e **Criar conta**.
2. **Criar conta / Entrar**: só com um nome, sem senha. **Criar conta** salva o nome na API e o `DetailsModal` confirma. **Entrar** confere na API se existe uma conta com esse nome (maiúsculas e espaços nas pontas não importam) e abre a lista de gerações. Se o nome estiver vazio, já existir (ao criar) ou não existir (ao entrar), o `AlertBanner` mostra o aviso. Como a API usa banco em memória, as contas somem quando ela é reiniciada.
3. **Gerações**: as 5 primeiras gerações (Kanto, Johto, Hoenn, Sinnoh e Unova).
4. **Iniciais**: escolha o inicial tocando nas bolinhas ou nas setas. O cartão mostra a categoria, o tipo e a descrição dele, e o botão **Ver na Pokédex** abre a ficha completa. Mais embaixo ficam onde conseguir os iniciais no jogo, o mapa da região, os 8 líderes de ginásio e a Elite dos 4.
5. **Treinador**: tocando em um líder ou em um membro da Elite dos 4, sobe um painel com o sprite dele e a cidade marcada no mapa, como no mapa do jogo. As setas passam para o próximo treinador. A aba **Time** mostra o time dele no jogo, com o nível e a linha de evolução de cada Pokémon, e nos líderes a aba **Insígnia** mostra a insígnia que ele dá.
6. **Pokédex**: número, categoria, tipos, altura, peso, geração, a descrição e as evoluções (com o nível de cada uma). Tocando em uma evolução, abre a Pokédex dela. Os botões **Normal** e **Shiny** trocam as imagens para a versão shiny (a cor rara), e o botão do alto-falante toca o grito do Pokémon.

As contas, as gerações, os iniciais, as descrições em português, as evoluções, os mapas, os líderes de ginásio, a Elite dos 4 e os times deles vêm todos da pokedex-api. Enquanto os dados chegam aparece um "carregando", e se a API não responder aparece o aviso com o botão **Tentar de novo**.

Os mapas são as imagens do Town Map de cada região, do site Serebii.net, e os sprites dos treinadores são os do Pokémon Showdown. Formas regionais e Mega Evoluções ficaram de fora.

## Rodando local

1. Suba a [pokedex-api](https://github.com/Vikai23/pokedex-api) (veja o README dela). Ela roda em `http://localhost:8080`.
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

React Navigation (native-stack), styled-components, @expo/vector-icons e expo-audio (para tocar o grito dos Pokémon).

No `app.json`, o plugin do expo-audio está com as permissões de microfone desligadas (`microphonePermission` e `recordAudioAndroid`), porque o app só toca som e não grava nada.

## Estrutura

```
App.js                 rotas (Stack)
src/
├── config.js          URL da API e da pasta de imagens
├── theme.js           cores do app e dos tipos
├── helpers.js         funções pequenas (número da Pokédex, vírgula nos decimais, link da imagem)
├── services/api.js    chamadas HTTP na pokedex-api
├── components/        alert-banner, modal, form-header, loading, error-message, type-badge e ui
└── screens/           home, login, register, generations, generation, pokemon e trainer-map
```

Aliases (`@screens`, `@components`, `@services`, `@config` e `@/`) estão definidos no `jsconfig.json`.
