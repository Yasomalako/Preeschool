import { createContext,useState,useEffect } from "react"
import ParentesSerive from "../../services/perantes.service"
const parentesContext = createContext()
export default function PerantesContext({children}){
    const [perantes,setPerantes] = useState()
    useEffect(()=>{
        ParentesSerive().then(res=>setPerantes(res))
    })
  return(
    <div>
     <ParentesSerive.Provider value={{perantes,setPerantes}}>
     {children}
     </ParentesSerive.Provider>
    </div>
  )
}