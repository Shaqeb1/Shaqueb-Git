import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Shaqeb');
charactersCollection.sort();
console.log(charactersCollection.data);
