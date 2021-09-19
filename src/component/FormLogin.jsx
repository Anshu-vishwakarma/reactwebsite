import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
const FormLogin = () => {
    const [name,setName]=useState("");
    const [all,setAll]=useState([]);
    const submitform=(e)=>{
        e.preventDefault();
        const newdata={name};
        setAll([...all,newdata]);
           setName(" ")
    } 
    
    return (
        <div className="containar">
        <form action="" onSubmit={submitform}>
            <div className="st">
                <label htmlFor="name"><h1 id="txt">Enter your Name</h1></label><br/>
                {/* <input type="text" name="name" id="name" key="1" value={name}
                onChange={(e)=>setName(e.target.value)} /> */}

<p>
	<span class="input">
		<input type="text" placeholder="Enter any name"  name="name" id="name" key="1" value={name}  onChange={(e)=>setName(e.target.value)} />
		<span></span>	
	</span>
</p>

            </div>
            <br/>
            <div className="st"> <Button variant="danger" color="danger"  type="submit" className="btn-grad"> Click To Add</Button></div>
            
        </form>
        <div className="st" id="s" >
       <p >{name}</p>
      {
          all.map((a)=>{
              const {name}=a;
              return(
               <p  >  <span id="a">{name}</span> </p>
              )
          })
      }
         </div>  
        </div>
    )
}

export default FormLogin
