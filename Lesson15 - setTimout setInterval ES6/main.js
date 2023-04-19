const numbers =[1,5,3,5];

const sum = (n1,n2,n3) => n1 + n2 + n3 ;


console.log(sum(1,2,3));
console.log(sum(...numbers));


const person = {
    name: 'dani',
    age: 30,
};

let { name:firstName, age} = person;

console.log(firstName,age);



/*
ES6 Destructuring 

Use destructuring to make this code cleaner 

 
*/

function detectCollision(objects, point) {
    for (let i = 0; i < objects.length; i++) {
      let object = objects[i];
      if (
        point.x >= object.x &&
        point.x <= object.x + object.width &&
        point.y >= object.y &&
        point.y <= object.y + object.height
      )
        return object;
    }
  }
  
  const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 },
  ];


console.log('Collision',detectCollision(myObjects,myObjects[0]));


const detectCollisionArrow = (objects,point) => {
    const {x:pointX, y:pointY, width:pointWidth, height:pointHeight} = point;
    console.log('pointX', pointX,'pointY',pointY, 'pointWidth', pointWidth, 'pointHeight',pointWidth);
    objects.forEach(element => {
        const {x:objectX, y:objectY, width:objectWidth, height:objectHeight} = element;
        console.log('object:', objectX,objectY, objectWidth, objectHeight);
        if(pointX >= objectX &&
           pointX <= objectX + objectWidth &&
           pointY >= objectY && 
           pointY <= objectY + objectHeight 
           ){
            return element;
        } else {
            return 'NONE';
        }
    });
}

function detectCollision2(objects, point) {
    const {x:pointX, y:pointY, width:pointWidth, height:pointHeight} = point;
    console.log('pointX', pointX,'pointY',pointY, 'pointWidth', pointWidth, 'pointHeight',pointWidth);
    objects.forEach(element => {
        const {x:objectX, y:objectY, width:objectWidth, height:objectHeight} = element;
        console.log('object:', objectX,objectY, objectWidth, objectHeight);
        if(pointX >= objectX &&
           pointX <= objectX + objectWidth &&
           pointY >= objectY && 
           pointY <= objectY + objectHeight 
           ){
            return element;
        } else {
            return 'NONE';
        }
    });
  }

console.log('Collision2',detectCollision2(myObjects,myObjects[0]));

const reUlv = detectCollisionArrow(myObjects,myObjects[0]);
console.log(reUlv);
console.log('detectCollisionArrow',detectCollisionArrow(myObjects,myObjects[0]));




function detectCollision3(objects, point) {
    const {x:pointX, y:pointY, width:pointWidth, height:pointHeight} = point;
    for (let i = 0; i < objects.length; i++) {
        const {x:objectX, y:objectY, width:objectWidth, height:objectHeight} = objects[i];
      if (pointX >= objectX &&
        pointX <= objectX + objectWidth &&
        pointY >= objectY && 
        pointY <= objectY + objectHeight 
        )
        {
            return objects[i];
        }
    }
  }
  console.log('Collision3',detectCollision3(myObjects,myObjects[0]));
