import './Item.css';

const Item = ({item, index, onDelete}) => {

    const handleRemoveItem = () => {
      onDelete(item)
    }


    return(

        <tr key={item.objectID}>
            <td className="titulo"><b>Título: </b></td><td className="conteudo">{item.title} </td>            
            <td className="titulo"><b>Criação: </b></td><td className="conteudopequeno">{item.created_at} </td>
            <td className="titulo"><b>Pontos: </b></td><td className="conteudomuitopequeno">{item.points} </td>

            <td><button className='botao' type="button" onClick={handleRemoveItem}> Del</button></td>
        </tr>
    )
}

export default Item