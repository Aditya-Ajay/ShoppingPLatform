import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface Prop {
    product : any[] 
    setProduct : React.Dispatch<React.SetStateAction<any[]>>
    cartAmount : number
    setCartAmount : React.Dispatch<React.SetStateAction<number>>
}
const Navbar  = ({product , setProduct , cartAmount , setCartAmount} : Prop) => {

  return (
    <Box boxShadow='2xl' p='6' rounded='md' bg='white'>
              <nav>
                 <div>
                <Link to="/" className='nav-component'>STORE</Link>
                
                <span className="material-symbols-outlined cart" >
add_shopping_cart
<span style={{color : "white" , position : "absolute" , bottom:"35px" , left :"30px" , fontSize :"1rem"}}>{cartAmount}</span>

</span>







                 </div>
              </nav>
    </Box>
  )
}

export default Navbar