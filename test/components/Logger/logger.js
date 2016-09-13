"use strict";

// Imports

const Lab = require("lab");
const Code = require("code");
const Sinon = require("sinon");
const Intravenous = require("intravenous");
const Sut = require("../../../dist/components/Logger/logger");


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

    beforeEach((done) => {

        container = Intravenous.create();
        container.register("sut", Sut);
        container.register("console", {
            log: Sinon.spy()
        }, "singleton")
        container.register("chalk", {
            green: Sinon.stub().returnsArg(0),
            blue: Sinon.stub().returnsArg(0),
            grey: Sinon.stub().returnsArg(0)
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

    describe("log method", () => {

        it("should log with console object", (done) => {

            // Arrange
            const sut = container.get("sut");

            // Act
            sut.log("my message")

            // Assert
            const console = container.get("console");
            expect(console.log.calledOnce).to.be.true();
            expect(console.log.calledWith(Sinon.match(/logger: my message/))).to.be.true();

            return done();
        });

        it("should log with console object with custom name", (done) => {

            // Arrange
            const sut = container.get("sut", "my custom logger");

            // Act
            sut.log("my message")

            // Assert
            const console = container.get("console");
            expect(console.log.calledOnce).to.be.true();
            expect(console.log.calledWith(Sinon.match(/my custom logger: my message/))).to.be.true();

            return done();
        });

        it("should log with colour", (done) => {

            // Arrange
            const sut = container.get("sut");

            // Act
            sut.log("my message")

            // Assert
            const chalk = container.get("chalk");
            expect(chalk.grey.calledOnce).to.be.true();
            expect(chalk.green.calledOnce).to.be.true();
            expect(chalk.blue.calledOnce).to.be.true();

            return done();
        });

    });

});
