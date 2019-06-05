import React from 'react';

type Props = {
    history?: any;
}

export default class About extends React.Component <Props> {

    constructor(props : Props) {
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    changePage() {
        console.log("Witaj")
        this.props.history.push('/');
    }



 public render(){
    return (
    <div className="container">
        <h1>About</h1>
        <button className="AboutBtn" onClick={this.changePage}>
        </button>
        </div>
        );
    }
}

