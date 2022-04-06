import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

let medico = {
    M1nome: "José da Silva",
    M2nome: "Maria da Silva",
    M3nome: "Jaqueline Mendes"
};
const estilo1 = {
    margin:'auto',
    width: 768, 
    height: 320, 
    backgroundColor: '#DCDCDC', 
    padding: 12,
    borderStyle: 'solid', 
    borderColor: '#000000', 
    borderRadius: 8
};

const App = () => {
    return(
        <div style={estilo1}>   
         <label htmlFor="nome" style={{display: 'block', marginBottom: 4, marginLeft: 290}}> Profissionais de saúde</label>  
            <div style={{marginTop: 25, height: 250,  width: 745, borderStyle: 'solid', borderColor: '#CCCCCC', borderRadius: 8}}>
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div3"></div>
            </div>
        </div>
    )
}
   
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)