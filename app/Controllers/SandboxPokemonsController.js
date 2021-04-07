import { ProxyState } from "../AppState.js"
import { sandboxPokemonsService } from "../Services/SandboxPokemonsService.js"


function _draw() {
  let template = ''
  ProxyState.myPokemon.forEach(p => {
    template += `<li onclick="app.sandboxPokemonsController.catchPokemon('${p.id}')">${p.name}</li>`
  });
  document.getElementById("myPokemon").innerHTML = template
}





export default class SandboxPokemonsController {
  constructor() {
    ProxyState.on('myPokemon', _draw)



  }

  async catchPokemon() {
    try {
      await sandboxPokemonsService.catchPokemon()
    } catch (error) {
      console.error(error)
    }
  }



}

















// import { ProxyState } from "../AppState.js";
// import { sandboxSpellService } from "../Services/sandboxSpellService.js";


// //Private
// function _draw() {
//   let template = ""
//   ProxyState.mySpells.forEach(s => {
//     template += `<li class="action hover-action" onclick="app.sandboxSpellsController.setActive('${s.id}')">${s.name}</li>`
//   })
//   document.getElementById('my-spells').innerHTML = template
// }

// //Public
// export default class SandboxSpellsController {
//   constructor() {
//     ProxyState.on("mySpells", _draw);

//     // NOTE Call to get all spells at start of app
//     this.getAllSpells()
//   }
//   async getAllSpells() {
//     try {
//       await sandboxSpellService.getAll()
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   async add() {
//     try {
//       await sandboxSpellService.add()
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   async remove() {
//     try {
//       await sandboxSpellService.remove()
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   setActive(id) {
//     sandboxSpellService.setActive(id)
//   }


// }