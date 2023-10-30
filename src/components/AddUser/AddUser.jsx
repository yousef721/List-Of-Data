import Form from '../Form/Form'
import Button from '../Button/Button'
import { useState } from 'react'

const AddUser = ({ addNewUser, closeModal }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
    type: 'boy',
  })

  const inputHandler = (e) => {
    const key = e.target.id
    const value = e.target.value
    setInput((prevState) => ({ ...prevState, [key]: value }))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (
      input.name !== '' &&
      input.age !== '' &&
      input.address !== '' &&
      input.phone !== ''
    ) {
      addNewUser({
        id: Math.floor(Math.random() * 100),
        name: input.name,
        age: input.age,
        address: input.address,
        phone: input.phone,
        type: input.type,
      })
      setInput({
        name: '',
        age: '',
        address: '',
        phone: '',
        type: 'boy',
      })
      closeModal()
    }
  }

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Controller>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={input.name}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Enter Age"
          value={input.age}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter Address"
          value={input.address}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter Phone Number"
          value={input.phone}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="">Gender</label>
        <div
          style={{
            width: '70%',
            display: 'flex',
            justifyContent: 'space-around',
            textAlign: 'center',
          }}>
          <div>
            <input
              type="radio"
              name="gender"
              id="type"
              placeholder="Enter Your Gender"
              onChange={() => setInput({ ...input, type: 'boy' })}
              checked
            />
            <span>Male</span>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="type"
              placeholder="Enter Your Gender"
              onChange={() => setInput({ ...input, type: 'girl' })}
            />
            <span>Female</span>
          </div>
        </div>
      </Form.Controller>
      <Form.Controller>
        <Button
          style={{ margin: 'auto' }}
          type="reset"
          onClick={() =>
            setInput({ name: '', age: '', address: '', phone: '' })
          }>
          Reset
        </Button>
        <Button style={{ margin: 'auto' }} type="submit">
          Save
        </Button>
      </Form.Controller>
    </Form>
  )
}
export default AddUser
