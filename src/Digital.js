import React, { Fragment, Consumer } from 'react'
import MyContext from './MyContext'
const Digital = () => (
    <MyContext.Consumer>
        {context => (
            <Fragment>
                <h4>Digital:</h4>
                {context.digitals.map((item , index) => (
                        <Digitals
                            key={index}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            // incrementPrice={() => context.incrementPrice(carID)}
                            // decrementPrice={() => context.decrementPrice(carID)}
                        />
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
);

const Digitals = props => (
    <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        {/* <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button> */}
    </Fragment>
);

export default Digital;
