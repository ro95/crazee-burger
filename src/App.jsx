import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/login/OrderPage";
import ErrorPage from "./components/pages/ErrorPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:prenom" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
