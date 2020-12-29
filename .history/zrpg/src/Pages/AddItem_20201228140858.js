import React, { Component } from "react";
import BookForm from "./BookForm";
import ApiContext from "../ApiContext";
import config from "../config";

export default class AddItem extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = ApiContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const newTitle = {
      title: e.target["title-name"].value,
      notes: e.target["title-notes"].value,
      goal: e.target["title-goal"].value,
      linksource: e.target["title-linksource"].value,
    };
    fetch(`${config.API_ENDPOINT}/books`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTitle),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((title) => {
        this.context.addTitle(title);
        console.log(this.props)
        this.props.history.push(`/book/${title.id}`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <section className="AddTitle">
        <h2>Add a Book Title</h2>
        <BookForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="title-name">Title/Book</label>
            <input type="text" id="title-nameID" name="title-name" required/>
          </div>
          <div className="field">
            <label htmlFor="title-notes">Notes</label>
            <textarea id="title-notesID" name="title-notes" required/>
          </div>
          <div className="field">
            <label htmlFor="title-goal">Reading Goal</label>
            <textarea id="title-goalID" name="title-goal" />
          </div>
          <div className="field">
            <label htmlFor="title-linksource">Link or Source</label>
            <textarea id="title-linksourceID" name="title-linksource" />
          </div>
          <div className="buttons">
            <button type="submit">Add note</button>
          </div>
        </BookForm>
      </section>
    );
  }
}


// import React, { Component } from  'react';


// class AddItem extends Component {
//   render() {
//     return (
//       <div className="additem">
//         <h2>Add an item</h2>
//         <form className="additem__form">
//           <label htmlFor="title">Title:</label>
//            <input type="text" name="title" id="title" placeholder="Title"/>
//           <label htmlFor="linksource">Link/Source:</label>
//            <input type="text" name="linksource" id="linksource" placeholder="Link or Source"/>
//           <label htmlFor="notes">Notes:</label>
//             <textarea name="notes" id="notes" placeholder="notes"/>
//           <label htmlFor="goal">Goal: </label>
//               <input type="text" name="goal" id="goal" />
//           <div className="additem__buttons">
//             <button type="submit" >Save Title</button>
//           </div>  
//         </form>
//       </div>
//     );
//   }
// }

// export default AddItem;