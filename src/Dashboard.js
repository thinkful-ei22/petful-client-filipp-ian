import React from 'react';
import Pet from './components/Pet';
import Welcome from './components/welcome'
import {connect} from 'react-redux';
import { fetchCat } from './actions/cat';
import { fetchDog } from './actions/dog';
import "./Dashboard.css";


export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }

    render() {
            return (
                <div className="dashboard row">
                    <Welcome />
                    <Pet petToAdopt={this.props.cat} animal="cat"/>
                    <Pet petToAdopt={this.props.dog} animal="dog"/>
                </div>
            );
        }
}

const mapStateToProps = state => ({
    cat: state.cat.data,
    dog: state.dog.data
});

export default connect(mapStateToProps)(Dashboard);

