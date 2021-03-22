import React, {useState}  from 'react'
const BookForm = ({addBook}) => {
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    
const handleSubmit =(e)=>{
    e.preventDefault()
    addBook({title,author})
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
           <input label="Title" onChange={(e)=>setTitle(e.target.value)}/> 
           <input label="Author" onChange={(e)=>setAuthor(e.target.value)}/> 
           <button>Submit</button>
           </form>
        </div>
    )
}

export default BookForm
