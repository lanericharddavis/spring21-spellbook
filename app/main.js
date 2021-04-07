import PokemonsApiController from "./Controllers/PokemonsApiController.js";
// import SandboxSpellsController from "./Controllers/SandboxSpellsController.js";

class App {
  PokemonsApiController = new PokemonsApiController()
  // sandboxSpellsController = new SandboxSpellsController()
}

window["app"] = new App();
