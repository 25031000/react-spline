import Spline from "@splinetool/react-spline";
import { Fragment, useRef, useEffect} from "react";
import "../styles/App.css";
import { useNavigate } from 'react-router-dom';

export default function App() {

let modal = useRef()
const text = useRef()
const title = useRef()
const btn = useRef()

const navigate = useNavigate()
useEffect(()=> {
  setTimeout(() => {
    text.current.className = 'text';
    title.current.className = 'title';
    btn.current.className = 'btn';
  }, 10000);
}, [])


const handleModal = () => {
  const current = modal.current;
  current.className = "slide";

  setTimeout(() => {
    navigate('/home');
  }, 1500);
};

  return (
    <Fragment>
    <div className="main">
      <Spline className="spline" scene="https://prod.spline.design/ISiD5AtvTzSZAbV0/scene.splinecode" />
      <h2 ref={title}>Big data</h2>
      <p ref={text}>
        Analisis de gigantes masa de datos con el fin de obtener informacion
        valiosa, realizando informes estadisticos y predicciones
      </p>
      <button ref={btn} onClick={handleModal}>Get started</button>
      <div ref={modal} className="modal-cont">.</div>
    </div>
    </Fragment>
  );
}
