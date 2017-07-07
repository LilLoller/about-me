import React from 'react';
import ReactDOM from 'react-dom';


const toDoList = (
  <div>
    <h1>My To Do List</h1>
    <ul>
      <li>Import images</li>
      <li>Inject JS</li>
      <li>Use and learn the components</li>
      <li>Make this entire page a component</li>
    </ul>
  </div>
);

ReactDOM.render(
	toDoList,
	document.getElementById('root')
);
