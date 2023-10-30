import { useState } from 'react'
import './App.css'
import FilterInput from './components/FilterInput/FilterInput'
import CardList from './components/CardList/CardList'
import Modal from './components/Modal/Modal'
import Button from './components/Button/Button'
import AddUser from './components/AddUser/AddUser'

function App() {
  const [toggleCard, setToggleCard] = useState(true)
  const [filter, setFilter] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [state, setState] = useState([
    {
      id: 1,
      name: 'kareem',
      age: 31,
      address: 'El-shrok',
      phone: '01010987123',
      type: 'boy',
    },
    {
      id: 2,
      name: 'farah',
      age: 24,
      address: 'Obour',
      phone: '01010987234',
      type: 'girl',
    },
    {
      id: 3,
      name: 'ahmed',
      age: 24,
      address: 'Madinty',
      phone: '01010987234',
      type: 'boy',
    },
    {
      id: 4,
      name: 'mariam',
      age: 20,
      address: 'fayesl',
      phone: '01010932123',
      type: 'girl',
    },
  ])

  const addNewUser = (data) => {
    setState([...state, data])
  }

  const deleteHandler = (e, selectId) => {
    setState((prevState) => {
      return prevState.filter((el) => el.id !== selectId)
    })
  }

  const filterName = (name) => {
    setFilter(name)
  }

  const nameHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter))
    }
    return state
  }

  return (
    <>
      <div className="mainContainer">
        <h1>List Of Data</h1>
        <div style={{ display: 'flex', marginBottom: '20px', gap: '10px' }}>
          <Button onClick={() => setToggleCard(!toggleCard)}>
            {toggleCard ? 'Hide Data' : 'Show Data'}
          </Button>
          <Button className="button" onClick={() => setShowModal(true)}>
            New Record
          </Button>
        </div>
        <div className={toggleCard ? 'show' : 'hide'}>
          <FilterInput filtration={filterName} />
          <CardList nameLists={nameHandler()} deleteFunc={deleteHandler} />
        </div>
      </div>
      <Modal
        show={showModal}
        closeModal={() => setShowModal(false)}
        Children={
          <AddUser
            addNewUser={addNewUser}
            closeModal={() => setShowModal(false)}
          />
        }
      />
    </>
  )
}

export default App
