import { Request, Response, NextFunction } from "express";
import CalculatorService from "../db/fake/fakeService";
import CalculatorController from "../controllers/calculator.controller";

const controller = new CalculatorController(new CalculatorService());

export default class CalculatorHttpHandler {

    async getSin(request: Request, response: Response, next: NextFunction) {  
        try{
            const result = await controller.getTrianglesSin();
            response.json(result);

        } catch (error) {
            next(error);
        }
    }

    async getCos(request: Request, response: Response, next: NextFunction){
        try{
            const result = await controller.getTrianglesCos();
            response.json(result);
        } catch (error){
            next(error);
        }
    }

    async getTan(request: Request, response: Response, next: NextFunction){
        try{
            const result = await controller.getTrianglesTan();
            response.json(result);
        } catch (error){
            next(error);
        }
    }

}