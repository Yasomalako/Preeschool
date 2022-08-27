
import{ Home,ContactUs,Ptc,Teacher,Grades,PagenotFound } from "./componentes/pages"
import React from "react";
import { Route,Routes } from "react-router-dom";
export 
function Routing() {
  return (
    <div className="router">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="teacher" element={<Teacher/>}/>
      <Route path="grades" element={<Grades/>}/>
      <Route path="ptc" element={<Ptc/>}/>
      <Route path="contactus" element={<ContactUs/>}/>
      <Route path="*" element={<PagenotFound/>}/>
     </Routes>
    </div>
  );
};

export default Routing;
