import { useState } from "react"
import Calculadora from "./componentes/Calculadora/Calculadora";
import Tabela from "./componentes/Tabela/Tabela";
import styles from "./Global.css";


function App() {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultadoImc, setResultadoImc] = useState('');
  const [nome, setNome] = useState('');

  const alteraNome = (evento) => {
    setNome(estadoAnterior => {
      return evento.target.value;
    })
  }

  return (
    <div className="container">
      <h1 className="title">Calculadora IMC ReactJS</h1>
      <form className={styles.calculadoraForm}>
            <input className="calculadora-input" type="text" placeholder="digite seu nome" onChange={alteraNome}></input>
            <input className="calculadora-input" type="number" placeholder="digite sua altura em metros" onChange={({ target }) => setAltura(parseFloat(target.value))} />
            <input className="calculadora-input" type="number" placeholder="digite seu peso em kg" onChange={({ target }) => setPeso(parseFloat(target.value))} />
            </form>
      <Calculadora altura={altura} peso={peso} nome={nome} setResultadoImc={setResultadoImc} />
      <div>
        {resultadoImc && <p>{resultadoImc}</p>}
      </div>
      <h2 className="subtitle"> Tabela de Classificação de IMC</h2>
      <Tabela />
    </div>
  );
}

export default App
