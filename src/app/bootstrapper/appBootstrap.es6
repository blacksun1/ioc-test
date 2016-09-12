import Intravenous from "intravenous";

import AppModule from "./appModule";
import LoggerModule from "../components/Logger/loggerModule";
import Settings from "../components/settings";
import SettingsPrinter from "../components/settingsPrinter";


export default function bootstrap() {

    const container = Intravenous.create({
        onDispose: function(obj, serviceName) {
            console.log(`Intravenous is disposing ${serviceName}`, obj); // eslint-disable-line
        }
    });

    // Here I am registering a logger.
    container.register("logger", class Logger {

        log(msg) {
            console.log(msg); // eslint-disable-line
        }

    });
    // But this overwrites logger. No error occurs or anything,
    // it just gets overwritten.
    LoggerModule(container);

    AppModule(container);

    container.register("settings", Settings);
    container.register("settingsPrinter", SettingsPrinter);
    container.register("env", process.env.NODE_ENV);

    return container;
}
