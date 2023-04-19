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



//destructured

function detectCollisiondestructured(objects, point) {
    const {x:pointX, y:pointY, width:pointWidth, height:pointHeight} = point;
    for (let i = 0; i < objects.length; i++) {
        const {x:objectX, y:objectY, width:objectWidth, height:objectHeight} = objects[i];
      if (pointX >= objectX &&
        pointX <= objectX + objectWidth &&
        pointY >= objectY && 
        pointY <= objectY + objectHeight 
        )
            return objects[i];
    }
  }
  console.log('detectCollisiondestructured',detectCollisiondestructured(myObjects,myObjects[0]));
