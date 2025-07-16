# Plot - India Real Estate Platform

**Important:**
- Use Node.js v16.x for best compatibility.
- If using Node.js v17 or above, ensure `.env` contains `NODE_OPTIONS=--openssl-legacy-provider`.
- MongoDB must be running locally for backend features.

## Getting Started

### 1. Install dependencies (root and backend):
```sh
npm install
cd Backend
npm install
```

### 2. Start MongoDB (if not already running):
```sh
mongod
```

### 3. Start the backend:
```sh
cd Backend
node server.js
```

### 4. Start the frontend:
```sh
npm start
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000/api/](http://localhost:5000/api/)

---

For any issues, check your Node version and MongoDB status first.
