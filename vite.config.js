const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-carousel'
    },
    rollupOptions: {
      external: ['swiper/bundle', '@hotwired/stimulus'],
      output: {
        globals: {
          '@hotwired/stimulus': 'Stimulus',
          'swiper/bundle': 'Swiper'
        }
      }
    }
  }
}
