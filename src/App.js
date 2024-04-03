import Navbar from './components/Navbar';
import Index from './components/Index';
import "./App.css";

function App() {
  return (
    <>
      {/* rendering the navbar component */}
      <Navbar />
      <div className="container-fluid bg-primary-subtle mt-5 pb-1">
        {/* rendering the Index component */}
        <Index />
      </div>
    </>
  );
}

export default App;
