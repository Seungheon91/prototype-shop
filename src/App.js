import Header from "./components/Header";
import ProtoTypes from "./components/Prototypes";
import Orders from "./components/Orders";
import Footer from "./components/Footer";

function App() {
  return (
    
    <>
    <Header />
    <div class="container">
      <ProtoTypes/>
      <Orders/>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
