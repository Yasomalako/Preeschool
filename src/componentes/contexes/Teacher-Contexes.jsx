
import TeacheresContext from "../../services/perantes.service";
import { createContext,useState,useEffect } from "react";
const teacherContext = createContext()
export default  function TeacherProvider({Children}) {
  const[teachers,setTeacher]= useState([])
  useEffect(()=>{
    TeacheresContext().then(res=> setTeacher(res))
  },[])
  return (
    <div className="contexes">
      <h1>contexes</h1>
        <teacherContext.Provider value={{teacher,setTeacher}}>
          {Children}
        </teacherContext.Provider>
    </div>
  );
};


