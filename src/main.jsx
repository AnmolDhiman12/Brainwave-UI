
import { createRoot } from 'react-dom/client'
import  './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Collaboration from './Collaboration';
import Benefits from './Components/Benefits';
import Generative from './Components/Generative';
import Header from './Components/Header';
import LastSection from './Components/LastSection';
import Pricing from './Components/Pricing';
import Service from './Components/Service';
import Hero from './Hero';
import App from './App';
import { Router } from 'react-router';
const app = createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element = {<App/>}>
          <Route path = "/" element = {<Header/>}>
                <Route path="hero" element={<Hero />} />
                <Route path="benefits" element={<Benefits />} />
                <Route path="service" element={<Service/>} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="lastsection" element={<LastSection />} />
            </Route>
        </Route>
    )
);


createRoot(document.getElementById('root')).render(
    <RouterProvider router = {app}/>
)
