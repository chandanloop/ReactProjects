import React, {useEffect, useState} from "react";
import "../app.css";

function Blog(){
    const [blogs, setBlogs] = useState([{
        title:'',
        content:''
    }])

    useEffect(() => {
        fetch("/blogs").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setBlogs(jsonRes));
    })

    return(
        <div className="container">
            <h1>all blogs</h1>
            <table id="tableOfBlog">
            {blogs.map(blogg =>
            <tr id="rowOfBlog">
                <td id="card_title">{blogg.title}</td>
                <td id="card_content">{blogg.content}</td>
            </tr>
            )}
            </table>
        </div>
    );

    // return(
    //     <div className="container">
    //         <h1>all blogs</h1>
    //         {blogs.map(blogg =>
    //             <div id="card">
    //             <div id="card_title"><h1>{blogg.title}</h1></div>
    //             <div id="card_content"><p>{blogg.content}</p></div>
    //             </div>
    //         )}
    //     </div>
    // );
}
export default Blog;