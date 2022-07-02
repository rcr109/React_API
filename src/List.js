import Item from './Item'
import './List.css';

const List = ({lista, onDelete}) => {

    return(
        <table className='tabelagrande'>
            {lista.map((item, index) => (
                <div  key={index}>
                    <Item item={item} index={index} onDelete={onDelete}/>
                </div>
                
            ))}
        </table>
    )
}

export default List