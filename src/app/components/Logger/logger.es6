/* eslint-disable no-console */


export default class ConsoleLogger {

    constructor(name) {

        this.name = name;
    }

    log(message) {

        if (this.name) {
            console.log(`${(new Date).toISOString()},${this.name}: ${message}`);
        } else {
            console.log(`${(new Date).toISOString()},logger: ${message}`);
        }
    }
}

ConsoleLogger.$inject = [];
