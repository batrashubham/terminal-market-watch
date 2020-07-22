import { CommandModule } from 'yargs';

export default interface Command<T, U> {
    buildCommandObj(): CommandModule<T, U>;
}
