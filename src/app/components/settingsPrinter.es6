"use strict";

/* eslint-disable no-console */

export default class SettingsPrinter {

    constructor(settings) {
        this.settings_ = settings;
    }

    writeSettings() {
        console.log(JSON.stringify(this.settings_, null, 2));
    }

    static get "@require"() {
        return ["settings"];
    }

    static get "@singleton"() {
        return true;
    }

}
