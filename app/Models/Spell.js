export default class Spell {
  constructor({ id, name, description, level, range, duration, components, desc }) {
    this.id = id
    this.name = name
    // NOTE if you have to drill down or use a method on one of the statements, make it second
    this.description = description || desc.join('\n\n')
    this.level = level
    this.range = range
    this.duration = duration
    this.components = components
  }

  get Template() {
    return `
    <div class="bg-white p-3 shadow spell-card">
      <h1>${this.name}</h1>
      <hr>
      <h4>LEVEL: ${this.level === 0 ? 'Cantrip' : this.level} | DURATION: ${this.duration} | RANGE: ${this.range}</h4>
      <h4>COMPONENTS: ${this.components.join(', ')}</h4>
      <p>${this.description}</p>
    </div>
    ${this.Button}
    `
  }

  get Button() {
    if (this.id) {
      return '<button class="btn btn-outline-danger" onclick="app.sandboxSpellsController.remove()">Remove</button>'
    }
    return '<button class="btn btn-outline-info" onclick="app.sandboxSpellsController.add()">Add</button>'
  }
}