import React, { useContext } from 'react'
import { Card, CardBody,Text , Image ,Button, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import {ModalContext} from "../context/Modal/ModalContext"
import { useEffect } from 'react'
import Modal from './Modal'


interface Props {
    product :any[]
    setProduct : React.Dispatch<React.SetStateAction<any[]>>
    loading :boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
     
}

interface Dest {
    id : number ,
    description :string[]
    images :string[]
    price : number[]

}
const Store = ({product , setProduct}:Props) => {
    const[cartCount , setCartCount] = useState<Record<number, boolean>>({});
    const {isModal} = useContext(ModalContext)
    const[className , setClassName] = useState("")
     const [modal ,setModal] = useState(isModal)
     const [buttonState , setButtonState] = useState(false)

     const handleDelete = (id :number) => {
        let Newproduct = product.filter((e:Dest) => e.id !== id)
        setProduct(Newproduct as typeof product)
        }
   

     useEffect(()=>{
        setClassName(modal ? "blur" : "");
     },[modal])


     const handleAddCart = (id:number)=>{
        const foundProduct : Dest | undefined = product.find((e :Dest)=>e.id===id);
        if(foundProduct){
            setCartCount(prevState => {
                return {...prevState, [foundProduct.id]: true};
            });
        }
     }
     const handleRemoveFromCart = (id: number) => {
        setCartCount(prevState => {
            const newCartCount = {...prevState};
            delete newCartCount[id];
            return newCartCount;
        });
    }



   

  return (
      <div>
          
          {/* {modal ?  <Modal modal={modal} setModal={setModal} setProduct={setProduct}/>  : null}
           */}
     
       {product.map((e)=>{
           const {id , description  ,  images , price}:Dest = e
           return (
               
               <div key={id.toString()} style={{display : "inline-block" }} className={className} id="myDIV">
                   
                        <Card sx={{width :"250px"   ,margin :"1rem" , height : "400px" , padding :"2rem" }}   >
                   
 
<CardBody >

<Image src={images[0]} sx={{height :"140px" , marginTop :"-1rem"}}>
      </Image>
      <Text sx={{mt : "1rem"}}>{`Price : $ ${price}`}</Text>

</CardBody>
<Text>{`${description.slice(0,32)}.`}</Text>

{cartCount[id] ? <span style={{marginLeft :"2rem" , marginTop:"1rem"}}>
    <Button  sx={{mr:"3rem"}}>+</Button>
    <Button>-</Button>
    <br />
    <Button color="red.400" sx={{mt:"1rem"}} onClick={()=>handleRemoveFromCart(id)}>REMOVE</Button>
</span> :
<Button sx={{mt:"2rem"}} onClick={()=>handleAddCart(id)}>ADD ITEM  </Button>}

{/* <Button colorScheme='red' sx={{mt:"2rem"}} onClick={()=>{handleDelete(id)}}>REMOVE</Button> */}

</Card>
                   
               </div>
           )
       })}


{/* { product.length >0 ?  <Button  colorScheme='red' onClick={()=>{setModal(!modal)  
    }} >CLEAR ALL </Button> : null} */}

      </div>
       
)
   
}


export default Store