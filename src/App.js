import React from 'react';
import './App.css';
import List from './List';
import InputWithLabel from './InputWithLabel';
import InputBox from './InputBox';

const peopleReducer = (state, action) => {
  switch(action.type){
    case 'PEOPLE_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError:false
      }    
    case 'PEOPLE_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError:false,
        data: action.payload
      }      
    case 'PEOPLE_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError:true,
      }          
    case 'REMOVE_PERSON':
      return{
        ...state,
        data: state.data.filter((person) => action.payload.codigo !== person.codigo)
      } 
    case 'INSERT_PERSON':
      return{
        ...state,
        data: state.data.concat(action.payload)  
      }      
          
    default:
      throw new Error()
  }
}

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

function App() {

  const [people, dispatchPeople] = React.useReducer(peopleReducer, {data:[], isLoading:false, isError:false} )

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
  )



  React.useEffect(() => {
    try {
      dispatchPeople({type:'PEOPLE_FETCH_INIT'})

      fetch(`${API_ENDPOINT}react`)
      .then((response) => response.json())
      .then((result) => {

        dispatchPeople({
          type: 'PEOPLE_FETCH_SUCCESS',
          payload: result.hits,
        })

      });
    } catch (error) {
        dispatchPeople({type: 'PEOPLE_FETCH_FAILURE'})
    }
  // eslint-disable-next-line
  }, [])





  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const deleteItem = (item) => {
    dispatchPeople({
      type: 'REMOVE_PERSON',
      payload: item,
    })
    
  }

  const addItem = (item) => {
    dispatchPeople({
      type: 'INSERT_PERSON',
      payload: item,
    })

  }

const searchedPeople = people.data.filter((person) => person.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="App">

        <InputWithLabel 
          id="search"
          type="text"
          value={searchTerm}
          onInputChange={handleSearch}
        >
          Search:
        </InputWithLabel>
        <hr/>

        {people.isError && <p>Something wrog...</p>}
        {people.isLoading? <h2>Loading...</h2> : <List lista={searchedPeople} onDelete={deleteItem}/>}
        <br/>
        <hr/>
        <InputBox onAdd={addItem}/>

    </div>
  );



}

export default App;
