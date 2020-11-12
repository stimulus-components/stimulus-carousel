# Stimulus Carousel

[![](https://img.shields.io/npm/dt/stimulus-carousel.svg)](https://www.npmjs.com/package/stimulus-carousel)
[![](https://img.shields.io/npm/v/stimulus-carousel.svg)](https://www.npmjs.com/package/stimulus-carousel)
[![](https://github.com/stimulus-components/stimulus-carousel/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-carousel)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-carousel.svg)](https://github.com/stimulus-components/stimulus-carousel)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a6137aa0-bbbc-401d-81cc-4677a91fe581/deploy-status)](https://stimulus-carousel.netlify.com)

## Getting started

A Stimulus controller to deal with carousel.

This controller is using [Swiper](https://swiperjs.com/) behind the scene.

## Installation

```bash
$ yarn add stimulus-carousel
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import Carousel from "stimulus-carousel"

const application = Application.start()
application.register("carousel", Carousel)
```

## Usage

Before starting, your must import the `Swiper` CSS in your `js` or in your `sass`:

```js
// In your application.js (for example)
import 'swiper/swiper-bundle.min.css'

// Or in your sass
@import "~swiper/swiper-bundle"
```

Basic usage:
```html
<div data-controller="carousel" class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
</div>
```

With options:
```html
<div
  data-controller="carousel"
  class="swiper-container"
  data-carousel-options="{'direction': 'vertical'}"
>
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
</div>
```

## Configuration

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-carousel-options` | `{}` | Options for lightgallery.js as JSON string. | ✅ |

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus component.
```js
import Carousel from "stimulus-carousel"

export default class extends Carousel {
  connect() {
    super.connect()
    console.log("Do what you want here.")

    // The swiper instance.
    this.swiper

    // Default options for every carousels.
    this.defaultOptions

    // Options from data attribute.
    this.options
  }

  // You can set default options in this getter.
  get defaultOptions () {
    return {
      // Your default options here
    }
  }
}
```

This controller will automatically have access to targets defined in the parent class.

If you override the `connect`, `disconnect` or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Project setup
```bash
$ yarn install
$ yarn dev
```

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
