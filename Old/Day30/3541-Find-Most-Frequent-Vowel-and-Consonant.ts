function maxFreqSum(s: string): number {
    let maxVowel = 0;
    let maxConsonant = 0;
    const map = new Map<string, number>();

    for (const ch of s) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }
    for (const [ch, num] of map.entries()) {
        if ("aeiou".includes(ch)) {
            maxVowel = Math.max(maxVowel, num);
        } else {
            maxConsonant = Math.max(maxConsonant, num);
        }
    }

    return maxConsonant + maxVowel;
}
