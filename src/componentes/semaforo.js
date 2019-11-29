import React from 'react';
class Semaforo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            semaforo: null, 
        };
    }
    ficarvermelho = () => {
        this.setState({
            semaforo:'vermelho'
        })
    }
    ficaramarelo = () => {
        this.setState({
            semaforo:'amarelo'
        })
    }
    ficarverde  = ()  => {
        this.setState({
            semaforo:'verde'
        })
    }


    render() {
        return(
            <div>
                <p>{this.state.semaforo}</p>
                 <button onClick={this.ficarvermelho}>vermelho</button> 
                 <button onClick={this.ficaramarelo}>amarelo</button>
                 <button onClick={this.ficarverde}>verde</button>
            </div>
        )
    }
}

export default Semaforo;
