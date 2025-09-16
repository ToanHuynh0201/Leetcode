function sumZero(n: number): number[] {
    const result: number[] = new Array(n).fill(0);
    let k = 1;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        result[i] = -k;
        result[n - 1 - i] = k;
        k++;
    }
    return result;
}
