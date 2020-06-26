import 'reflect-metadata';
import { container } from './DI/container';
import App from './App';

const app = container.resolve(App);

app.run();
