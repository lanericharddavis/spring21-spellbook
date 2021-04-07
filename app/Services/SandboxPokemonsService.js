import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"




class SandboxPokemonsService {




  async catchPokemon() {
    let response = await sandboxApi.post('', ProxyState.activePokemon)
    console.log(response.data)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(response.data)]
  }

  async getAllPokemon() {
    let res = await sandboxApi.get('')
    ProxyState.myPokemon = res.data.map(p => new Pokemon(p))

  }

}










export const sandboxPokemonsService = new SandboxPokemonsService()






































// import { ProxyState } from "../AppState.js"
// import Spell from "../Models/Spell.js"
// import { sandboxApi } from "./AxiosService.js"

// class SandboxSpellService {
//   async remove() {
//     // NOTE by convention all deletes require the id of the thing to delete
//     await sandboxApi.delete(ProxyState.activeSpell.id)

//     ProxyState.mySpells = ProxyState.mySpells.filter(s => s.id !== ProxyState.activeSpell.id)

//     ProxyState.activeSpell = null
//   }
//   setActive(id) {
//     let spell = ProxyState.mySpells.find(s => s.id === id)
//     ProxyState.activeSpell = spell
//   }
//   async getAll() {
//     let res = await sandboxApi.get('')
//     ProxyState.mySpells = res.data.map(s => new Spell(s))
//   }
//   async add() {
//     // POSTS and PUTs require a body to be sent and therefore the first argument must be provided
//     let res = await sandboxApi.post('', ProxyState.activeSpell)
//     ProxyState.mySpells = [...ProxyState.mySpells, new Spell(res.data)]
//   }

// }

// export const sandboxSpellService = new SandboxSpellService()