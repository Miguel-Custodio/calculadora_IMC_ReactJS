import { useEffect } from "react";

import styles from './Calculadora.module.css';

function Calculadora ({ altura, peso, nome, setResultadoImc}) {
    useEffect(() => {
        if (altura === 0) {
            return;
        }

    const imc = peso / (altura * altura);

    let classificacao = '';
    if (imc < 17) {
        classificacao = "Muito abaixo do peso";
    } else if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Acima do peso";
    } else {
        classificacao = "Obesidade";
    }

    setResultadoImc(`${nome}, o seu IMC é de: ${imc.toFixed(2)}. ${classificacao}.`);
    }, [altura, peso, nome]);

    return (
        <div className={styles.calculadora}>
            
        </div>
    )
}

export default Calculadora