import styles from "../CardsList/CardsList.module.css";

const Card = ({title, price}) => {
    return(
        <li style={{listStyleType: "none", textAlign: "left"}}>
            <div className = {styles.CardWrap}></div>
            <h3 className = {styles.title}>{title}</h3>
            <p className = {styles.price}>{price}</p>
        </li>
    );
}

export default Card;