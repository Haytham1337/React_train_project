import React from 'react';
import './Notes.css';
import Notes from './Notes';

    


class NoteSave extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            savedText : "",
        }

    }


    textSave = e => {
        this.setState({savedText:e.target.value});
        console.log(this.state.savedText);
    }





    render(){
        return(
            <div className = "Wrapper">
                <textarea onChange={this.textSave}></textarea>
                <Notes text = {this.state.savedText}/>
            </div>
        );
    };


};


export default NoteSave;