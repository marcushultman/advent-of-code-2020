import puzzle from '../util/puzzle.ts';

const sections = await puzzle(import.meta).sections();

const sectionCount = (s: string) => new Set(s.split('\n').map(s => s.split('')).flat()).size;

console.log(sections.map(sectionCount).reduce((a, b) => a + b, 0));