import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import ButtonGradient from './assets/svg/ButtonGradient';
import Button from "./Button";
import Collaboration from './Collaboration';
import Benefits from './Components/Benefits';
import Generative from './Components/Generative';
import Header from './Components/Header';
import LastSection from './Components/LastSection';
import Pricing from './Components/Pricing';
import Service from './Components/Service';
import Hero from './Hero';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (<>
      <Header/>
      <Hero/>
      <Service/>
      <Benefits/>
      <Pricing/>
      </>
  )
}
export default App;
