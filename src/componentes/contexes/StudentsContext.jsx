import { createContext, useState, useEffect } from "react"
import { studentApi } from "../../services/studentes.service"

export const studentesContext = createContext()

export default function StudentProvider({ children }) {
    const [studentes, setStudents] = useState()
    useEffect(() => {
        studentApi().then(res => setStudents(res))
    }, [])
    return (
        <div>
            <studentesContext.Provider value={{ studentes, setStudents }}>
                {children}
            </studentesContext.Provider>
        </div>
    )
}