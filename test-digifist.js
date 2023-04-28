const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const productList = document.querySelector('.product-list');
const productItems = Array.from(document.querySelectorAll('.product-item'));
const welcomeText = "Everyday items, we have something to suit every occasion.";
const subWelcomeText = "At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.";
const welcomeTextElement = document.getElementById('welcomeText');
const subWelcometTextElement = document.getElementById('subWelcomeText');

const bottomAnchor = document.getElementById('bottomAnchor');

welcomeTextElement.textContent = welcomeText;
subWelcometTextElement.textContent = subWelcomeText;


let currentIndex = 0;

const itemWidth = productItems[0].offsetWidth + parseInt(window.getComputedStyle(productItems[0]).marginRight);

function moveListLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = productItems.length - 1;
  }
  const offset = -currentIndex * itemWidth;
  productList.style.transform = `translateX(${offset}px)`;
}


function moveListRight() {
  currentIndex++;
  if (currentIndex >= productItems.length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * itemWidth;
  productList.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', moveListLeft);
nextButton.addEventListener('click', moveListRight);

const image = document.querySelector('.image');
const content = document.querySelector('.content');

content.addEventListener('mousemove', function(event) {
  const xPos = event.clientX / window.innerWidth;
  const yPos = event.clientY / window.innerHeight;

  image.style.transform = `translate(-${xPos * 25}px, -${yPos * 25}px)`;
});

function scrollToBottom() {
  bottomAnchor.scrollIntoView({ behavior: 'smooth' });
}

setTimeout(scrollToBottom, 3000);
