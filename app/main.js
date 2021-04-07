import DndSpellApiController from "./Controllers/DndSpellApiController.js";
import SandboxSpellsController from "./Controllers/SandboxSpellsController.js";

class App {
  dndSpellApiController = new DndSpellApiController()
  sandboxSpellsController = new SandboxSpellsController()
}

window["app"] = new App();
