import GamesQuery from './GamesQuery';
import SessionsQuery from './SessionsQuery';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export { GamesQuery, SessionsQuery };
