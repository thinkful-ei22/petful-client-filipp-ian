import React from 'react';
import {connect} from 'react-redux';
import "./Pet.css";
import { adoptAnimal } from '../actions/animal';


class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petToAdopt: this.props.petToAdopt,
            animal: this.props.animal
        };
    }

    onClick(e) {
        console.log(e.target.id)
        this.props.dispatch(adoptAnimal(e.target.id))
    }

    render() {
        return (
                <section className="animal-section">
                    <header>
                        <h2>{this.props.petToAdopt.name}</h2>
                        <img src={this.props.petToAdopt.imageURL} alt={this.props.petToAdopt.imageDescription}/>
                    </header>
                    <main>
                        <dl>
                            <dt>Sex</dt>
                            <dd>{this.props.petToAdopt.sex}</dd>
                            <dt>Age</dt>
                            <dd>{this.props.petToAdopt.age}</dd>
                            <dt>Breed</dt>
                            <dd>{this.props.petToAdopt.breed}</dd>
                            <dt>Story</dt>
                            <dd>{this.props.petToAdopt.story}</dd>
                        </dl>
                        <button type="button" id={this.props.petToAdopt.species} onClick={(e) => this.onClick(e)} >Adopt Me!</button>
                    </main>
                </section>
        );
    }
}



export default connect()(Pet);