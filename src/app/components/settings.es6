"use strict";

export default function settings(env) {
    const mySettings = {};
    const myEnv = env || "development";

    switch (myEnv) {
    case "production":
        mySettings.dbHost = "sql.example.com";
        mySettings.dbPort = 3306;
        break;
    default:
        mySettings.dbHost = "127.0.0.1";
        mySettings.dbPort = 3306;
        break;
    }

    return mySettings;
}

// export "@singleton" true;
settings.$inject = ["env"];

