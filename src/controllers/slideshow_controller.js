import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["slide"]

  initialize() {
    console.log("length:", this.slideTargets.length)
    this.showCurrentSlide()
    this.maxIndex = this.slideTargets.length - 1
  }

  previous() {
    if(this.index > 0)
      this.index--
  }

  next() {
    this.maxIndex = 10
    if(this.index < this.maxIndex)
      this.index++
  }

  showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", this.index == i)
    })
  }

  get index() {
    return parseInt(this.data.get("index"))
  }

  set index(value) {
    this.data.set("index", value)
    this.showCurrentSlide()
  }
}

