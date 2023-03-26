import generateAsync from "./async";
import generateSync from "./sync";

(async () => Promise.all([generateAsync(), generateSync()]))();
