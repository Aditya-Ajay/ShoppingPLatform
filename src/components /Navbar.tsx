import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface Prop {
    product : any[] 
    setProduct : React.Dispatch<React.SetStateAction<any[]>>
    itemCount : Record<number, number>
    setitemCount : React.Dispatch<React.SetStateAction<Record<number, number>>>
  
}
const Navbar  = ({product , setProduct , itemCount ,setitemCount } : Prop) => {
   
   const handleCart = ()=>{
    for(let key in itemCount) {
        let  a =    console.log(itemCount[key])
        }
   } 
  return (
    <Box boxShadow='2xl' p='6' rounded='md' bg='white'>
              <nav>
                 <div>
                <Link to="/" className='nav-component'>STORE</Link>
                
                <span className="material-symbols-outlined cart" >
add_shopping_cart
<span style={{color : "white" , position : "absolute" , bottom:"35px" , left :"30px" , fontSize :"1rem"}}>0</span>

</span>







                 </div>
              </nav>
    </Box>
  )
}

export default Navbar