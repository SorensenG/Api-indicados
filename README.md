# 📌 Referral System API

## 📖 Sobre o Projeto

Este projeto é uma API desenvolvida com **Fastify, Zod, Redis e Drizzle ORM** para gerenciar um sistema de referência. Ele permite acompanhar convites, contagens de acessos, inscrições em eventos e rankings de usuários baseados em referências.

---

## 🚀 Tecnologias Utilizadas

- 🚀 **Fastify** - Framework Node.js otimizado para performance
- ✅ **Zod** - Validação e tipagem dos schemas da API
- 🔥 **Redis** - Armazenamento de dados temporários e cache
- 🗄 **Drizzle ORM** - ORM para manipulação do banco de dados PostgreSQL
- 🛢 **PostgreSQL** - Banco de dados relacional para persistência de dados

---

## 📂 Estrutura do Projeto

```plaintext
├── dist/                      # Arquivos compilados
├── node_modules/              # Dependências do projeto
├── routes/                    # Definição das rotas da API
│   ├── acess-invite-link-route.ts
│   ├── get-ranking-route.ts
│   ├── get-subscriber-invite-clicks-route.ts
│   ├── get-subscriber-invite-count-route.ts
│   ├── get-subscriber-ranking-position-route.ts
│   ├── subscribe-to-event-route.ts
├── src/                       # Código fonte
│   ├── drizzle/               # Configuração do banco de dados
│   │   ├── migrations/        # Migrações do banco
│   │   ├── schema/            # Definição dos schemas
│   │   ├── client.ts
│   │   ├── functions/        # Funções auxiliares para a API
│   │   ├── acess-invite-link.ts
│   │   ├── get-ranking.ts
│   │   ├── get-subscriber-invite-clicks.ts
│   │   ├── get-subscriber-invite-count.ts
│   │   ├── get-subscriber-ranking-position.ts
│   │   ├── subscribe-to-event.ts
│   ├── redis/                # Configuração do Redis
│   │   ├── client.ts
│   │   ├── env.ts
│   │   ├── server.ts
├── .env                       # Variáveis de ambiente
├── .gitignore                 # Arquivos ignorados pelo Git
├── api.http                   # Testes de API HTTP
├── biome.json                 # Configuração do Biome
├── docker-compose.yml         # Configuração do Docker Compose
├── drizzle.config.ts          # Configuração do Drizzle ORM
├── package.json               # Configuração do Node.js
├── package-lock.json          # Dependências travadas
├── tsconfig.json              # Configuração do TypeScript
├── tsup.config.ts             # Configuração do TSUP (bundler)
```

---

## 📌 Rotas da API

### 🔗 1. Acessar Link de Convite
- **Endpoint:** `GET /invites/:subscriberID`
- 🔄 Redireciona para a URL definida e registra um clique de referência.

### 📊 2. Obter Ranking Geral
- **Endpoint:** `GET /ranking`
- 📈 Retorna um ranking de inscritos baseado no número de referências bem-sucedidas.

### 🎯 3. Obter Cliques em Links de Convite
- **Endpoint:** `GET /subscribers/:subscriberID/ranking/clicks`
- 🔢 Retorna a contagem de cliques recebidos pelo usuário.

### 🔢 4. Obter Contagem de Referências
- **Endpoint:** `GET /subscribers/:subscriberID/ranking/count`
- 📊 Retorna quantas inscrições um usuário conseguiu via convite.

### 🏆 5. Obter Posição no Ranking
- **Endpoint:** `GET /subscribers/:subscriberID/ranking/position`
- 🏅 Retorna a posição do usuário no ranking geral.

### 🎟 6. Inscrever Usuário em um Evento
- **Endpoint:** `POST /subscriptions`
- ✍️ Registra um novo usuário no evento, associando-o a um referenciador (opcional).

---

## ⚙️ Configuração e Execução

### 1️⃣ Clone o Repositório
```sh
git clone https://github.com/seu-usuario/referral-system.git
cd referral-system
```

### 2️⃣ Instale as Dependências
```sh
yarn install  # ou npm install
```

### 3️⃣ Configure as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto com as seguintes informações:
```env
WEB_URL=http://seusite.com
POSTGRES_URL=postgres://usuario:senha@localhost:5432/seubanco
REDIS_URL=redis://localhost:6379
```

### 4️⃣ Inicie o Servidor
```sh
yarn dev  # ou npm run dev
```

🚀 **Agora sua API está rodando!**
