import React from 'react';
import './Notes.css';
import NoteDraw from './NoteDraw';

    


class Notes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                notes: [{id:"1",text:"dasdsa"},]
            }

    }


    addNote =()=> {
        let lon = Object.keys(this.state.notes).length;
        if(this.props.text){
            this.setState( prevState => ({
                notes: [...prevState.notes,  {id: lon, text: this.props.text}]
            }));
        }
    }


    delNote =(e)=> {
        var array = [...this.state.notes]; 
        var index = e;
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({notes: array});
        }
      }

    render(){
        return(
        <div >
                <div className="btnWrapper">
                    <div className="btnStyle" onClick={this.addNote}>ADD</div>
                </div>
            <div className ="NoteWrapper"><NoteDraw notes = {this.state.notes} delNote={this.delNote}/></div>
        </div>

        );
    };


};


export default Notes;