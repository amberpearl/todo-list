import React, {useState, useEffect} from "react";
import './App.css';

//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  
  //inputText is the actual value, setInputText is the function
  const[inputText, setInputText] = useState(""); //resets everytime something is submitted
  const[todos, setTodos] = useState([]); //array needed
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'incompleted':
        setFilteredTodos(todos.filter(todo => todo.incompleted === true))        
        break;
      default:
        setFilteredTodos(todos); //set them to everything you have so basically not doing anything
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />

      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
