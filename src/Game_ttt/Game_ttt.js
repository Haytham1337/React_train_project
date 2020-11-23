import React from 'react';
import './Game_ttt.css';


class Game_ttt extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            condition : "X"

        }
        this.winLine = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
    }
    clickHandler = e => {
        let data = e.target.getAttribute('data');
        if (this.state.squares[data]===null){
            this.state.squares[data] = this.state.condition;
            if(this.state.condition==="X"){
                this.setState({condition:"0"})
            }
            else {
                this.setState({condition:"X"})
            }
        }
        else{
            alert("You cant place twice")
        }
  
        
        console.log(this.state.squares)
        this.winCheck();

    }
    winCheck = ()=>{
        let player = this.state.condition;
        
        for(let i =0;i<8;i++){
            let line = this.winLine[i];
            if(this.state.squares[line[0]]===player&&this.state.squares[line[1]]===player&&this.state.squares[line[2]]===player){
               setTimeout(alert( player +" WINNER!"),500);
               setTimeout(()=>{
                this.state.squares.fill(null);
                console.log(this.state.squares)
            },600); 
            }
        }

    }

    changeCondition = ()=>{
        if (this.state.condition==="X"){
            this.setState({condition:"0"})
        }
        else {
            this.setState({condition:"X"})
        }
    }
    resetSquares = () =>{
        setTimeout(()=>{
            this.state.squares.fill(null);
            console.log(this.state.squares)
        },100);

    }


    render() {
        return(
            
            <div className="game-wrapper">
                <div>
                    <h1 className="game_name">Крестики - нолики</h1>
                </div>
                <div className="cross">
                    <div className="c-grid" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
                    <div className="c-grid" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
                    <div className="c-grid" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
                    <div className="c-grid" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
                    <div className="c-grid" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
                    <div className="c-grid" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
                    <div className="c-grid" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
                    <div className="c-grid" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
                    <div className="c-grid" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
                </div>
                <div className="btn_wrapper">
                <div className="btn" onClick = {this.resetSquares}>Reset</div>
                <div className = "btn" onClick={this.changeCondition}>{this.state.condition}</div>
                </div>
                

            </div>
        )};

};


export default Game_ttt;