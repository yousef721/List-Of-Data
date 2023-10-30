import styles from './Card.module.css'

const Card = ({ name, age, address, phone, type, id, deleteFunc }) => {
  return (
    <div
      className={styles.cardWrapper}
      style={{ backgroundColor: type === 'girl' ? 'pink' : 'green' }}>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Address: {address}</div>
      <div>Phone: {phone}</div>
      <div
        className={styles.deleteBtn}
        onClick={(event) => deleteFunc(event, id)}>
        x
      </div>
    </div>
  )
}

export default Card
