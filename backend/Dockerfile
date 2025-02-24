# Utiliser l'image Node.js officielle
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le code source
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port 4000
EXPOSE 4000

# Commande pour démarrer l'application
CMD ["npm", "run", "start:prod"]
