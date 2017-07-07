import React from 'react';
import ReactDOM from 'react-dom';
import './ToDoList.css';

//TODO: Find out how to write function without the double quotes.

export class ToDoList extends React.Component {
  render() {
    return (
    <div>
      <h1>My To Do List</h1>
      <button onClick = {alert}>Say Hi!</button>
      <p id = "demo"></p>
      <ul>
        <li>Import Images</li>
        <li>Inject Javascript</li>
        <li>Use the random "function" somehow</li>
        <li>Use CSS</li>
      </ul>
    </div>
    );
  }
}

const alert = () => {
  document.getElementById("demo").innerHTML = "Hello there!";
};


export default ToDoList;
