import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLocalStorage = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (params) => {
    setShowFinished(!showFinished)
  }
  
  
  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    console.log(todos);
    saveToLocalStorage();
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {
    // console.log(e, e.target);
    let id = e.target.name;
    // console.log(`The id is ${id}`);
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    // console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    console.log(newTodos);
    saveToLocalStorage();
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item=>item.id === id)
    setTodo(t[0].todo)
    handleDelete(e, id);
    saveToLocalStorage();
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos)
    saveToLocalStorage();
  }

  return (
    <>
      <Navbar />
      <div className="md:container mx-3 bg-emerald-100 md:mx-auto my-5 rounded-xl p-5 min-h-[80vh] md:w-[35%]">

        <h1 className='font-bold text-center text-2xl'>iTask - Manage todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-xl font-bold'>Add a Todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className='bg-amber-50 w-full rounded-full px-5 py-1' />
            <button onClick={handleAdd} disabled={todo.length< 2} className='bg-emerald-800 disabled:bg-emerald-300 text-white hover:bg-green-950 p-4 py-2 text-sm font-bold rounded-full mx-2'>Save</button>
          </div>
        </div>

        <input className='my-4' type="checkbox" id='show' onChange={toggleFinished} checked={showFinished} />
        <label htmlFor='show' className='mx-2'>Show Finished</label><div className="h-[1px] w-[90%] mx-auto bg-black opacity-20 mb-3"></div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
          {todos.map(item=>{
            return (
              (showFinished || !item.isCompleted) &&
              <div key={item.id} className="todo flex justify-between my-3">
                <div className='flex gap-5'>
                  <input type="checkbox" onChange={handleCheckbox} checked={item.isCompleted} name={item.id} />
                  <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full mx-0.5">
                  <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-emerald-800 text-white hover:bg-green-950 p-2 py-1 text-sm font-bold rounded-md mx-1'><FaEdit /></button>
                  <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-emerald-800 text-white hover:bg-green-950 p-2 py-1 text-sm font-bold rounded-md mx-1'><AiFillDelete /></button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default App
