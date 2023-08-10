import "./styles/Globais.css";

// * Importação de componentes
import { Header } from "./components/Header";
import { Container } from "./components/Main";

import { FormsProvider } from "./context/FormContext";

function App() {
  return (
    <FormsProvider>
      <Header />
      <Container />
    </FormsProvider>
  );
}

export default App;
