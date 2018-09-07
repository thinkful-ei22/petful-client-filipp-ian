import React from 'react';
import Pet from './components/Pet';
import {connect} from 'react-redux';
import { fetchCat } from './actions/cat';
import { fetchDog } from './actions/dog';


export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }

    render() {
            return (
                <div className="dashboard">
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

