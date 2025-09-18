function numEquivDominoPairs(dominoes: number[][]): number {
    let res = 0;
    const map = new Map();

    for (let i = 0; i < dominoes.length; i++) {
        let [a, b] = dominoes[i];
        let key = a < b ? `${a}${b}` : `${b}${a}`;
        if (map.has(key)) {
            res += map.get(key);
        }
        map.set(key, (map.get(key) ?? 0) + 1);
    }
    return res;
}
