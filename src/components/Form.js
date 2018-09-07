import React, { Component } from 'react';

class Form extends Component {

  handleSubmit(e){
    e.preventDefault();
    
  }

  render() {
    return (
      <div className="addForm-div">
        <form onSubmit={(e) =>this.handleSubmit(e)}>
          <label htmlFor="animal-name">Name</label>
          <input type="text" name="animalName"/>
          <label htmlFor="animal-sex">Sex</label>
          <select name="animal-sex">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label htmlFor="animal-age">Age</label>
          <input type="number" name="animal-age" />
          <label htmlFor="animal-breed">Breed</label>
          <input type="text" name="animal-breed" />
          <label htmlFor="animal-story">Story</label>
          <textarea type="text" name="animal-story" />
          <label htmlFor="animal-species">Species</label>
          <select name="animal-species">
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
          <label htmlFor="animal-image">Picture URL</label>
          <input type="text" name="animal-image" />

          <button type="submit">
          Submit Form</button>
        </form>
      </div>
    );
  }
}

export default Form;