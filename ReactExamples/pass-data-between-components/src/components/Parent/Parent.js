import React from 'react'
import Child from '../Child/Child';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
//import '../App.css';
import '../../App.css';

export default function Parent() {
    const [data, setData] = useState('');
  
    const parentToChild = () => {
      setData("This is data from Parent Component to the Child Component.");
    }

    const childToParent = () => {
   
    }

    return (
      <div className="App">
        <Child parentToChild={data} childToParent={childToParent}/>
        
        <div>
          <Button primary onClick={() => parentToChild()}>Click Parent</Button>
        </div>
      </div>
    )
  }


