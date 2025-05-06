export const getTypesMultiplier = (types: string[]): string[] => {
    const counts: Record<string, number> = {};

    for (const type of types) {
        counts[type] = (counts[type] || 0) + 1;
    }

    return Object.keys(counts).filter(type => counts[type] >= 2);
}