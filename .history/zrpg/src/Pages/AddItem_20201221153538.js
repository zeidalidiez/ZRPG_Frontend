import React, { Component } from "react";
import BookForm from "./Pages/BookForm";
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
      .then((note) => {
        this.context.addNote(note);
        this.props.history.push(`/folder/${note.folderid}`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { folders = [] } = this.context;
    return (
      <section className="AddNote">
        <h2>Create a note</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="note-name-input">Name</label>
            <input type="text" id="note-name-input" name="note-name" />
          </div>
          <div className="field">
            <label htmlFor="note-content-input">Content</label>
            <textarea id="note-content-input" name="note-content" />
          </div>
          <div className="field">
            <label htmlFor="note-folder-select">Folder</label>
            <select id="note-folder-select" name="note-folder-id">
              <option value={null}>...</option>
              {folders.map((folder) => (
                <option key={folder.id} value={folder.id}>
                  {folder.foldername}
                </option>
              ))}
            </select>
          </div>
          <div className="buttons">
            <button type="submit">Add note</button>
          </div>
        </NotefulForm>
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