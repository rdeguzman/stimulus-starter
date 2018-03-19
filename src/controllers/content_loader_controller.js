import { Controller } from "stimulus"

export default class extends Controller {
  // LIFECYCLE callback methods
  // call once, when the controller is fist instantiated
  initialize() {
  }

  // anytime the controller is connected to the DOM
  connect() {
    this.load()

    if(this.data.has("refreshInterval")) {
      this.startRefreshing()
    }
  }

  // anytime the controller is disconnected to the DOM
  // stop the timer!
  // we can test this by removing the DOM and notice the
  // console log displays stopRefreshing
  disconnect() {
    this.stopRefreshing()
  }

  load() {
    fetch(this.data.get("url"))
      .then(response => response.text())
      .then(html => {
        this.element.innerHTML = html
      })
  }

  startRefreshing() {
    this.refershTimer = setInterval(() => {
      this.load()
    }, this.data.get("refreshInterval"))
  }

  stopRefreshing() {
    console.log("stopRefreshing")
    if(this.refereshTimer) {
      clearInterval(this.refreshTimer)
    }
  }

}
