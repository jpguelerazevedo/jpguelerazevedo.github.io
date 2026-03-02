import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './utilities/LanguageContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)

/*
    INSTRUÇÕES PARA DOMÍNIO CUSTOMIZADO / SERVIDOR (colocar aqui antes do deploy):

    1) Servir na raiz do domínio (ex: https://example.com):
       - Em `vite.config.js` defina `base: '/'` (ou remova `base`).
       - Use `BrowserRouter` sem `basename` (URLs limpas, sem #).
       - Opcional: coloque um arquivo `CNAME` em `public/` com seu domínio se o host usar esse arquivo.
       - Garanta que o servidor faça fallback para `index.html` em todas as rotas (essencial para client-side routing).

    2) Build e deploy genéricos:
       - Build: `npm run build` (gera `dist/`).
       - Envie o conteúdo de `dist/` para seu servidor (FTP, SFTP, rsync, CI pipeline, etc.).
       - Teste localmente: `vite build && npx serve dist` ou `vite preview` para checar comportamento em produção.

    3) SSL e DNS:
       - Configure DNS (A, ALIAS, CNAME) conforme o provedor do seu domínio.
       - Habilite HTTPS no host (Let's Encrypt, ou opção do provedor) e force redirecionamento HTTP -> HTTPS.

    4) Observações sobre roteamento:
       - Se usar `BrowserRouter`, o servidor deve sempre retornar `index.html` para todas as rotas.
       - Se não puder configurar fallback no servidor, mantenha `HashRouter` para evitar 404 em rotas internas.

    5) Checagens finais antes do deploy:
       - Verifique que `base` em `vite.config.js` está correto para o ambiente.
       - Teste `dist/` localmente e confirme que rotas e assets funcionam.

    RESUMO:
      - Raiz do domínio: `base: '/'`, `BrowserRouter`, servidor com fallback para `index.html`.
      - Subdiretório: ajuste `base` e `basename`.
      - Sem acesso a fallback: use `HashRouter` (URLs com `#`).

  */