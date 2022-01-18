'use strict';

var particles4 = Particles4.init({
  selector: '.p-sidebar__background',
  sizeVariations: 10,
  maxParticles: 60,
  color: ['#f7909a', '#75fcfd', '#8d8aea', '#ffffff','#f4ef9f'],
  connectParticles: true,
  retina_detect : true,
  resize : true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 20,
        connectParticles: true,
        color: ['#f7909a', '#75fcfd', '#8d8aea', '#ffffff','#f4ef9f'],
      }
    }
  ]
});

