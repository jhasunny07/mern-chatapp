import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';


dotenv.config();


const app = express();

app.use(express.json());

const PORT = process.env.PORT

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);



app.listen(PORT, () => {
    console.log('Server is running on PORT ' + PORT);
    connectDB();
});


// app.listen(PORT, () => console.log('Server is running on PORT ' + PORT));


// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'frontend', 'build')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//     });
// }
