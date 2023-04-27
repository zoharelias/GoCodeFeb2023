const btn0 = document.querySelector('.btn0');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
// const btn3 = document.querySelector('.btn3');
// const btn32 = document.querySelector('.btn32');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const ex0userDiv = document.querySelector('.excercise0user');
const ex1TodosDiv = document.querySelector('.excercise1Totos');
const ex2UsersDiv = document.querySelector('.excercise2Users');
const ex3catsDiv = document.querySelector('.excercise3cats');
const ex4catsDiv = document.querySelector('.excercise4cats');
const dropDown = document.querySelector('.select');
const pageNumDiv = document.querySelector('.pageNum');
let gPageNum = 1; //global

//Ecercise 0
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


//Excercise 1
const getTodos = async () =>{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    let dataToShow = '';
    ex1TodosDiv.innerHTML = '';
    console.log(data);
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


//Ecercise 2
const getUsers = async () =>{
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    const res = data.data;
    let dataToShow = '';
    ex2UsersDiv.innerHTML = '';
    console.log(data);
    console.log(res);
    const usersDiv = document.createElement('div');
    usersDiv.classList.add('excercise2Users');
    res.forEach(user=>{
      const userDiv = document.createElement('div');
      const userImg = document.createElement('img');
      userImg.width = userImg.height = 100;
      userImg.src = user.avatar;
      dataToShow = `<div>${user.first_name} ${user.last_name} ${user.email}</div>`;
      console.log(dataToShow);
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

//Ecercise 3
const getCatImages = async (pageNum) =>{
  try {
    console.log('excercise 3:');
    console.log(pageNum);
    let myParams = new URLSearchParams();
    //params.
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&page=${pageNum}`
    console.log(url);
    const response = await fetch(url);
    pageNumDiv.innerText = pageNum;
    // let params = new URLSearchParams(document.location.search);
    // let name = params.get("limit"); // is the string "Jonathan"
    // 
    const data = await response.json();
    const res = data.data;
    let dataToShow = '';
    ex3catsDiv.innerHTML = '';
    console.log(data);
    console.log(res);
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
    gPageNum =1;
  } else {
    gPageNum--;
  }
  getCatImages(gPageNum);
});

btnNext.addEventListener('click', ()=>{
    gPageNum++;
  getCatImages(gPageNum);
});

//btn3.addEventListener('click', ()=>{getCatImages(1)});
//btn32.addEventListener('click', ()=>{getCatImages(2)});


//Ecercise 4
const getCatBreeds = async () =>{
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const data = await response.json();
    let dataToShow = '';
    console.log(data);
    data.forEach(cat=>{
      const option = document.createElement('option');
      option.value = cat.id;
      option.text = cat.name;
      dropDown.append(option);

    })
    // const usersDiv = document.createElement('div');
    // usersDiv.classList.add('excercise2Users');
    // data.forEach(cat=>{
    //   const userImg = document.createElement('img');
    //   userImg.width = userImg.height = 100;
    //   userImg.src = cat.url;
    //   usersDiv.append(userImg);
    // ex3catsDiv.append(usersDiv);
  } catch(err){
    console.log(err);
  }
}


const getCatBreed = async (breed) =>{
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`);
    const data = await response.json();
    let dataToShow = '';
    ex4catsDiv.innerHTML = '';
    console.log(data);
    // const usersDiv = document.createElement('div');
    // usersDiv.classList.add('excercise2Users');
    // data.forEach(cat=>{
    const catImg = document.createElement('img');
    catImg.width = catImg.height = 100;
    catImg.src = data[0].url;
    //   usersDiv.append(userImg);
    ex4catsDiv.append(catImg);
  } catch(err){
    console.log(err);
  }
}




getCatBreeds();

dropDown.addEventListener("change", (option) => {
  const catBreed = option.target.value;
  console.log(catBreed);
  getCatBreed(catBreed);
});

// selectElement.addEventListener("change", (event) => {
//   const result = document.querySelector(".result");
//   result.textContent = `You like ${event.target.value}`;
// });
