import { ProxyState } from "../AppState.js"
import Spell from "../Models/Spell.js"
import { dndApi } from "./AxiosService.js"

class DndSpellApiService {
  async getSpell(index) {
    let res = await dndApi.get(index)
    ProxyState.activeSpell = new Spell(res.data)
  }
  async getAllSpells() {
    let res = await dndApi.get()
    ProxyState.apiSpells = res.data.results
  }


}

export const dndSpellApiService = new DndSpellApiService()