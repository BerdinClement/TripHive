# TripHive 

TripHive is a web PWA designed to simplify travel planning and management. It offers a smooth and intuitive interface that allows users to organize itineraries, and access their data offline.

## 🛠️ Technologies Used

### Frontend
- [Next.js](https://nextjs.org/) – React framework for optimized rendering and excellent PWA support
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for a modern and responsive design

### Backend
- [NestJS](https://nestjs.com/) – Node.js framework based on TypeScript for a modular and scalable architecture
- [PostgreSQL](https://www.postgresql.org/) – Robust and high-performance relational database
- [Prisma](https://www.prisma.io/) – Modern ORM for simplifying data access

## 📌 Features
- 📍 **Trip Management**: Create and track itineraries, add points of interest  
- 🌍 **Offline Mode**: Access data even without an internet connection  
- 🏷 **Sharing & Collaboration**: Share trips with other users  
- 🔎 **Advanced Search**: Suggestions and filters for better exploration  
- 📱 **PWA Experience**: Mobile installation and push notifications  

## 🚀 Installation & Execution

### Prerequisites
- Docker & Docker Compose

### 1️⃣ Clone the repository
```bash
git clone https://github.com/user/TripHive.git
cd TripHive
```

### 2️⃣ Start the project with Docker
```bash
docker-compose up --build
```
The application will be available at [http://localhost:3000](http://localhost:3000).

### 3️⃣ Stop the project
```bash
docker-compose down
```
