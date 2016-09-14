import AppBootstrap from "./bootstrapper/appBootstrap";
import {packageFactory as LoggerFactory} from "ioc-logger";


const container = AppBootstrap();

const app = container.get("app");
app.run(() => {

    const logger = LoggerFactory("Disposer");

    logger.log("Starting disposal");
    container.dispose();
    logger.log("Finished disposal");
});
