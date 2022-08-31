import './App.css';
import Routing from './Router';
import {BrowserRouter} from 'react-router-dom'
import Header from './componentes/fiteurs/header/Header.component';
import Footer from './componentes/fiteurs/footer/Footer.component';

function App() {
  // useEffect(()=>{
  //   (res=>res.KidesGarden()).then()
  // })
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routing/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
