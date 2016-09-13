"use strict";

// Imports

const Lab = require("lab");
const Code = require("code");
const Sinon = require("sinon");
const Intravenous = require("intravenous");
const Sut = require("../dist/app");


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const afterEach = lab.afterEach;
const beforeEach = lab.beforeEach;
const expect = Code.expect;


// Tests

describe("Logger", () => {

    let container;
    let loggerSpy;

    beforeEach((done) => {

        loggerSpy = Sinon.spy;

        class MockLogger {

            constructor (name) {
                this.name = name;
                Sinon.spy(this, "log");
            }

            log (message) {

                return;
            }
        }

        container = Intravenous.create();
        container.register("sut", Sut);
        container.register("logger", MockLogger);
        // container.register("loggerFactory", Sinon.stub()
        //     .returns({
        //         log: Sinon.spy()
        //     }), "singleton")
        container.register("settingsPrinter", {
            writeSettings: Sinon.spy()
        }, "singleton")

        return done();
    });

    afterEach((done) => {

        container.dispose();

        return done();
    })

    it("should have a static $inject property", (done) => {

        expect(Sut.$inject).to.be.an.array();

        return done();
    });

    describe("run method", () => {

        it("should log with 2 loggers", (done) => {

            // Arrange
            const sut = container.get("sut");
            const callback = Sinon.stub();

            // Act
            sut.run(callback);

            // Assert
            expect(callback.calledOnce).to.be.true();
            const logger = container.get("logger");
            expect(logger.calledTwice).to.be.true();
            expect()

            return done();
        });

        // it("should log with console object with custom name", (done) => {

        //     // Arrange
        //     const sut = container.get("sut", "my custom logger");

        //     // Act
        //     sut.log("my message")

        //     // Assert
        //     const console = container.get("console");
        //     expect(console.log.calledOnce).to.be.true();
        //     expect(console.log.calledWith(Sinon.match(/my custom logger: my message/))).to.be.true();

        //     return done();
        // });

        // it("should log with colour", (done) => {

        //     // Arrange
        //     const sut = container.get("sut");

        //     // Act
        //     sut.log("my message")

        //     // Assert
        //     const chalk = container.get("chalk");
        //     expect(chalk.grey.calledOnce).to.be.true();
        //     expect(chalk.green.calledOnce).to.be.true();
        //     expect(chalk.blue.calledOnce).to.be.true();

        //     return done();
        // });

    });

});
