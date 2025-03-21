```markdown
# Study List App

Uma aplicação web simples para estudantes criarem e gerenciarem listas de estudo. O projeto utiliza **NestJS** no backend e **React** no frontend, com animações para melhorar a experiência do usuário, como:

- **Animação de entrada (pop-in):** Ao criar uma nova tarefa.
- **Animação de remoção (pixel break):** Ao remover uma tarefa, com efeito de “quebra” estilo glitch.
- **Exibição do ID da tarefa:** Mostrado à esquerda do nome da tarefa, facilitando testes e identificação.

## Funcionalidades

- **Criar Tarefas:** Adicione tarefas especificando nome, disciplina/assunto e prioridade.
- **Editar e Atualizar Tarefas:** Marque tarefas como concluídas ou atualize outros dados.
- **Filtrar Tarefas:** Filtre por nome ou prioridade (baixo, médio, alto).
- **Remover Tarefas:** Com uma animação de “quebra” (pixel glitch).
- **Exibir Progresso:** Visualize o percentual de tarefas concluídas através de uma barra de progresso animada.

## Estrutura do Projeto

```plaintext
project-root/
├── backend/
│   ├── src/
│   │   ├── tasks/
│   │   │   ├── dto/
│   │   │   │   ├── create-task.dto.ts
│   │   │   │   └── update-task.dto.ts
│   │   │   ├── entities/
│   │   │   │   └── task.entity.ts
│   │   │   ├── tasks.controller.ts
│   │   │   ├── tasks.service.ts
│   │   │   └── tasks.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.jsx
    │   │   ├── TaskList.jsx
    │   │   ├── ProgressBar.jsx
    │   │   └── ProgressBar.css
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## Diagramas

**Insira diagrama de classe aqui**

**Insira diagrama de sequência aqui**

**Insira diagrama de casos de uso aqui**

## Tecnologias Utilizadas

- **Backend:** [NestJS](https://nestjs.com/)
- **Frontend:** [React](https://reactjs.org/)
- **Estilos e Animações:** CSS (keyframes para animações de entrada e remoção)

## Configuração e Execução

### Backend

1. **Instalar Dependências:**

   Navegue até a pasta `backend` e execute:
   ```bash
   cd backend
   npm install
   ```

2. **Executar o Servidor:**

   Inicie o servidor NestJS:
   ```bash
   npm run start
   ```
   O backend rodará em `http://localhost:3000`.

### Frontend

1. **Instalar Dependências:**

   Navegue até a pasta `frontend` e execute:
   ```bash
   cd frontend
   npm install
   ```

2. **Executar o Projeto React:**

   Inicie a aplicação:
   ```bash
   npm start
   ```
   A aplicação será iniciada em `http://localhost:3000` (ou em outra porta, conforme configuração). Certifique-se de que o CORS esteja habilitado no backend.

## API Endpoints

### 1. Criar uma Tarefa
- **Método:** POST  
- **URL:** `http://localhost:3000/tasks`  
- **Body (JSON):**
  ```json
  {
    "name": "Estudar React",
    "subject": "Front-end",
    "priority": "alto"
  }
  ```
- **Descrição:** Cria uma nova tarefa com status `completed` como `false` por padrão. Ao criar, a tarefa recebe uma animação de entrada.

### 2. Listar Todas as Tarefas
- **Método:** GET  
- **URL:** `http://localhost:3000/tasks`  
- **Query Params (opcional):**
  - `filter`: Filtra tarefas pelo nome.
  - `priority`: Filtra tarefas pela prioridade ("baixo", "medio", "alto").

### 3. Buscar Tarefa Específica
- **Método:** GET  
- **URL:** `http://localhost:3000/tasks/{id}`

### 4. Atualizar uma Tarefa
- **Método:** PUT  
- **URL:** `http://localhost:3000/tasks/{id}`  
- **Body (JSON):**
  ```json
  {
    "completed": true
  }
  ```

### 5. Remover uma Tarefa
- **Método:** DELETE  
- **URL:** `http://localhost:3000/tasks/{id}`  
- **Descrição:** Ao remover, a tarefa exibe uma animação de “pixel break” antes de ser removida da lista.

## Testando com o Postman

Você pode testar a API utilizando o [Postman](https://www.postman.com/):

1. **Criar Tarefa:**
   - Faça um **POST** em `http://localhost:3000/tasks` com o body JSON.
2. **Listar Tarefas:**
   - Faça um **GET** em `http://localhost:3000/tasks` para visualizar a lista.
3. **Atualizar Tarefa:**
   - Faça um **PUT** em `http://localhost:3000/tasks/{id}` para atualizar o status ou outros dados.
4. **Remover Tarefa:**
   - Faça um **DELETE** em `http://localhost:3000/tasks/{id}`. Na interface, o botão “Remover” dispara a animação antes da exclusão.

## Animações e Efeitos Visuais

- **Entrada (Pop-In):**  
  As novas tarefas utilizam a animação `pop-in` definida via CSS para aumentar de escala e aparecer suavemente.

- **Remoção (Pixel Break):**  
  Ao remover, a tarefa passa por uma animação `pixel-break` que simula um efeito de “quebra” com transformações e blur.

- **Exibição do ID:**  
  Cada tarefa exibe o seu ID à esquerda do nome, facilitando testes e a visualização dos dados.

## Contribuição

Sinta-se à vontade para enviar sugestões, relatar problemas ou contribuir com melhorias através de pull requests.

## Licença

Este projeto não possui licensa, pois é totalmente feito para faculdade


## Diagramas:
![Untitled diagram-2025-02-28-182907](https://github.com/user-attachments/assets/03e9e17d-a725-42ae-ba7c-2c19c1ec4187)
![Untitled diagram-2025-02-28-182414](https://github.com/user-attachments/assets/2d9701dc-fc7f-49e5-afb6-57524a89bbf5)
![Untitled diagram-2025-02-28-182344](https://github.com/user-attachments/assets/10d4345c-e054-448b-82ef-4cb5fbd46bfd)
```

