import React , {Component} from 'react'
import MyContext from './MyContext';

export default class MyProvider extends Component {
    constructor(){
        super();
        this.state = {cars: {
                car001: { name: 'Honda', price: 100 },
                car002: { name: 'BMW', price: 150 },
                car003: { name: 'Mercedes', price: 200 }
            },
            digitals: [
                 { name: 'ml', price: 100 },
                 { name: 'mac', price: 150 },
                 { name: 'comp', price: 200 }
            ]
        };
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    digitals : this.state.digitals,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}