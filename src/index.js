import { Controller } from 'stimulus'
import Swiper from 'swiper/bundle'

import 'swiper/swiper-bundle.min.css'

export default class extends Controller {
  connect () {
    this.swiper = new Swiper(this.element, {
      ...this.defaultOptions,
      ...this.options
    })
  }

  get defaultOptions () {
    return {}
  }

  get options () {
    if (this.data.has('options')) {
      return JSON.parse(this.data.get('options').replace(/'/g, '"'))
    }

    return {}
  }
}
