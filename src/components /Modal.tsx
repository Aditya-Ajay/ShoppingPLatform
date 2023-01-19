import React from 'react'
import { Card, CardBody } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
interface Prop {
    modal : boolean
    setProduct:React.Dispatch<React.SetStateAction<[]>>
    setModal : React.Dispatch<React.SetStateAction<boolean>>
}


const Modal = ({modal , setProduct , setModal} : Prop) => {
  return (
      <Card sx={{width : "400px" , height : "200px" , position : "fixed" , zIndex : "2" , top :"30%" , left :"30%" }}>
          <CardBody>
              ARE YOU SURE YOU WANT TO DELETE ? 
              <div style={{display : "flex" , marginTop :"3rem"}}>
              <Button color="red" sx={{ml:"3rem" , mr:"6rem"}} onClick={()=>{setModal(!modal)}}>NO</Button>
              <Button color ="blue" onClick={()=>{setProduct([])
               setModal(!modal)
              }
                        
            }>YES</Button>
              </div>
          </CardBody>
      </Card>
    
  )
}

export default Modal