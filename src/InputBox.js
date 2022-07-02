import React from "react"

const InputBox = ({onAdd}) => {
    const [novo, setNovo] = React.useState({codigo: 0, nome: 'rcr', idade: 0})

    const mudouCodigo = (event) => setNovo({...novo, codigo: event.target.value })
    const mudouNome = (event) => setNovo({...novo, nome: event.target.value })
    const mudouIdade = (event) => setNovo({...novo, idade: event.target.value })        

    const handleAdd = () =>{
        onAdd(novo)
    }

    return(
        <div>
            <label htmlFor="codigo"> Código </label>
            <input type="number" id="codigo" onChange={mudouCodigo}/>
            <br/>
            <label htmlFor="nome"> Nome </label>
            <input type="text" id="nome" onChange={mudouNome}/>
            <br/>
            <label htmlFor="idade"> Idade </label>
            <input type="number" id="idade" onChange={mudouIdade}/>    
            <button type="button" onClick={handleAdd}>Inserir</button>                    
        </div>
    )
    
}

export default InputBox