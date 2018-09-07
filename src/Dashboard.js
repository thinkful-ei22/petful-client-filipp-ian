import React from 'react';
import Pet from './components/Pet';
import Welcome from './components/welcome';
import Form from './components/Form';
import {connect} from 'react-redux';
import "./Dashboard.css";
import { fetchAnimal } from './actions/animal';


export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchAnimal('cat'));
        this.props.dispatch(fetchAnimal('dog'));
    }

    render() {
            return (
                <div className="dashboard row">
                    <Welcome />
                    {/* <Form /> */}
                    <Pet petToAdopt={this.props.cat}/>
                    <Pet petToAdopt={this.props.dog}/>
                </div>
            );
        }
}

const mapStateToProps = state => ({
    cat: state.animal.catData,
    dog: state.animal.dogData
});

export default connect(mapStateToProps)(Dashboard);

