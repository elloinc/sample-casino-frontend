import Games from './Games';
import Game from './Game';
import Faq from './Faq';
import SamplePage from './SamplePage';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export { Games, Game, Faq, SamplePage };
