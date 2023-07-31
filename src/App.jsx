// import { ClerkProvider } from "@clerk/clerk-react";

import {Navbar, Home, About, Teacher, Contact, Courses,Footer} from './components/index'
// if (!import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }


// const clerkPubKey = import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
function App() {
  return (
      <div className='font-Poppins bg-Solitude'>
        <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
      </div>    
  )
}

export default App
