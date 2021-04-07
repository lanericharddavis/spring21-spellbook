import PokemonsApiController from "./Controllers/PokemonsApiController.js";
import SandboxPokemonsController from "./Controllers/SandboxPokemonsController.js";

class App {
  pokemonsApiController = new PokemonsApiController()
  sandboxPokemonsController = new SandboxPokemonsController()
}

window["app"] = new App();
