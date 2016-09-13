/* eslint-disable no-console */

export default class ConsoleLogger {

    constructor(chalk, console, name) {

        this.chalk = chalk;
        this.console = console;
        this.name = name || "logger";
    }

    log(message) {

        this.console.log(`${this.chalk.grey((new Date).toISOString())} ${this.chalk.green(this.name)}: ${this.chalk.blue(message)}`);
    }

    static get $inject() {

        return ["chalk", "console"];
    }

}
