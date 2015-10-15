"use strict";

import IoC from "electrolyte";
import Settings from "./app/components/settings";
import SettingsPrinter from "./app/components/settingsPrinter";

IoC.loader(IoC.node("app/components"));

const settingsPrinter = new SettingsPrinter(Settings());
settingsPrinter.writeSettings();
