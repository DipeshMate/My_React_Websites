import React ,{useRef}from 'react'
import {animate, motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronBarDown} from 'react-icons/bs';
import me from "../stuffs/logo2.png";


const Home = () => {

  const clientcount = useRef(null);
  const projectcount = useRef(null);

  //method 1: in single function
  const animationsCount = (key)=>{
    animate(0,key==="Client"?100:500,{
      duration:1,
      onUpdate:(v)=>(key==="Client"? clientcount.current.textContent = v.toFixed() : projectcount.current.textContent = v.toFixed())
    })
  }

  //method 2: in individual function 

  // const animationClientCount = () =>{
  //   animate(0,100,{duration:1,onUpdate:(v)=>clientcount.current.textContent = v.toFixed()})
  // }
  // const animationProjectCount = ()=>{
  //   animate(0,500,{duration:1,onUpdate:(v)=>projectcount.current.textContent = v.toFixed()})
  // }

  const animation2name = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return ( 
  
  <div id="home">
      <section>
          <div>
            <motion.h1 {...animation2name.h1}>
              Hi i Am <br/>Dipesh Mate
            </motion.h1>
            <Typewriter options ={{
              strings: ["A Developer","A Designer","A Quick learner"],
              autoStart:true,
              loop:true,
              cursor:"",
              delay: 75,
              wrapperClassName:"typewriterpara",
            }} />
          
          <div>
          <a href="mailto:dipeshmate17@gmail.com">Hire Me!</a>
          <a href="#work">Projects <BsArrowUpRight /></a>
          </div>


          <article>
            {/* <p>+<motion.span whileInView={animationClientCount} ref={clientcount}></motion.span>
            </p> */}
            <p>+<motion.span whileInView={()=>animationsCount("Client")} ref={clientcount}>100</motion.span></p>
            <span>Clients WorldWide</span>
          </article>

          <aside>
          <article>
            {/* <p>+<motion.span whileInView={animationProjectCount} ref={projectcount}></motion.span>
            </p> */}
            <p>+<motion.span whileInView={()=>animationsCount("Project")} ref={projectcount}>500</motion.span></p>

            <span>Project Work</span>
          </article>
         
          <article data-special>
          <p>contact</p>
          <span>work.dipesh24@gmail.com</span>
          </article>
          </aside>
          </div>
      </section>
      
      <section>
        <img src={me} alt="Dipesh" />
      </section>
      <BsChevronBarDown />
    </div>
  )
}

export default Home
