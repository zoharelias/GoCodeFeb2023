//for excercise 0
const btn0 = document.querySelector('.btn0');
const ex0userDiv = document.querySelector('.excercise0user');

//for excercise 1
const btn1 = document.querySelector('.btn1');
const ex1TodosDiv = document.querySelector('.excercise1Totos');

//for excercise 2
const btn2 = document.querySelector('.btn2');
const ex2UsersDiv = document.querySelector('.excercise2Users');

//for excercise 3
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const ex3catsDiv = document.querySelector('.excercise3cats');
const pageNumDiv = document.querySelector('.pageNum');
const pageNumbers = document.querySelectorAll('.pageNumbers');

//for excercise 4
const ex4catsDiv = document.querySelector('.excercise4cats');
const dropDown = document.querySelector('.select');




//Ecercise 0 - single user
const getUser = async () =>{
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const res = data.results[0];
    let dataToShow = '';
    dataToShow = `${res.name.first} ${res.name.last} from ${res.location.city}, ${res.location.country}, ${res.dob.age} years old. `;
    ex0userDiv.innerHTML = dataToShow;
  } catch(err){
    console.log(err);
  }
}

btn0.addEventListener('click', getUser);


//Excercise 1 - Todos
const getTodos = async () =>{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    let dataToShow = '';
    ex1TodosDiv.innerHTML = '';
    const ul = document.createElement('ul');
    data.forEach(element => {
      const li = document.createElement('li');
      li.innerText = element.title;
      if(element.completed){
        li.classList.add('done');
      }
      ul.append(li);
    });
      ex1TodosDiv.append(ul);  
  } catch(err){
    console.log(err);
  }
}

btn1.addEventListener('click', getTodos);


//Ecercise 2 - Users
const getUsers = async () =>{
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    const res = data.data;
    let dataToShow = '';
    ex2UsersDiv.innerHTML = '';
    const usersDiv = document.createElement('div');
    usersDiv.classList.add('excercise2Users');
    res.forEach(user=>{
      const userDiv = document.createElement('div');
      const userImg = document.createElement('img');
      userImg.width = userImg.height = 100;
      userImg.src = user.avatar;
      dataToShow = `<div>${user.first_name} ${user.last_name} ${user.email}</div>`;
      userDiv.innerHTML= dataToShow;
      userDiv.append(userImg);
      usersDiv.append(userDiv);
    });
    ex2UsersDiv.append(usersDiv);
  } catch(err){
    console.log(err);
  }
}

btn2.addEventListener('click', getUsers);

//Ecercise 3 - Cats pagination
let gPageNum = 1; //global variable

pageNumbers.forEach((singleNumber)=>{
  singleNumber.addEventListener('click',(myLink)=>{
    myLink.preventDefault(); //prevent reloading the page
    gPageNum = parseInt(myLink.target.innerText);
    getCatImages(gPageNum);

  });
});

//get the 10 images by pagenum
const getCatImages = async (pageNum) =>{
  try {
    showPageNumbers(pageNum);
    let myParams = new URLSearchParams();
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&page=${pageNum}`
    const response = await fetch(url);
    pageNumDiv.innerText = `Page ${pageNum} of 10`;
    const data = await response.json();
    const res = data.data;
    ex3catsDiv.innerHTML = '';
    const usersDiv = document.createElement('div');
    usersDiv.classList.add('excercise2Users');
    data.forEach(cat=>{
      const userImg = document.createElement('img');
      userImg.width = userImg.height = 100;
      userImg.src = cat.url;
      usersDiv.append(userImg);
    });
    ex3catsDiv.append(usersDiv);
  } catch(err){
    console.log(err);
  }
}

btnPrev.addEventListener('click', ()=>{
  if(gPageNum === 1){
    gPageNum = 1;
  } else {
    gPageNum--;
  }
  getCatImages(gPageNum);
});

btnNext.addEventListener('click', ()=>{
  if(gPageNum === 10){
    gPageNum = 10;
  } else {
    gPageNum++;
  }
  getCatImages(gPageNum);
});


//this function show the numbers of the pages as a pagination
//for example, if page 6 is selected we will see
// 4 5 6 7 8
// and 6 <a> element will be disabled 
const showPageNumbers = (iPageNum) => {
  clearStyleFromA(); //remove the disablement of <a> element from previous page number
  let firstNumber = 1;
  let intPageNum = parseInt(iPageNum);

  if(intPageNum > 3 && intPageNum < 8){
    firstNumber = intPageNum -2;
  } else if (intPageNum <=3) {
    firstNumber = 1;
  } else { // >=8
    firstNumber = 6;
  }
  for(let i=0;i<5;i++){
    let sum = i + firstNumber;
    pageNumbers[i].innerText = sum;
    if(sum === intPageNum){
      pageNumbers[i].classList.add('disabled-link'); //this is the current page so we disable the <a> element from it
    }
  }
}

//clear the disable class
const clearStyleFromA = () =>{
  pageNumbers.forEach(element => {
    element.classList.remove('disabled-link');
  });
}


//Ecercise 4 - Cat Breeads
const getCatBreeds = async () =>{
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const data = await response.json();
    data.forEach(cat=>{
      const option = document.createElement('option');
      option.value = cat.id;
      option.text = cat.name;
      dropDown.append(option);
    })
  } catch(err){
    console.log(err);
  }
}

const getCatBreed = async (breed) =>{
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`);
    const data = await response.json();
    ex4catsDiv.innerHTML = '';
    const catImg = document.createElement('img');
    catImg.width = catImg.height = 100;
    catImg.src = data[0].url;
    ex4catsDiv.append(catImg);
  } catch(err){
    console.log(err);
  }
}


getCatBreeds();

dropDown.addEventListener("change", (option) => {
  const catBreed = option.target.value;
  getCatBreed(catBreed);
});

// selectElement.addEventListener("change", (event) => {
//   const result = document.querySelector(".result");
//   result.textContent = `You like ${event.target.value}`;
// });
