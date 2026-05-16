import { useState } from "react"
import "./Createtodo.css"

export function Createtodo() {
    const [title,setTitle] = useState("")
    const [description,setDescription]= useState("")
    return(
    <div className="inputbox">
        <div>
        <label htmlFor="Title">Title: </label> 
        <input id="Title" type="text" placeholder="e.g: Go to Gym" onChange={(e)=>{
            setTitle(e.target.value)
        }}/> <br />
        </div>
        <div>
        <label htmlFor="Description">Description:</label>
        <input id="Description" type="text" placeholder="e.g: Do 20 pushups" onChange={(e)=>{
            setDescription(e.target.value)
        }}/> <br />
        </div>
        <button onClick={()=>{
            fetch("http://localhost:3000/add_todo",{
                method:"POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(async (res)=>{
                const data=await (res.json())
                alert("Todo has been added")
            })
        }
        }>Add Todo</button>
    </div>
)}