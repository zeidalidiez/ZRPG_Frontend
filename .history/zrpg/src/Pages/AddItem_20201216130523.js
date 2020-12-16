
import React, { Component } from  'react';


class AddItem extends Component {
  render() {
    return (
      <div className="additem">
        <h2>Add an item</h2>
        <form className="additem__form">
          <label htmlFor="title">Title:</label>
           <input type="text" name="title" id="title" placeholder="Title"/>
          <label htmlFor="linksource">Link/Source:</label>
           <input type="text" name="linksource" id="linksource" placeholder="Link or Source"/>
          <label htmlFor="notes">Notes:</label>
            <textarea name="notes" id="notes" placeholder="notes"/>
          <label htmlFor="goal">Goal: </label>
              <input type="text" name="goal" id="goal" />
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