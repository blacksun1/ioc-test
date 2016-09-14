import Intravenous from "intravenous";

import AppModule from "./appModule";
import {registrationModule as LoggerModule} from "ioc-logger";
import Settings from "../components/settings";
import SettingsPrinter from "../components/settingsPrinter";


export default function bootstrap() {

    const container = Intravenous.create({
        onDispose: function(obj, serviceName) {
            console.log(`Intravenous is disposing ${serviceName}`); // eslint-disable-line
        }
    });

    LoggerModule(container);
    AppModule(container);

    container.register("settings", Settings);
    container.register("settingsPrinter", SettingsPrinter);
    container.register("env", process.env.NODE_ENV);

    return container;
}
