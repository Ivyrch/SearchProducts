import styles from "./cards.module.css";

const Card = ({name, type}) => {
    return (
        <div className={styles.card}>
        <p>
            Name: <span>{name}</span>
        </p>
        <p>Tipo: <span> {type}</span> </p>
        </div>
    )
}

export default Card;