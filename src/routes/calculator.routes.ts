import express from 'express';
import CalculatorHttpHandler from '../handlers/calculator.handler';

const router = express.Router();

const calculatorHttpHandler = new CalculatorHttpHandler;

router.get('/sin', calculatorHttpHandler.getSin);
router.get('/cos', calculatorHttpHandler.getCos);
router.get('/tan', calculatorHttpHandler.getTan);


export default router;