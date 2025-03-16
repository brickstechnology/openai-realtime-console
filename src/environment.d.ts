/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FLOWISE_API_KEY: string;
  readonly VITE_FLOWISE_BASE_URL: string;
  readonly VITE_FLOWISE_CHATFLOW_ID: string;
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 