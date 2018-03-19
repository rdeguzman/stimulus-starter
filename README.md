# Stimulus Starter

A preconfigured blank slate for exploring [Stimulus](https://github.com/stimulusjs/stimulus). Jump to [The Stimulus Handbook](https://stimulusjs.org/handbook/introduction) for an introduction.

---

We recommend [remixing `stimulus-starter` on Glitch](https://glitch.com/edit/#!/import/github/stimulusjs/stimulus-starter) so you can work entirely in your browser without installing anything:

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/stimulusjs/stimulus-starter)

Or, if you'd prefer to work from the comfort of your own text editor, you'll need to clone and set up `stimulus-starter`:

```
$ git clone https://github.com/stimulusjs/stimulus-starter.git
$ cd stimulus-starter
$ yarn install
$ yarn start
```
---

© 2018 Basecamp, LLC.

# HTML
```
  data-controller
  data-action
  data-target

  <div data-controller="slideshow" data-slideshow-index="0">
    <button data-action="slideshow#previous">←</button>
    <button data-action="slideshow#next">→</button>

    <div data-target="slideshow.slide" class="slide">A 🐵</div>
    <div data-target="slideshow.slide" class="slide">B 🙈</div>
    <div data-target="slideshow.slide" class="slide">C 🙉</div>
    <div data-target="slideshow.slide" class="slide">D 🙊</div>
  </div>
```

# Controller

```
# src/controllers/hello_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  // LIFECYCLE callback methods
  // call once, when the controller is fist instantiated
  initialize() {
  }

  // anytime the controller is connected to the DOM
  connect() {
  }

  // anytime the controller is disconnected from the DOM
  disconnect() {
  }
}
```

# Data API

```
this.data.has("index") returns true if the controller's element has a data-slideshow-index attribute
this.data.get("index") returns the string value of the element's data-slideshow-index attribute
this.data.set("index", index) sets the element's data-slideshow-index attribute to the string value of index
```

For example, to persist the `data-slideshow-index` state to the controller

# src/controllers/hello_controller.js
```
import { Controller } from "stimulus"

export default class extends Controller {
  // LIFECYCLE callback methods
  // call once, when the controller is fist instantiated
  initialize() {
  }

  get index() {
    return parseInt(this.data.get("index"))
  }

  set index(value) {
    this.data.set("index", value)
  }
}
```
