const projectGrid = document.querySelector('#projectGrid');
const allChips = document.querySelectorAll('.chip');

const projects = {
  brand: [
    ['Sonara','Wireless headphones','assets/branding/product-01-sonara-headphones.jpg'],
    ['Tempo','Smartwatch','assets/branding/product-02-tempo-smartwatch.jpg'],
    ['Lumi','Skincare serum','assets/branding/product-03-lumi-serum.jpg'],
    ['Trek','Insulated flask','assets/branding/product-04-trek-flask.jpg'],
    ['Solis','Sunglasses','assets/branding/product-05-solis-sunglasses.jpg'],
    ['Boomr','Portable speaker','assets/branding/product-06-boomr-speaker.jpg'],
    ['Volt','Energy drink','assets/branding/product-07-volt-energy-can.jpg']
  ],
  poster: [
    ['Ember Coffee','Poster campaign','assets/poster/poster-01-ember-coffee.jpg'],
    ['IronPulse Gym','Fitness poster','assets/poster/poster-02-ironpulse-gym.jpg'],
    ['Wanderly','Travel campaign','assets/poster/poster-03-wanderly-travel.jpg'],
    ['Neon Nights','Music festival','assets/poster/poster-04-neon-nights-festival.jpg'],
    ['Haven','Real estate','assets/poster/poster-05-haven-real-estate.jpg'],
    ['Smash House','Burger campaign','assets/poster/poster-06-smash-house-burger.jpg'],
    ['Orbit','Mobile app','assets/poster/poster-07-orbit-app.jpg'],
    ['Aurum','Perfume','assets/poster/poster-08-aurum-perfume.jpg'],
    ['Stillwater','Yoga','assets/poster/poster-09-stillwater-yoga.jpg'],
    ['Stride','Sneakers','assets/poster/poster-10-stride-sneakers.jpg'],
    ['Flour & Co','Bakery','assets/poster/poster-11-flour-co-bakery.jpg'],
    ['Volta','Electric vehicles','assets/poster/poster-12-volta-ev.jpg'],
    ['BrightPath','Education','assets/poster/poster-13-brightpath-academy.jpg'],
    ['Paws','Pet care','assets/poster/poster-14-paws-pet-care.jpg'],
    ['Last Signal','Film poster','assets/poster/poster-15-last-signal-film.jpg'],
    ['Verde','Local market','assets/poster/poster-16-verde-market.jpg'],
    ['Pixel Clash','Gaming','assets/poster/poster-17-pixel-clash-gaming.jpg'],
    ['Wedding Invite','Event invitation','assets/poster/poster-18-wedding-invite.jpg'],
    ['Dune Rider','Safari','assets/poster/poster-19-dune-rider-safari.jpg'],
    ['Zest','Juice bar','assets/poster/poster-20-zest-juice-bar.jpg'],
    ['Supra','Automotive campaign poster','assets/poster/car.jpg'],
    ['Lumi','Skincare campaign poster','assets/poster/cream.jpg'],
    ['Stronger','Fitness supplement poster','assets/poster/jym.jpg'],
    ['Paranoid','Music festival poster','assets/poster/music.jpg'],
    ['Dubai Residences','Real estate campaign poster','assets/poster/realestae.jpg'],
    ['Fresh & Organic','Fresh produce poster','assets/poster/veg.jpg']
  ],
  ui: [
    ['AutoMavil','Travel adventure','assets/UI_UX/AutoMavil_ Drive Your Next Adventure.png'],
    ['FreshVeg','Online grocery app','assets/UI_UX/FreshVeg Online Vegetable Ordering App (1).png'],
    ['Timeless','Luxury watch store','assets/UI_UX/Timeless Luxury Watch Shop Homepage.png'],
    ['Travel Buddies','Travel app','assets/UI_UX/Travel Buddies App Showcase.png'],
    ['Jewelry','Luxury jewelry','assets/UI_UX/jewry.png'],
    ['Fresh Vegetables','Food ordering','assets/UI_UX/veg_.jpg'],
    ['Flyora','Travel booking website','assets/UI_UX/booking.jpg'],
    ['Woodora','Furniture e-commerce website','assets/UI_UX/furniture.jpg'],
    ['Lernix','Online learning dashboard','assets/UI_UX/learning.jpg'],
    ['Estately','Real estate website','assets/UI_UX/realestate.jpg']
  ],
  photoshop: [
    ['Creative Retouch','Photoshop artwork','assets/Photoshop/pexels-afterave-essentials-2011504051-29107585.jpg'],
    ['Digital Portrait','Image manipulation','assets/Photoshop/pexels-dogu-tuncer-339534179-16749129.jpg'],
    ['Visual Campaign','Photoshop composition','assets/Photoshop/pexels-jakubzerdzicki-37179955.jpg'],
    ['Editorial Scene','Creative edit','assets/Photoshop/pexels-japy-12760383.jpg'],
    ['Brand Visual','Photo artwork','assets/Photoshop/pexels-onbab-9281786.jpg'],
    ['Studio Campaign','Photo composite','assets/Photoshop/pexels-peppered-pixels-design-studio-1782104880-29297946.jpg'],
    ['Motion Image','Visual experiment','assets/Photoshop/pexels-pixelsnapvisualz-17721574.jpg'],
    ['Soft Glow','Perfume product photograph','assets/Photoshop/stocksnap-perfume-2574073_1920.jpg'],
    ['Cool Water','Fragrance product photograph','assets/Photoshop/mkupiec7-perfume-4718458_1920.jpg'],
    ['Kerala at Dusk','Coastal landscape photograph','assets/Photoshop/mbrajeev-chinese-fishing-nets-10562625_1920.jpg'],
    ['Portrait Study','Editorial portrait photograph','assets/Photoshop/ambadysasi-portrait-3327510_1920.jpg'],
    ['Living Tradition','Kathakali makeup photograph','assets/Photoshop/ambadysasi-kerala-4237608_1920.jpg'],
    ['Pastoral Study','Rural life photograph','assets/Photoshop/ambadysasi-india-3902979_1920.jpg']
  ],
  social: [
    ['Oud Implosion','Fragrance social campaign','assets/socialmedapost/perfume.jpg'],
    ['Tasty Burger','Food promotion','assets/socialmedapost/burger.jpg'],
    ['Dubai Escape','Travel campaign','assets/socialmedapost/travel.jpg'],
    ['Water Refresh','Beverage promotion','assets/socialmedapost/water.jpg'],
    ['Hydrate Daily','Beverage promotion','assets/socialmedapost/water2.jpg'],
    ['Pure Hydration','Bottle campaign','assets/socialmedapost/waterbottelk.jpg'],
    ['Stride Social','Sneaker promotion','assets/socialmedapost/shoe.jpg'],
    ['Property Showcase','Real estate campaign','assets/socialmedapost/realsteate.jpg'],
    ['Smart Style','Mobile phone promotion','assets/socialmedapost/pohone.jpg'],
    ['Fragrance Story','Perfume campaign','assets/socialmedapost/perume.jpg'],
    ['Learn Online','Course promotion','assets/socialmedapost/onlinecoures.jpg']
  ],
  '3d': [
    ['Object Study 01','3D visual','assets/3d design/pexels-pixelsnapvisualz-17721574.jpg'],
    ['Object Study 02','3D visual','assets/3d design/pexels-steve-9815700.jpg'],
    ['Object Study 03','3D visual','assets/3d design/pexels-steve-26975403.jpg'],
    ['Object Study 04','3D visual','assets/3d design/pexels-steve-27681215.jpg'],
    ['Object Study 05','3D visual','assets/3d design/pexels-steve-29463244.jpg'],
    ['Object Study 06','3D visual','assets/3d design/pexels-steve-29579757.jpg'],
    ['Object Study 07','3D visual','assets/3d design/pexels-steve-29751267.jpg'],
    ['Object Study 08','3D visual','assets/3d design/pexels-steve-29751269.jpg']
  ]
};

function renderProjects(category) {
  const selected = category === 'all'
    ? [...projects.brand, ...projects.poster.slice(0, 8), ...projects.ui,
       ...projects.photoshop, ...projects.social.slice(0, 4), ...projects['3d']]
    : projects[category] || [];

  projectGrid.innerHTML = selected.map(function(item, index) {
    return '<figure class="tile category-' + category + '" style="animation-delay:' + (index * 35) + 'ms">' +
      '<div class="pic"><img src="' + item[2] + '" alt="' + item[0] + '"></div>' +
      '<figcaption><b>' + item[0] + '</b><span>' + item[1] + '</span></figcaption></figure>';
  }).join('');

  const oldCount = projectGrid.parentElement.querySelector('.gallery-count');
  if (oldCount) oldCount.remove();
  if (category !== 'all') {
    const note = document.createElement('p');
    note.className = 'gallery-count';
    const names = {brand:'Branding',poster:'Posters',ui:'UI / UX',photoshop:'Photoshop',social:'Social media','3d':'3D Design'};
    note.textContent = selected.length + ' projects in ' + names[category];
    projectGrid.before(note);
  }
  projectGrid.querySelectorAll('.tile').forEach(function(tile) {
    tile.classList.add('reveal');
    requestAnimationFrame(function(){tile.classList.add('visible')});
  });
}

allChips.forEach(function(chip) {
  chip.addEventListener('click', function() {
    allChips.forEach(function(item) {
      item.setAttribute('aria-pressed', item === chip ? 'true' : 'false');
    });
    renderProjects(chip.dataset.f);
  });
});

document.querySelectorAll('[data-select]').forEach(function(button) {
  button.addEventListener('click', function() {
    document.querySelector('#work').scrollIntoView({behavior:'smooth'});
    const chip = document.querySelector('[data-f="' + button.dataset.select + '"]');
    if (chip) chip.click();
  });
});

renderProjects('all');
