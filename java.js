// array with fortunes
const fortunes = [
  "I see money in your future, unfortunately it's not your's",
  'Your pet is planning to eat you',
  'You will die alone and poorly dressed',
  'You will always step on a wet spot after putting on freshly dried socks',
  'You will be chosen for the Hunger Games',
  "Come back later, I'm in a bad mood",
  "They're being paid to love you. Sad.",
  "The end is near, and it's all you'r fault",
  "Life will be okey, until the end when you'll pee yourself alot",
  'You will be poisoned any day now',
  "I'm sorry to tell you that you will forget all your passwords and pin-codes and never remember your new ones",
];

// get a random fortune when clicking on the framed grumpy fortuneteller
const javaFortune = document.querySelector('.framesContainer');
const javaContainer = document.querySelector('.textContainer');
const javaflyingGrumpy = document.querySelector('.flyingGrumpy');

javaflyingGrumpy.addEventListener('click', () => {
  const randomElement = fortunes[Math.floor(Math.random() * fortunes.length)];
  javaContainer.innerHTML = randomElement;
});

// to make it possible to get a fortune when clicking in the flying Grumpys head aswell.
javaFortune.addEventListener('click', () => {
  const randomElement = fortunes[Math.floor(Math.random() * fortunes.length)];
  javaContainer.innerHTML = randomElement;
});

// grumpy cat spins and zooms on keypress
const img = document.querySelector('.img');

window.addEventListener('keypress', function (event) {
  img.classList.toggle('spin');
});

// random meaningful letters that you dont understand is looped out when scrolling. A grumpy cat is also flying by on scroll.
const signs = ['德', '家', '安', '春'];
const javaSign = document.querySelector('h3');

window.addEventListener('scroll', function (event) {
  signs.forEach((sign) => (javaSign.textContent += sign));
  javaflyingGrumpy.classList.add('flying');
});

// mysterious music is played if you manage to press the flying grumpycat before it passes.
const music = document.querySelector('.mysteriousMusic');

javaflyingGrumpy.addEventListener('click', (event) => {
  music.play();
});
