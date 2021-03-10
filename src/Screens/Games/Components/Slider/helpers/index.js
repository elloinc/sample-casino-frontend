import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export { default as getBackground } from './getBackground';
export { default as getBackgroundSize } from './getBackgroundSize';
