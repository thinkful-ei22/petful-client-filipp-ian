import React from 'react';
import {connect} from 'react-redux';
import { adoptCat } from '../actions/cat';
import { adoptDog } from '../actions/dog';


class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petToAdopt: this.props.petToAdopt,
            animal: this.props.animal
        };
    }

    onClick(e) {
      if (e.target.id === "cat"){
          this.props.dispatch(adoptCat());
      } else {
          this.props.dispatch(adoptDog());
      }
    }

    render() {
        return (
                <section className="cat-section">
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
                        <button type="button" id={this.props.animal} onClick={(e) => this.onClick(e)} >Adopt Me!</button>
                    </main>
                </section>
        );
    }
}



export default connect()(Pet);