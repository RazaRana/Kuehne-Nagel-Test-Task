# Kuehne-Nagel-Test

# Development

Copy environment file and adjust were relevant/required
```
cp .env.docker.example .env.docker
```

Start application in development mode within docker
```
docker compose up
```

Application can be accessed at http://localhost:3000

# Docker
## Services
- **backend** - Springboot application back-end
- **frontend** - React application front-end
- **db** - postgres database
- **pgadmin** - postgres Admin Panel, for connecting to local DB

# App
## FrontEnd
- **Add Wallet** - Add icon in taskbar to add new wallet
- **Add Balance** - Add icon in wallet list item to top up balance in wallet
- **Withdraw Balance** - Withdraw icon in wallet list item to withdraw balance from wallet
- **Send Balance** - Send icon in wallet list item to send balance to another wallet