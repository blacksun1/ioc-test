import Chalk from "chalk";
import Logger from "./logger";


export default function(container) {

    container.register("chalk", Chalk, "singleton");
    container.register("console", console, "singleton");
    container.register("logger", Logger);

    return;
}
