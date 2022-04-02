import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css'
/*context api
*2. set a variable of the context with upperCase
*3. Make sure you export the context to use it in other places
*4. wrap you child content using RingContext.Provider
*5. provide a value
*6. to consume the context from child component
*7. useContext hook and you will you need to pass the context
*/
export const RingContext = createContext('Ring')

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Kada Matir Ring';
    const handleBuyAHouse =() =>{
        const newHouse = house + 1;
        setHouse(newHouse);
    }
   
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
            <h4>GrandPa</h4>
            
            <p>House: {house} <button onClick={handleBuyAHouse}>Buy A House</button></p>
            <section style={{display: 'flex'}}>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </section>
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;