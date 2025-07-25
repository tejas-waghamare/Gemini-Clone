// import express from 'express';
// import 'dotenv/config'
// import dbConnect from './src/config/dbConnect.js'
// import bodyParser from "body-parser";
// import verifyUser from './src/middlewares/user.middleware.js';
// import authRouter from './src/routes/auth.route.js';
// import chatRouter from './src/routes/chat.route.js';
// import messageRouter from './src/routes/message.route.js';
// import cors from 'cors'

// dbConnect();

// const app = express();
// app.use(bodyParser.json());

// app.use(cors())

// app.use("/api/v1/auth", authRouter);
// app.use(verifyUser)
// app.use("/api/v1/chat", chatRouter);
// app.use("/api/v1/message", messageRouter);

// const port = process.env.PORT;
// app.listen(port, () => console.log("❄️  Server started on port " + port));

import express from 'express';
import 'dotenv/config';
import dbConnect from './src/config/dbConnect.js';
import bodyParser from 'body-parser';
import verifyUser from './src/middlewares/user.middleware.js';
import authRouter from './src/routes/auth.route.js';
import chatRouter from './src/routes/chat.route.js';
import messageRouter from './src/routes/message.route.js';
import cors from 'cors';

dbConnect();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Update to deployed frontend URL later
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Optional: Specify allowed methods
  credentials: true // Optional: Allow cookies/auth headers if needed
}));

app.use(bodyParser.json());
app.use("/api/v1/auth", authRouter);
app.use(verifyUser);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/message", messageRouter);

const port = process.env.PORT || 5000; // Fallback port if env variable is undefined
app.listen(port, () => console.log(`❄️  Server started on port ${port}`));