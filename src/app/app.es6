export default class {

    constructor(logger1, logger2, logger3, logger4, settingsPrinter) {

        this.logger1 = logger1;
        this.logger2 = logger2;
        this.logger3 = logger3;
        this.logger4 = logger4;
        this.settingsPrinter = settingsPrinter;
    }

    run() {

        this.logger1.log("I Like cake");
        this.logger2.log("I Like cake");
        this.logger3.log("I Like cake");
        this.logger4.log("I Like cake");

        this.settingsPrinter.writeSettings();
    }

    static get $inject() {
        return ["logger", "logger", "logger", "logger", "settingsPrinter"];
    }
}
