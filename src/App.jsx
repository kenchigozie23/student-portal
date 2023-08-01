import {
  ClerkProvider,
} from "@clerk/clerk-react";

import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from "./components/index";
// import { Routes, Route} from "react-router-dom";

// if (!import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

// const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY}
    >
        <div className="font-Poppins bg-Solitude">
          <Navbar />
          <Home />
          <About />
          <Courses />
          <Teacher />
          <Contact />
          <Footer />

        </div>
    </ClerkProvider>
  );
}

export default App;
