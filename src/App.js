import React, { Component, } from 'react';
import Imagem1 from './imagem/imagem1.png';
import './style.css';


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            botao:false,
            feed:[
                {id: 1, modelo: 'Monitor LED 27" Gamer Curvo', marca: 'Sansung 1920 x 1080 FHD 240 Hz', entrada:'HDMI, DP, Gaync Série CRG50', valor:2830, promocao:2599, parcelado:259},
                {id: 2, modelo: 'Monitor LED 27" Gamer Curvo', marca: 'Sansung 1920 x 1080 FHD 240 Hz', entrada:'HDMI, DP, Gaync Série CRG50',valor:2830, promocao:2599, parcelado:259},
            ]

           
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            botao: !state.botao
        }));
    }

    render(){
        return (
            <div className="App">
                {this.state.feed.map((item) =>{
                    return(
                        <div key={item.id}>
                            <img src={Imagem1} />
                            <p>{item.modelo}</p>
                            <p>{item.marca}</p>
                            <p>{item.entrada}</p>
                            <h4>R${item.valor},00</h4>
                            <h2>R${item.promocao},00</h2>
                            <h5>em até 10X de R${item.parcelado},90</h5>
                            <button onClick={this.handleClick}>
                    {this.state.botao ? "ADICIONAR" : "ADICIONADO"}
                </button>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default App;