import { Home, ContactUs, Ptc, Teacher, Grades, PagenotFound } from "./componentes/pages";
import { Route, Routes } from "react-router-dom";
import StudentProvider from "./componentes/contexes/StudentsContext";




function Routing() {
  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="grades" element={<StudentProvider><Grades /></StudentProvider>} />
        <Route path="ptc" element={<Ptc />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </div>
  )
}

export default Routing;
