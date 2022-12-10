
import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from "./components/App";
import Home from './components/Home.jsx';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(

<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/home" element={<Home />}/>
  </Routes>
</BrowserRouter>
    

);
