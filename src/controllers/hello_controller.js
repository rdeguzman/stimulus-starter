import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["username"]

  connect() {
    console.log("connect", this.element)
  }

  greet() {
    //const element = this.usernameTarget
    //const name = element.value
    console.log(`greet ${this.name}!`)
  }

  get name() {
    return this.usernameTarget.value
  }

}
