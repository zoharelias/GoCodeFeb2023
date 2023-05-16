const cardsArray = [    
  '&#128525;','&#128525;',
  '&#128561;','&#128561;',
  '&#128564;','&#128564;',
  '&#128520;','&#128520;',
  '&#128545;','&#128545;',
  '&#129313;','&#129313;'];


const cards = document.querySelectorAll('.card');
cards.forEach((card,index)=>{
  console.log(card,index);
  const cardValue = card.children[0].attributes['value'].value;
  card.addEventListener('click',()=>{
      console.log(card.innerHTML);
      console.log('children',card.children);
      console.log(card.children[0].children[0].innerText);
      console.log(cardValue);
      card.children[0].children[0].innerHTML = cardsArray[cardValue];
  });
});

