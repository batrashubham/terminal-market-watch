import { CommandModule } from 'yargs';

export default interface ICommand<T, U> {
    buildCommandObj(): CommandModule<T, U>;
}
