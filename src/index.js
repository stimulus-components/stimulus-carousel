import { Controller } from 'stimulus'
import Swiper from 'swiper/bundle'

export default class extends Controller {
  static values = {
    options: Object
  }

  connect () {
    this.swiper = new Swiper(this.element, {
      ...this.defaultOptions,
      ...this.optionsValue
    })
  }

  disconnect () {
    this.swiper.destroy()
    this.swiper = undefined
  }

  get defaultOptions () {
    return {}
  }
}
