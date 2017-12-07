import v4 from 'node-uuid'

const fakeDatabase = {
  todos:[
    {
      id : v4(),
      text : "Hello",
      completed: false
    },
    {
      id : v4(),
      text : "World",
      completed: false
    },
    {
      id : v4(),
      text : "Hey",
      completed: false
    },
    {
      id : v4(),
      text : "Hola",
      completed: false
    },
  ]
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchTodos  = (filter ) => delay(500).then(()=>{
  switch(filter){
    case 'all':
      return fakeDatabase.todos
    case 'active':
      return fakeDatabase.todos.filter(todo =>! todo.completed)
    case 'completed':
      return fakeDatabase.todos.filter(todo => todo.completed)
    default:
      throw new Error(`Unkown filter: ${filter}`)

  }
})

export default fetchTodos;