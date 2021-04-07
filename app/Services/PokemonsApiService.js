import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"




class PokemonsApiService {

  async getAllPokemon() {
    let response = await pokeApi.get()
    console.log(response.data.results)
    ProxyState.allPokemon = response.data.results
  }

  async getPokemon(name) {
    let response = await pokeApi.get(name)
    console.log(response.data)
    ProxyState.activePokemon = new Pokemon(response.data)
  }

}

export const pokemonsApiService = new PokemonsApiService()



























// import { ProxyState } from "../AppState.js"
// import Spell from "../Models/Spell.js"
// import { dndApi } from "./AxiosService.js"

// class DndSpellApiService {
//   async getSpell(index) {
//     let res = await dndApi.get(index)
//     ProxyState.activeSpell = new Spell(res.data)
//   }
//   async getAllSpells() {
//     let res = await dndApi.get()
//     ProxyState.apiSpells = res.data.results
//   }


// }

// export const dndSpellApiService = new DndSpellApiService()