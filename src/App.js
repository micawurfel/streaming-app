import "./App.css";
import "./components/Auth/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Auth/Login";

import { Register } from "./components/Auth/Register";

import { AuthProvider } from "./context/authContext";
import { Home } from "./components/Auth/Home";
import { Title } from "./components/Main/Title";
import { Video } from "./components/Main/VideoCard";

const videos = [
  {
    url: "https://www.youtube.com/watch?v=p_TkwNLJn68&t=209s",
    title: "1",
    author: "",
  },
  { url: "asdasdadsasd", title: "2", author: "" },
  { url: "asdasdadsasd", title: "3", author: "" },
  { url: "asdasdadsasd", title: "4", author: "" },
  { url: "asdasdadsasd", title: "5", author: "" },
  { url: "asdasdadsasd", title: "6", author: "" },
];
console.log(videos);

function App() {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/p_TkwNLJn68"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Title title="My Video stremer"></Title>
      {videos.map((v) => {
        return <Video url={v.url} title={v.title}></Video>;
      })}

      {/* <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider> */}
    </div>
  );
}

export default App;
