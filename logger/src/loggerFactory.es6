import Intravenous from "intravenous";
import LoggerModule from "./loggerModule";


export default function loggerFactory(name) {

    const container = Intravenous.create();

    LoggerModule(container);

    if (name) {
        return container.get("logger", name);
    }

    return container.get("logger");
}
