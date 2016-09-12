export default function(container) {

    container.register("console", console);
    container.register("logger", require("./logger"));

    return;
}
