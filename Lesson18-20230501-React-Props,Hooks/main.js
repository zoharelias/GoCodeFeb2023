//no JSX
const MyElement = React.createElement(
  'div',
  {
    onClick: () => alert('hi'),
  },
  'Click me'
);
//ReactDOM.render(MyElement, document.getElementById('app'));


//JSX
const SimpleElement = () => <div onClick={() => alert('Hi!!')}>Click Me!</div>

const SimpleElement2 = () => {
  return(
    <div onClick={
        () => alert('Hi!!')}>Click Me!
    </div>
  )
}
//ReactDOM.render(<SimpleElement2 />, document.getElementById('app'));

const changeBG = (myColor)=>{
  console.log('click');
  document.body.style.backgroundColor = myColor;
  console.log('document.body.style.backgroundColor',document.body.style.backgroundColor);
}


const Button8 = () => { 
  return(
    <button
      className = 'button-8'
      onClick = {() => changeBG('white')}
      onMouseOver = {() => changeBG('yellow')}
    >
      
    Hi</button>
  )
}

ReactDOM.render(<Button8 />,document.getElementById('app'));


const SelectColors = () => {
  return(
    <div>
    <div>Please selct a color:</div>
    <select 
      onChange = {
        ()=> 
        {
          const myColor = document.querySelector('select').value;
          changeBG(myColor);
        }
      }
    >
      <option>white</option>
      <option>red</option>
      <option>green</option>
      <option>blue</option>
      <option>purple</option>
    </select>
    </div>
  )
}
ReactDOM.render(<SelectColors />,document.getElementById('app'));

const ColorsList = () =>{
  const changeTextColor = (color) =>{
    const liElements = document.querySelectorAll('li');
    liElements.forEach((element)=>{
      element.style.color = color;
    });
  }
  const colors = ['white','blue','green','yellow','gray','purple'];
  const listOfColors = colors.map((color)=>{
    return <li
      onClick = {()=>{
        changeTextColor('black');
        changeBG(color);
      }}
      onMouseOver = {
        ()=>{
          changeTextColor(color);
        }
      }
    >{color}</li>;
  });
  return(
    <ol>{listOfColors}</ol>
  )
}


const Frameworks = () =>{
  const getSelectedFramework = () =>{
    const imgDiv = document.querySelector('.image-container');
    const selectedFramework = document.querySelector('input[name=fav_framework]:checked');
    const fileName = `url('${selectedFramework.value}.png')`;
    imgDiv.style.backgroundImage = fileName;

  }
  return (
    <div>
      <div>Select a framework:</div>
      <div>
        <input type="radio" name="fav_framework" id="Angular" value="Angular" onClick={()=>{getSelectedFramework()}}></input>
        <label for='Angular'>Angular</label>
      </div>
      <div>
        <input type="radio" name="fav_framework" id="React" value="React" onClick={()=>{getSelectedFramework()}}></input>
        <label for='React'>React</label>
      </div>
      <div>
        <input type="radio" name="fav_framework" id = "Vue" value="Vue" onClick={()=>{getSelectedFramework()}}></input>
        <label for='Vue'>Vue</label>

      </div>
      <div className= 'image-container'></div>
    </div>
  )
}


const Links = () => {
  const showUrl = (myUrl) => {
    const urlDiv = document.querySelector('.url');
    urlDiv.innerText = myUrl;
  }
  const topics = [
    {name: 'HTML', url:'https://www.w3schools.com/html/'},
    {name: 'CSS', url:'https://css-tricks.com/'},
    {name: 'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    {name: 'GIT', url:'https://git-scm.com/'},
    {name: 'DOM', url:'https://www.w3.org/TR/REC-DOM-Level-1/cover.html'},
    {name: 'ES6', url:'http://es6-features.org/#Constants'},
    {name: 'React', url:'https://react.dev/'},
  ];
  const listOfLinks = topics.map((topic)=>{
    return <div><a
      onMouseOver = { ()=>{ showUrl(topic.url); }  }
      href={topic.url}
    >{topic.name}</a></div>;
  });
  return(
    <div>
      <div>Links:</div>
      <div>{listOfLinks}</div>
      <div className='url'></div>
    </div>
  )

}


const Main = ()=>{
  return(
    <div className='main'>
      <div><Button8 /></div>
      <div><SelectColors /></div>
      <div><ColorsList /></div>
      <div><Frameworks /></div>
      <div><Links /></div>
    </div>
  )
}

ReactDOM.render(<Main />,document.getElementById('app'));
