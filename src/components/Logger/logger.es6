/* eslint-disable no-console */
import Chalk from "chalk";


export default class ConsoleLogger {

    constructor(console, name) {

        this.console = console;
        this.name = name || "logger";
    }

    log(message) {

        this.console.log(`${Chalk.grey((new Date).toISOString())} ${Chalk.green(this.name)}: ${Chalk.blue(message)}`);
    }

    static get $inject() {
        return ["console"];
    }
}
