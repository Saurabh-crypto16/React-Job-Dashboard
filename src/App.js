import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DashBoard from "./components/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InterviewQuestions from "./components/InterviewQuestions";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/interview" element={<InterviewQuestions />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
