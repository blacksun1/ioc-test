"use strict";

import intravenous from "intravenous";
import Settings from "./app/components/settings";
import SettingsPrinter from "./app/components/settingsPrinter";

const container = intravenous.create();
container.register("settings", Settings);
container.register("settingsPrinter", SettingsPrinter);
container.register("env", process.env.NODE_ENV);

const settingsPrinter = container.get("settingsPrinter");
settingsPrinter.writeSettings();
