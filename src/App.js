import React from "react";
// import axios from "axios";
import { BrowserRouter, Route, Routes, Link, redirect } from "react-router-dom";
import Home from "./pages/Home";
import Python from "./pages/ExtraPage";
import Dashboard from "./pages/Dashboard";
import ProfileEdit from "./pages/ProfileEdit";
import LogIn from "./pages/LogIn";
import { UserProvider, useAuth } from "./Context/AuthContext";

let App = () => {
  // const { loggedIn  } = useAuth();
  return (
    <>
      <UserProvider>
        {/* {!loggedIn ? <redirect to="/" /> : null} */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/python" element={<Python />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

//  <Suspense fallback={<Loader />}>
//     <BrowserRouter>
//       <ContextProvider>
//           <App />
//       </ContextProvider>
//     </BrowserRouter>
//   </Suspense>
// </React.StrictMode>

export default App;
