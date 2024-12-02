declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_PORT: string;
        REACT_APP_HOST: string;
        REACT_APP_ENVIRONMENT:string;
        REACT_APP_API_URL:string;
        REACT_APP_API_SECRET_KEY:string;
        REACT_APP_API_PORT:string;
         // Add any other custom env variables here
    }
  }