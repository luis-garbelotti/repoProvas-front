import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/signIn";
import { SignUp } from "./pages/signUp";
import { Disciplines } from "./pages/discipline";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/disciplines" element={<Disciplines />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
