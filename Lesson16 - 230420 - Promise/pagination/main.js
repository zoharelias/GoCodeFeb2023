const btn3 = document.querySelector('.btn3');
const btn32 = document.querySelector('.btn32');
const ex0userDiv = document.querySelector('.excercise0user');
const ex1TodosDiv = document.querySelector('.excercise1Totos');
const ex2UsersDiv = document.querySelector('.excercise2Users');
const ex3catsDiv = document.querySelector('.excercise3cats');
const ex4catsDiv = document.querySelector('.excercise4cats');
const dropDown = document.querySelector('.select');


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

btn3.addEventListener('click', ()=>{getCatImages(1)});
btn32.addEventListener('click', ()=>{getCatImages(2)});





