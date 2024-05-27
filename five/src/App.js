import Header from "./component/Header";
import Home from "./component/Home";
import Work from "./component/Work.jsx";
import Timeline from "./component/Timeline.jsx";
import Services from "./component/Services.jsx"
import Testimonial from "./component/Testimonial.jsx"
import Contact from "./component/Contact.jsx"
import Footer from "./component/Footer.jsx"
import { Toaster } from "react-hot-toast";

function App() {  
  return( 
  <>
  <Header/>
  <Home/>
  <Work/>
  <Timeline />
  <Services />
  <Testimonial />
  <Contact />
  <Toaster />
  <Footer />
  </>
  ); 
}

export default App;
