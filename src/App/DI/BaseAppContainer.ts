import { Container } from 'inversify';
import App from '../App';

abstract class BaseAppContainer {
    protected container: Container;

    constructor() {
        this.container = new Container();
        this.container.bind<App>(App).toSelf().inSingletonScope();
        this.initialize();
    }

    abstract initialize(): void;

    startApplication(): void {
        this.container.resolve(App).run();
    }
}

export default BaseAppContainer;
