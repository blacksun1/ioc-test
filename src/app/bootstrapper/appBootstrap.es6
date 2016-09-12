import Intravenous from "intravenous";

import AppModule from "./appModule";
import LoggerModule from "../components/Logger/loggerModule";
import Settings from "../components/settings";
import SettingsPrinter from "../components/settingsPrinter";


export default function bootstrap() {

    const container = Intravenous.create();

    AppModule(container);
    LoggerModule(container);
    container.register("settings", Settings);
    container.register("settingsPrinter", SettingsPrinter);
    container.register("env", process.env.NODE_ENV);

    return container;
}
