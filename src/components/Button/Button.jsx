import style from './Button.module.css'

const Button = (props) => {
  return (
    <button
      className={style.button}
      style={props.style}
      type={`${props.type ? props.type : 'button'}`}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}
export default Button
