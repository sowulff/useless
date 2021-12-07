const fortunes = [
  'I see money in your future, unfortunately its not yours',
  'Your pet is planning to eat you',
  'You will die alone and poorly dressed',
  'You will always step on a wet spot after putting on freshly dried socks',
  'You have been chosen for the Hunger Game',
  'Error 404: Future not found',
  'As long as you dont sign up for anything new, you will do fine.',
  'It would be best to maintain a low profile for now',
  'Psst! Theyre being paid to love you',
  'The end is near, and its all yout fault',
  'Life will be happy, until the end when you will be yourself alot',
  'You will be poisoned',
];

// får ut en random spådom från arrayen när man klickar på bilden
const javaFortune = document.querySelector('.imageContainer');
const javaContainer = document.querySelector('.textContainer');
const javaflyingGrumpy = document.querySelector('.flyingGrumpy');
const moveGrumpy = document.querySelector('.flyingGrumpy');

//klick på helbild
moveGrumpy.addEventListener('click', () => {
  const randomElement = fortunes[Math.floor(Math.random() * fortunes.length)];
  javaContainer.innerHTML = randomElement;
});

//klick på flygande grupmy
javaFortune.addEventListener('click', () => {
  const randomElement = fortunes[Math.floor(Math.random() * fortunes.length)];
  javaContainer.innerHTML = randomElement;
});

// Snurra när man klickar på valfri knapp
const img = document.querySelector('.img');
window.addEventListener('keypress', function (event) {
  img.classList.toggle('spin');
  //   javaContainer.classList.toggle('spin');
});

// loopa ut när man scrollar
const signs = ['德', '家', '安', '春'];

const javaSign = document.querySelector('h2');

window.addEventListener('scroll', function (event) {
  signs.forEach((sign) => (javaSign.textContent += sign));
  javaflyingGrumpy.classList.add('flying');
});
