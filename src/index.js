import React from 'react'
import ReactDOM from 'react-dom'

const estilo1 = {
    margin:'auto',
    width: 768, 
    height: 200, 
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
        </div>
    )
}
   
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)