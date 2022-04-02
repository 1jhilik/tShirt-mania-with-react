import React from 'react';
import './Cart.css'
const Cart = ({handleRemoveFromCart,cart}) => {
    //Conditional rendaring options
    //1. Element variable
    //2. ternary operator -- condition ? true : false
    //3. && Operator (shorthand)
    //4. || Operator
    let command;
    if(cart.length === 0){
        command = <p>Please Add at least one item!!!!</p>
    }
    else if(cart.length === 1){
        command= <p>Please Add More...</p>
    }
    else{
        command = <p><small>Thanks for adding Item.</small></p>
    }
    return (
        <div>
            <h1>Selected Item : {cart.length}</h1>
            
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p>)
            }
            {cart.length === 0 || <p className='orange'>Yay! you are  buying!!</p>}
            {cart.length === 3 && <div className='orange'>
                    <h3>Trigonal</h3>
                    <p>Tin jon k ki goft diba</p>
                </div>}
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button> }
            {cart.length === 4 && <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;