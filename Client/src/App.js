import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { words } from "./static";
function App() {
  return (
    <div className="layout">
      <Header />
      <main>
         {words.content}
      </main>
      <Footer />
    </div>
  );
};

export default App;
