import React, { useState } from "react";
import {Redirect} from 'react-router-dom'

export const AddGigTest = () => {

    const [redirect,setRedirect] = useState(false)
    const renderRedirect = () => {
      if (redirect) {
        return <Redirect to='/' />
      }
    }
    
      return (
         <div>
          {renderRedirect()}
          <button onClick={()=>setRedirect(true)}>Redirect</button>
         </div>
      )
    
  }