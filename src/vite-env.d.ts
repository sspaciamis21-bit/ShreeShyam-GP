/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SCRIPT_URL?: string;
  readonly VITE_SSPACIA_URL?: string;
  readonly VITE_SALES_EMAIL?: string;
  readonly VITE_DESIGN_EMAIL?: string;
  readonly VITE_PHONE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
