'use strict';

var particles3 = Particles3.init({
  selector: '.p-trendtag__background',
  sizeVariations: 10,
  color: ['#00bbdd', '#404B69', '#DBEDF3'],
  connectParticles: true,
  retina_detect : true,
  resize : true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 20,
        connectParticles: true,
        color: ['#00bbdd', '#404B69', '#DBEDF3'],
      }
    }
  ]
});
