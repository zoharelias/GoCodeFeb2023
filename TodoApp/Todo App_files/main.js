const isMomHappy = true;

const willGetPhone = new Promise((resolve,reject)=>{
  if(isMomHappy){
    const phone = {
      name: 'Xiaomi',
    };
    resolve(phone);
  } else {
    resone = new Error('Mom is not happy');
    reject(reason);
  }
});


willGetPhone 
.then (fulfilled=>{
  console.log(fulfilled);
})
.catch(Error=>{
  console.log(Error.message);
});


const getData = async () =>{
  try {

    const response = await fetch('https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes');
    const data = await response.json();
    console.log(data);

  } catch(err){
    console.log(err);
  }

}

getData();