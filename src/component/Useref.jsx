import React, { useRef, useState } from "react";

function Useref() {
  const data = useRef(null);

  const [name, setName] = useState("");
 
  return (
    <div className="set">
                 <p style={{textAlign:"center" }} id="D">{name}</p> 

         <input type="text" ref={data} />
      <div> 
        <button   className="btn-grad" onClick={()=>{
          setName(data.current.value);
          setName(" ");
        
        }}>h</button>
     </div> 
     </div>
  );
}

export default Useref;
