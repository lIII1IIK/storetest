import styles from './Body.module.css';
import CardsList from '../CardsList/CardsList';
import Input from '../Input/Input';
import DataCardsList from '../../DataCardsList/DataCardsList';
import { useState } from 'react';

const Body = () => {

    const [text, setText] = useState("");

    const handleText = (e) => {
      setText(e.target.value);
    }
    return(

        <div className={Body}>
            <Input text={text} handleText={handleText}/>
            <CardsList filter={text}/>
        </div>
    );
}

export default Body;