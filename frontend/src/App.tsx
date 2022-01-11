import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<br />} />
        <Route path="/form">
          <Route path=":movieId" element={<br />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
