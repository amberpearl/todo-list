import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) =>{
  //JS can be added here
  const inputTextHandler = (e) =>{
    // console.log(e.target.value); //tell infor about what just happened
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) =>{
    e.preventDefault(); //prevents the page from refreshing everytime
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
    ]); //install a package for a unique id for prof industry lol
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

    return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" /> 
      <button onClick= {submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Incompleted</option>
        </select>
      </div>
    </form>
    );
};

export default Form;