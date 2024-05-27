import React,{useState} from 'react'
import vg from '../stuffs/vg.png'
import toast from 'react-hot-toast';

const Contact = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

//   const[inputs,setInputs] = useState({ name: "", email: "", message: "" });

//   const changeHandler =(e)=>{
//     setInputs({...inputs, [e.target.name]:e.target.value})
//     console.log(inputs)
//   }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name,email,message)
    toast.success("Message Sent");
  }
  return (
    <div id='contact'>
        <section>
            <form onSubmit={submitHandler}>
                <h2>Contact Me</h2>
                <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // name="name"
            // onChange={changeHandler}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // name="email"
            // onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // name="message"
            // onChange={changeHandler}
          />

                <button type='submit'>Send</button>
            </form>
        </section>
        <aside>
            <img src={vg} alt="Graphics"
             />
        </aside>
    </div>
  )
}

export default Contact