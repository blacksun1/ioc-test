export default function(container) {

    container.register("console", console, "singleton");
    container.register("logger", require("./logger"));

    return;
}
