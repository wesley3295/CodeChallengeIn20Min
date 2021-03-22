import BookList from './components/BookList';
import BookForm from './components/BookForm';
import {useState} from 'react'
function App() {

const [books,setBooks]=useState([
  {title: "Enoch is Dope",
  author: "2slice and Wes",
  }
])

 const addBook=(props)=>{
console.log(props)
setBooks([...books,props])
}
  return (
    <div className="App">
      <BookForm addBook={addBook}/>
      <BookList  books={books}/>
    </div>
  );
}

export default App;
