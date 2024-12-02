first create '.env.development' file and at this inside it:
REACT_APP_PORT=3000
REACT_APP_API_PORT=5000
REACT_APP_HOST=LOCALHOST
REACT_APP_ENVIRONMENT=development
REACT_APP_API_URL=https://api.livecoinwatch.com
REACT_APP_API_SECRET_KEY=to get secret key go https://www.livecoinwatch.com/tools/api




1.check if u have npm and node installed by running commands npm -v and node -v.
2.run 'npm install' command.
3.run 'npm start' command to start dev env.
4.navigate to server folder via terminal and run command:'node crypto-server.ts' to start express server



problems to fix:
1. due to limitation of time couldnt solve the issue why process.env constants was undefined in server so had to send same env constants via frontend just to see if business logic works. needs to be fixed
2. for charts no websockets used.
3.Error Management was not implemented.
