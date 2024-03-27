<div align="center">
    <img src="https://github.com/alvarovalverde03/alien-ai-chat/assets/65318965/719ba33f-dcb3-4bcf-a841-969d9cf1fce4" alt="Alien emoji" width="80px" />
    <h1>AlienAI Chat</h1>
</div>

AlienAI Chat is an AI-powered chat application based on private documents from AlienAI S.L. (AienAI S.L. is a fictitious company) built with [Next.js](https://nextjs.org/), [LangChain JS](https://github.com/langchain-ai/langchainjs) and [ChromaDB](https://github.com/chroma-core/chroma) as a vector database.  

AlienAI Chat uses a RAG (Retrieval Augmented Generation) model architecture to provide intelligent responses to user queries based on AlienAI S.L. information (private documents available in `/archive`).


## 📜 Getting Started

Follow these steps to set up and run AlienAI Chat on your local machine:

### 1. Setup Chroma:
Clone the [Chroma repository](https://github.com/chroma-core/chroma) and navigate to the directory.
 ```bash
 git clone https://github.com/chroma-core/chroma.git
 cd chroma
 ```

Use Docker Compose to set up the Chroma environment:
 ```bash
 docker-compose up -d --build
 ```

### 2. Clone the Project:
Clone the AienAI Chat repository:
 ```bash
 git clone https://github.com/alvarovalverde03/alien-ai-chat.git
 ```

### 3. Configure Environment Variables:
Create a `.env` file by copying `.env.example`.
   - Fill in the required environment variables with appropriate values (database host, API keys, ...).

### 4. Install Dependencies:
Navigate to the project directory and install dependencies:
```bash
cd alien-ai-chat
npm install
```

### 5. Run the Development Server:
Start the development server:
```bash
npm run dev
```

### 6. Access AlienAI Chat:
Open [http://localhost:3000](http://localhost:3000) with your browser to access the AlienAI Chat application.


## 🤖 Usage
- Interact with the chat interface by typing messages and sending them.
- AienAI Chat will use its RAG architecture to retrieve relevant information, analyze user prompts/queries, and generate responses accordingly.

