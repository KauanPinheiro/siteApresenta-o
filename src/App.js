
import './App.css';
import Header from './components/Header/Header';
import Sobremin from './components/Sobremin/Sobremim';
import Card from './components/Card/Card';
import Hablidades from './components/Habilidades/Habilidades';
import Contato from './components/Contato/Contato';
import InfoHablidades from './components/InfoHablidades/InfoHablidades';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>
  },
  
  { path: "sobremin",
    element: <Sobremin/>
  },
  {
    path: "meusprojetos",
    element: <Card/>
  },
  {
    path: "habilidades",
    element: <Hablidades/>
  },
  {
    path: "contatos",
    element: <Contato/>
  },
  {
    path: "infoReact",
    element: <InfoHablidades titulo="REACT"/>
  },
  {
    path: "infoJs",
    element: <InfoHablidades titulo="JS"/>
  },
  {
    path: "infoCss",
    element: <InfoHablidades titulo="CSS"/>
  },
  {
    path: "infoHtml",
    element: <InfoHablidades titulo="HTML"/>
  },
  {
    path: "infoDb",
    element: <InfoHablidades titulo="DB"/>
  },
  {
    path: "infoNode",
    element: <InfoHablidades titulo="NODE"/>
  },
  {
    path: "infoPhp",
    element: <InfoHablidades titulo="PHP"/>
  },
])


function App() {
  return (
    <div className="App">
        
        <RouterProvider router={router}/> 
        
    </div>
  );
}

export default App;
