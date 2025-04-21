import CalculatorService from '../db/fake/fakeService';
import { RightTriangleDTO } from '../types/db/figures';
import { RightTriangleSinDTO, RightTriangleCosDTO, RightTriangleTanDTO } from '../types/figures';
import { getSin, getCos, getTan } from '../utils/math';

export default class CalculatorController {
  private service: CalculatorService;

  constructor(service: CalculatorService) {
    this.service = service;
  }

  public async getTriangles(): Promise<RightTriangleDTO[]> {
    return this.service.getAllTriangles();
  }

  public async getTrianglesSin(): Promise<RightTriangleSinDTO[]> {
    const triangles = await this.getTriangles();

    return triangles.map(({ oppositeLeg, hipotenuse }) => {
      const sexagesimalSin = getSin(oppositeLeg, hipotenuse);
      return {
        oppositeLeg,
        hipotenuse,
        sexagesimalSin
      };
    });
  }

  public async getTrianglesCos(): Promise<RightTriangleCosDTO[]> {
    const triangles = await this.getTriangles();

    return triangles.map(({ adjacentLeg, hipotenuse }) => {
      const sexagesimalCos = getCos(adjacentLeg, hipotenuse);
      return {
        adjacentLeg,
        hipotenuse,
        sexagesimalCos
      };
    });
  }

  public async getTrianglesTan(): Promise<RightTriangleTanDTO[]> {
    const triangles = await this.getTriangles();

    return triangles.map(({ oppositeLeg, adjacentLeg}) => {
      const sexagesimalTan = getTan(oppositeLeg, adjacentLeg);
      return {
        oppositeLeg,
        adjacentLeg,
        sexagesimalTan
      };
    });
  }
  
}