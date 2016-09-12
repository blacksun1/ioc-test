import AppBootstrap from "./app/bootstrapper/appBootstrap";

const container = AppBootstrap();

const app = container.get("app");
app.run(() => container.dispose());
