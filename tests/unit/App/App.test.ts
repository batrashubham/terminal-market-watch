import 'reflect-metadata';
import App from '../../../src/App/App';
import IAppExecutor from '../../../src/App/IAppExecutor';
import IStorage from '../../../src/App/Persistence/IStorage';

describe('App', () => {
    const mockExecutor: IAppExecutor = {
        execute: jest.fn(),
    };
    const mockStorage: IStorage = {
        getConnection: jest.fn(),
    };
    it('should call execute method of executor', () => {
        const app = new App(mockExecutor, mockStorage);
        app.run();
        expect(mockExecutor.execute).toHaveBeenCalledTimes(1);
    });
});
