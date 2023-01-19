import React , {createContext } from "react"

interface ContextProp {
    isModal : boolean 
}

export const ModalContext = createContext<ContextProp>({
       isModal : false
})

const ModalProvider :React.FC <{children: React.ReactNode}> =  ({children})=>{
    const state ={
        isModal : false
    }
    return (
        <ModalContext.Provider value={state}>
            {children}

        </ModalContext.Provider>

    )
}

export default ModalProvider

