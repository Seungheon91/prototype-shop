import Header from "./components/Header";
import ProtoTypes from "./components/Prototypes";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    
    <AppStateProvider>
      <Header />
      <div className="container">
        <ProtoTypes/>
        <Orders/>
        <Footer/>
      </div>
    </AppStateProvider>
  );
}

export default App;
