import '../styles/Home.css';
import {useRef, useEffect, Fragment} from 'react'

export default function Home() {

useEffect(()=> {
  blindRef.current.className = "blind";
  document.body.style.overflow = 'visible'; 
}, [])
const blindRef = useRef()


  return(

    <Fragment>
      <div className="container">
      <h2 className="title-one">On the home!!</h2>
      <div ref={blindRef} className="modal-div" ></div>
      </div>
      <section className="section-one">

      </section>
    </Fragment>
    
    
  )
}