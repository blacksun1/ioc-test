import AppBootstrap from "./bootstrapper/appBootstrap";

const container = AppBootstrap();

const app = container.get("app");
app.run(() => container.dispose());
