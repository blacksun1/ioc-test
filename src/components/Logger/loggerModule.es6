export default function(container) {

    container.register("chalk", require("chalk"), "singleton");
    container.register("console", console, "singleton");
    container.register("logger", require("./logger"));

    return;
}
