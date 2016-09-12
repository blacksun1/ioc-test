export default class app {

    constructor(defaultLogger, loggerFactory, settingsPrinter) {

        this.defaultLogger = defaultLogger;
        this.namedLogger = loggerFactory.get(this.constructor.name);
        this.settingsPrinter = settingsPrinter;
    }

    run(callback) {

        this.defaultLogger.log("I Like cake");
        this.namedLogger.log("I still like cake");

        this.settingsPrinter.writeSettings();

        return callback(null, null);
    }

    static get $inject() {
        return ["logger", "loggerFactory", "settingsPrinter"];
    }
}
