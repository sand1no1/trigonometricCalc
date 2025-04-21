export function getSin (oppositeLeg: number, hipotenuse: number): number {
    const sin = oppositeLeg / hipotenuse;
    return sin * (180 / Math.PI);
}

export function getCos (adjacentLeg: number, hipotenuse: number): number {
    const cos = adjacentLeg / hipotenuse;
    return cos * (180 / Math.PI);
}

export function getTan (oppositeLeg: number, adjacentLeg: number): number {
    const tan = oppositeLeg / adjacentLeg;
    return tan * (180 / Math.PI);
}