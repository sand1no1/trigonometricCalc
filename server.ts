import express from 'express';
import calculatorRoutes from './src/routes/calculator.routes';

const app = express();
app.use(express.json());

app.use('/api/calculator', calculatorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));