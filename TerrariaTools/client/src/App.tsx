import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import ApplicationViews from "./components/ApplicationViews"
import Header from "./components/Header";

//!~ This is where you will store the components/routes you want to render.
function App() {
  return (
    <Router>
      <Header />
      <main id="main-body">
        <ApplicationViews />
      </main>
    </Router>
  )
}

export default App;
