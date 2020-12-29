import React, { Component } from 'react';
import { API_ENDPOINT } from '../config';

class BookDetail extends Component {
	state = {
		book: {},
		name: '',
		notes: '',
		goal: '',
		linksource: ''
	};

	handleChange = (ev) => this.setState({ [ev.target.name]: ev.target.value });

	componentDidMount() {
		const book_id = this.props.match.params.titleid;

		fetch(`${API_ENDPOINT}/books/${book_id}`)
			.then((res) => res.json())
			.then((book) => this.setState({ book }))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<form className='BookDetail'>
				<br />
				<div className='field'>
					<label htmlFor='title-name'>Title/Book</label>
					<input
						type='text'
						id='title-nameID'
						name='name'
						onChange={this.handleChange}
						value={this.state.book.title}
						required
					/>
				</div>
				<div className='field'>
					<label htmlFor='title-notes'>Notes</label>
					<textarea
						id='title-notesID'
						name='notes'
						onChange={this.handleChange}
						value={this.state.book.notes}
						required
					/>
				</div>
				<div className='field'>
					<label htmlFor='title-goal'>Reading Goal</label>
					<textarea
						id='title-goalID'
						name='goal'
						onChange={this.handleChange}
						value={this.state.book.goal}
					/>
				</div>
				<div className='field'>
					<label htmlFor='title-linksource'>Link or Source</label>
					<textarea
						id='title-linksourceID'
						name='linksource'
						onChange={this.handleChange}
						value={this.state.book.linksource}
					/>
				</div>
				<div className='buttons'>
					<button type='button'>Home</button>
				</div>
				<br />
			</form>
		);
	}
}

export default BookDetail;
