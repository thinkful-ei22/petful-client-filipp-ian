import React from 'react';
import Pet from './components/Pet';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catToAdopt: props.catToAdopt,
            dogToAdopt: props.dogToAdopt
        };
    }

    render() {
        return (
            <div className="dashboard">
                <Pet petToAdopt = {this.props.catToAdopt}/>
                <Pet petToAdopt = {this.props.dogToAdopt}/>
            </div>
        );
    }
}

export default Dashboard;
