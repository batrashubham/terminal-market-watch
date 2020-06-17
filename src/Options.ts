import yargs from 'yargs';


class Options {

    constructor() {
    }

    static getOptions() {
        return yargs
            .usage("Usage: -s <stock>")
            .option("s", {alias: "stock", describe: "Stock price to check", type: "string", demandOption: true})
            .argv;
    }
}

export default Options;
