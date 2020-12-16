
import React, { Component } from  'react';


class AddItem extends Component {
  render() {
    return (
      <div className="additem">
        <h2>Add an item</h2>
        <form className="additem__form">
          <label htmlFor="title">Title:</label>
           <input type="text" name="title" id="title" placeholder="Title"/>
          <label htmlFor="url">Url:</label>
           <input type="text" name="url" id="url" placeholder="url"/>
          <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" placeholder="description"/>
          <label htmlFor="rating">Rating: </label>
              <input
              type="number"
              name="rating"
              id="rating"
              min="1"
              max="5"/>

          <div className="addbookmark__buttons">
            <button>Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddItem;