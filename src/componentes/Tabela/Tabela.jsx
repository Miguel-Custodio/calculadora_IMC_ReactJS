import React from 'react';
import styles from './Tabela.module.css';

const tabelaIMC = [
    {Faixa: "< 17", classificacao: "Muito abaixo do peso"},
    {Faixa: "17 - 18.4", classificacao: "Abaixo do peso"},
    {Faixa: "18.5 - 24.9", classificacao: "Peso normal"},
    {Faixa: "25 - 29.9", classificacao: "Acima do peso"},
    {Faixa: "30 ou mais", classificacao: "Obesidade"},
];

function Tabela() {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Faixa de IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelaIMC.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Faixa}</td>
                            <td>{item.classificacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabela