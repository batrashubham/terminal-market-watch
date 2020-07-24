import 'reflect-metadata';
import App from '../../../src/App/App';
import IAppExecutor from '../../../src/App/IAppExecutor';

describe('App', () => {
    const mockExecutor: IAppExecutor = {
        execute: jest.fn(),
    };
    it('should call execute method of executor', () => {
        const app = new App(mockExecutor);
        app.run();
        expect(mockExecutor.execute).toHaveBeenCalledTimes(1);
    });
});
