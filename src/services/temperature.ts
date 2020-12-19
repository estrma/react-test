export const convertCelsius = (temp: number, unit: TempUnit): number => {
    if ('F' === unit) return temp * 9 / 5 + 32; // input always in C
    if ('C' === unit) return temp;
};
