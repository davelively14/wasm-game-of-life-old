// This was originally `hello-wasm-pack`, but we wanted to use our own
// project. From /pkg, we run `npm link` to register `wasm-game-of-life.js`.
// Then, we returned to this directory, /www, and ran
// `npm link wasm-game-of-life`. That allows us to import here.
import * as wasm from "wasm-game-of-life";

wasm.greet();
