import yargs from 'yargs';

class Options {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static getOptions(): any {
        return yargs
            .usage('Usage: -s <stock>')
            .option('s', { alias: 'stock', describe: 'Stock price to check', type: 'string', demandOption: true }).argv;
    }
}

export default Options;
