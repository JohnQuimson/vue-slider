'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      titoloPrincipale: 'Vue Slider',
      film: {
        foto: ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg'],
      },
      currentImage: 0,
      info: {
        titolo: 'TESLA',
        description: `Tesla è un'azienda statunitense specializzata nella produzione di auto elettriche`,
      },
    };
  },
  methods: {
    next() {
      this.currentImage++;

      if (this.currentImage > this.film.foto.length - 1) {
        this.currentImage = 0;
      }
    },
    prev() {
      this.currentImage--;

      if (this.currentImage < 0) {
        this.currentImage = this.film.foto.length - 1;
      }
    },
  },
}).mount('#app');
