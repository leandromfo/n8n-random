# Random Number Generator

## Instalação e Execução

### Clone o repositório

```
    git clone https://github.com/leandromfo/n8n-random.git
```

### Instalação das dependências

```
    npm i
```

### Adição das variáveis de ambiente

As variávis de ambiente devem ser adicionadas ao arquivo .env e vão permitir a correta execução dos containeres.

Um exemplo funcional foi deixado no arquivo .env.example

    - POSTGRES_DB
    - POSTGRES_PASSWORD
    - POSTGRES_USER
    - DB_TYPE= postgresdb
    - DB_POSTGRESDB_DATABASE
    - DB_POSTGRESDB_HOST
    - DB_POSTGRESDB_PORT
    - DB_POSTGRESDB_USER
    - DB_POSTGRESDB_PASSWORD
    - N8N_CUSTOM_EXTENSIONS
    - N8N_AUTH_DISABLED

### Build e execução

```
    npm run dev
```

O comando vai então, buildar a aplicação, criando a pasta 'dist' com os arquivos ncessários para execução e iniciar os containeres

### Acesso ao n8n

O acesso deve ser ralizado pela rota:

- http://localhost:5678
