import { ProxyState } from "../AppState.js"
import { pokemonsApiService } from "../Services/PokemonsApiService.js"


//PRIVATE





//PUBLIC
export default class PokemonsApiController {

  constructor() {

    this.getAllPokemon
  }


  async getAllPokemon() {
    try {
      await pokemonsApiService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }


}



































// import { ProxyState } from "../AppState.js";
// import { dndSpellApiService } from "../Services/dndSpellApiService.js";


// //Private
// function _draw() {
//   let template = ""
//   ProxyState.apiSpells.forEach(s => {
//     template += `<li class="action hover-action" onclick="app.dndSpellApiController.getSpell('${s.index}')">${s.name}</li>`
//   })
//   document.getElementById('api-spells').innerHTML = template
// }

// function _drawActive() {
//   document.getElementById('active-spell').innerHTML = ProxyState.activeSpell ? ProxyState.activeSpell.Template : "<p> no active spell</p>"
// }

// //Public
// export default class DndSpellApiController {
//   constructor() {
//     ProxyState.on("apiSpells", _draw);
//     ProxyState.on("activeSpell", _drawActive);


//     // NOTE Call to get all spells at start of app
//     this.getAllApi()
//   }

//   async getAllApi() {
//     try {
//       await dndSpellApiService.getAllSpells()
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   async getSpell(index) {
//     try {
//       await dndSpellApiService.getSpell(index)
//     } catch (error) {
//       console.error(error)
//     }
//   }


// }