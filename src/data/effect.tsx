import React from 'react'
 export const data = async(url : string)=>{
            const data = await fetch(url)
            const response = await data.json()
            return response
        }
     


