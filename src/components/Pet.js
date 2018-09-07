import React from 'react';


class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petToAdopt: props.petToAdopt
        };
    }

    onClick() {
      console.log('Adopt button has been clicked.');
    }

    render() {
        return (
            <div className="dashboard">
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
                        <button type="button" onClick={() => this.onClick()} >Adopt Me!</button>
                    </main>
                </section>
            </div>
        );
    }
}

export default Pet;