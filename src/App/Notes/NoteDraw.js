import React from 'react';
import './Notes.css';


class NoteDraw extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
        <div>{this.props.notes.map((item,index)=>{
        return (<div onClick={()=>this.props.delNote(index)} className="Note" order="0">{item.text}</div>)
        })}</div>
        );
    }

};


export default NoteDraw;