import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import imagem from "./images/joao.jpg";



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
            <div className="div1">
                <img src={imagem} className="imagem1"/>
                <p className="nomes">{medico.M1nome}</p>
            </div>
            <div className="div2">
                <img src={process.env.PUBLIC_URL + '/Maria.jpg'} className="imagem1"/>
                <p className="nomes">{medico.M2nome}</p>
            </div>
            <div className="div3">
                <img src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5452201.jpg&fm=jpg" className="imagem1"/>
                <p className="nomes">{medico.M3nome}</p>
            </div>
            </div>
        </div>
    )
}
   
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)