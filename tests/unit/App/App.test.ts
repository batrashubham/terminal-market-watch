import 'reflect-metadata';
import App from '../../../src/App/App';
import AppExecutor from '../../../src/App/AppExecutor';

describe('App', () => {
    const mockExecutor: AppExecutor = {
        execute: jest.fn(),
    };
    it('should call execute method of executor', () => {
        const app = new App(mockExecutor);
        app.run();
        expect(mockExecutor.execute).toHaveBeenCalledTimes(1);
    });
});
