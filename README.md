📌 Referral System API

📖 Sobre o Projeto

Este projeto é uma API desenvolvida com Fastify, Zod, Redis e Drizzle ORM para gerenciar um sistema de referência. Ele permite acompanhar convites, contagens de acessos, inscrições em eventos e rankings de usuários baseados em referências.

🚀 Tecnologias Utilizadas

Fastify - Framework Node.js otimizado para performance

Zod - Validação e tipagem dos schemas da API

Redis - Armazenamento de dados temporários e cache

Drizzle ORM - ORM para manipulação do banco de dados PostgreSQL

PostgreSQL - Banco de dados relacional para persistência de dados

📂 Estrutura do Projeto

├── src/
│   ├── env.ts                # Configuração de variáveis de ambiente
│   ├── functions/            # Funções auxiliares para a API
│   │   ├── acess-invite-link.ts
│   │   ├── get-ranking.ts
│   │   ├── get-subscriber-invite-clicks.ts
│   │   ├── get-subscriber-invite-count.ts
│   │   ├── get-subscriber-ranking-position.ts
│   │   ├── subscribe-to-event.ts
│   ├── redis/                # Configuração do Redis
│   │   ├── client.ts
│   ├── routes/               # Definição das rotas da API
│   │   ├── acess-invite-link.ts
│   │   ├── get-ranking.ts
│   │   ├── get-subscriber-invite-clicks.ts
│   │   ├── get-subscriber-invite-count.ts
│   │   ├── get-subscriber-ranking-position.ts
│   │   ├── subscribe-to-event.ts
│   ├── drizzle/              # Configuração do banco de dados
│   │   ├── client.ts
│   │   ├── schema/
│   │   │   ├── subscriptions.ts

📌 Rotas da API

1️⃣ Acessar Link de Convite

Endpoint: GET /invites/:subscriberID

Redireciona para a URL definida e registra um clique de referência.

2️⃣ Obter Ranking Geral

Endpoint: GET /ranking

Retorna um ranking de inscritos baseado no número de referências bem-sucedidas.

3️⃣ Obter Cliques em Links de Convite

Endpoint: GET /subscribers/:subscriberID/ranking/clicks

Retorna a contagem de cliques recebidos pelo usuário.

4️⃣ Obter Contagem de Referências

Endpoint: GET /subscribers/:subscriberID/ranking/count

Retorna quantas inscrições um usuário conseguiu via convite.

5️⃣ Obter Posição no Ranking

Endpoint: GET /subscribers/:subscriberID/ranking/position

Retorna a posição do usuário no ranking geral.

6️⃣ Inscrever Usuário em um Evento

Endpoint: POST /subscriptions

Registra um novo usuário no evento, associando-o a um referenciador (opcional).

⚙️ Configuração e Execução
git clone https://github.com/seu-usuario/referral-system.git
cd referral-system
