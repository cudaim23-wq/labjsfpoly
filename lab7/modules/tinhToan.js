export const tong = (arr) => arr.reduce((s, x) => s + x, 0);

export const trungBinh = (arr) => (arr.length === 0 ? 0 : tong(arr) / arr.length);

export const max = (arr) => (arr.length === 0 ? 0 : Math.max(...arr));

export const min = (arr) => (arr.length === 0 ? 0 : Math.min(...arr));
