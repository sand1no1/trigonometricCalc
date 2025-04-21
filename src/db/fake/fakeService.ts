import { RightTriangleDTO } from '../../types/db/figures';
import trianglesData from './triangles.json';

export default class CalculatorService {
  private triangles: RightTriangleDTO[];

  constructor() {
    this.triangles = trianglesData;
  }

  public async getAllTriangles(): Promise<RightTriangleDTO[]> {
    return this.triangles;
  }
}