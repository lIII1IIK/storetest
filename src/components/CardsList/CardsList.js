import React from 'react';
import styles from './CardsList.module.css';
import Card from '../Card/Card.js';
import DataCardsList from '../../DataCardsList/DataCardsList.js';

const CardsList = ({filter}) => {

    const initMap = filter === "" ? DataCardsList : DataCardsList.filter((item) => item.title.includes(filter));

    return(
        <ul className={styles.cardsList}>
            {initMap.map((item, index) => (
                    <Card key = {index} title = {item.title} price = {item.price}></Card>
                ))}
        </ul>
    )
}

export default CardsList;