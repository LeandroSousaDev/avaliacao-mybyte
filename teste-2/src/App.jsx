import React, { useState } from "react";
import "./App.css"

function App() {
    const [capital, setCapital] = useState("")
    const [taxa, setTaxa] = useState("")
    const [tempo, setTempo] = useState("")
    const [valorFuturo, setValorFuturo] = useState("")
    const [resultado, setResultado] = useState("")

    // Juros Simples
    const calcularJurosSimples = () => {
        const C = parseFloat(capital)
        const i = parseFloat(taxa) / 100 // taxa em %
        const t = parseFloat(tempo)

        const J = C * i * t
        const M = C + J

        setResultado(`J = ${J.toFixed(2)}, M = ${M.toFixed(2)}`);
    };

    // Juros Compostos
    const calcularJurosCompostos = () => {
        const C = parseFloat(capital)
        const i = parseFloat(taxa) / 100
        const t = parseFloat(tempo)

        const M = C * Math.pow(1 + i, t)
        const J = M - C

        setResultado(`J = ${J.toFixed(2)}, M = ${M.toFixed(2)}`)
    };

    // Valor Presente
    const calcularValorPresente = () => {
        const VF = parseFloat(valorFuturo)
        const i = parseFloat(taxa) / 100
        const t = parseFloat(tempo)

        const VP = VF / Math.pow(1 + i, t)

        setResultado(`VP = ${VP.toFixed(2)}`);
    };

    return (
        <div className="formulario">
            <h2>Calculadora Financeira</h2>

            <div className="input">
                <label>Capital Inicial (C): </label>
                <input
                    type="number"
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                />
            </div>

            <div className="input">
                <label>Taxa de Juros (% ao mês): </label>
                <input
                    type="number"
                    value={taxa}
                    onChange={(e) => setTaxa(e.target.value)}
                />
            </div>

            <div className="input">
                <label>Tempo (meses): </label>
                <input
                    type="number"
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)}
                />
            </div>

            <div className="input">
                <label>Valor Futuro (VF): </label>
                <input
                    type="number"
                    value={valorFuturo}
                    onChange={(e) => setValorFuturo(e.target.value)}
                />
            </div>

            <br />
            <div className="buttons">
                <button onClick={calcularJurosSimples}>Calcular Juros Simples</button>
                <button onClick={calcularJurosCompostos}>Calcular Juros Compostos</button>
                <button onClick={calcularValorPresente}>Calcular Valor Presente</button>
            </div>


            <h3>Resultado:</h3>
            <p>{resultado}</p>
        </div>
    );
}

export default App;
