import styles from './Input.module.css';

const Input = ({text, handleText}) => {
    return (
        <div>
            <input type="text" value = {text} onChange={(e) => handleText(e)} 
            className = {styles.input}></input>
        </div>
    )
}

export default Input;