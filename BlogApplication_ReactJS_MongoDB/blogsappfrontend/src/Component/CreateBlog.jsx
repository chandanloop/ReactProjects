import React, {useState} from "react";
import axios from "axios";

function CreateBlog(){
    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name] : value
            }            
        })
    }

    function handleClicks(event){
        event.preventDefault();  
        const newBlog = {
            title: input.title,
            content: input.content
        }
        axios.post('http://localhost:3001/create', newBlog)

    }

    return(
        <div className="container">
            <h1>create blog</h1>
            <form>
                <div className="form-group">
                    <input onChange={handleChange} name="title" value={input.title} className="form-control" type="text" placeholder="Blog Name" />
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="Blog Content"></textarea>
                </div>
                <button onClick={handleClicks} className="btn btn-lg btn-info">ADD BLOG</button>

            </form>
        </div>
    );
}

export default CreateBlog;