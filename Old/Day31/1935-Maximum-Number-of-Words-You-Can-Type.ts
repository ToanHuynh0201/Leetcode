function canBeTypedWords(text: string, brokenLetters: string): number {
    const brokenKeys = new Set(brokenLetters);
    const words = text.split(" ");

    let count = 0;
    for (const word of words) {
        for (const c of word) {
            if (brokenKeys.has(c)) {
                count++;
                break;
            }
        }
    }

    return words.length - count;
}
