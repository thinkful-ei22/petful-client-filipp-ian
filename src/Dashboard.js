import React from 'react';


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
                <section className="cat-section">
                    <header>
                        <h2>{this.props.catToAdopt.name}</h2>
                        <img src={this.props.catToAdopt.imageURL} alt={this.props.catToAdopt.imageDescription}/>
                    </header>
                    <main>
                        <dl>
                            <dt>Sex</dt>
                            <dd>{this.props.catToAdopt.sex}</dd>
                            <dt>Age</dt>
                            <dd>{this.props.catToAdopt.age}</dd>
                            <dt>Breed</dt>
                            <dd>{this.props.catToAdopt.breed}</dd>
                            <dt>Story</dt>
                            <dd>{this.props.catToAdopt.story}</dd>
                        </dl>
                        <button type="button">Adopt Me!</button>
                    </main>
                </section>

                <section className="dog-section">
                    <header>
                        <h2>{this.props.dogToAdopt.name}</h2>
                        <img src={this.props.dogToAdopt.imageURL} alt={this.props.dogToAdopt.imageDescription}/>
                    </header>
                    <main>
                        <dl>
                            <dt>Sex</dt>
                            <dd>{this.props.dogToAdopt.sex}</dd>
                            <dt>Age</dt>
                            <dd>{this.props.dogToAdopt.age}</dd>
                            <dt>Breed</dt>
                            <dd>{this.props.dogToAdopt.breed}</dd>
                            <dt>Story</dt>
                            <dd>{this.props.dogToAdopt.story}</dd>
                        </dl>
                        <button type="button">Adopt Me!</button>
                    </main>
                </section>
            </div>
        );
    }
}

export default Dashboard;
