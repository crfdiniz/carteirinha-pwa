# Carteirinha Acadêmica (Demo) — PWA

Projeto experimental preparado para hospedagem gratuita no **GitHub Pages** e instalação na tela inicial de iPhone e Android.

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (por exemplo: `carteirinha-pwa`).
2. Envie **todos os arquivos desta pasta para a raiz do repositório**.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch **main** e a pasta **/(root)** e clique em **Save**.
6. Aguarde o GitHub publicar o endereço. Ele terá formato parecido com:
   `https://SEU-USUARIO.github.io/carteirinha-pwa/`

> O GitHub Pages fornece HTTPS, necessário para os recursos de PWA/service worker fora de localhost.

## Instalar no iPhone

1. Abra a URL publicada no **Safari**.
2. Toque em **Compartilhar**.
3. Toque em **Adicionar à Tela de Início**.
4. Confirme em **Adicionar**.

## Instalar no Android

1. Abra a URL no **Chrome**.
2. Abra o menu do navegador.
3. Toque em **Instalar app** ou **Adicionar à tela inicial**.
4. Confirme.

## Arquivos PWA importantes

- `manifest.json`: nome, aparência e ícones do app.
- `sw.js`: service worker/cache.
- `icons/`: ícones para Android/iPhone.
- `.nojekyll`: faz o GitHub Pages servir o projeto sem processamento do Jekyll.

## Observação

O QR Code da carteirinha ainda é carregado de um serviço externo. Portanto, a tela pode abrir offline pelo cache, mas o QR poderá exigir internet na primeira carga.
