function getNoZeroIntegers(n: number): number[] {
    const isNonZero = (num: number) => !num.toString().includes("0");
    for (let i = 1; i < n; i++) {
        let j = n - 1;
        if (isNonZero(i) && isNonZero(j)) {
            return [i, j];
        }
    }
    return [];
}
