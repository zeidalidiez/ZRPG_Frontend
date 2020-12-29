import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApiContext from '../ApiContext';
import { API_ENDPOINT } from '../config';

export default class Book extends React.Component {
	static defaultProps = {
		onDeleteBook: () => {}
	};
	static contextType = ApiContext;

	handleClickDelete = (e) => {
		e.preventDefault();
		const titleid = this.props.id;

		fetch(`${API_ENDPOINT}/books/${titleid}`, {
			method: 'DELETE'
		})
			.then(() => {
				this.context.deleteTitle(titleid);
				// allow parent to perform extra behaviour
				this.props.onDeleteBook(titleid);
			})
			.catch((error) => {
				console.error({ error });
			});
	};

	render() {
		const { titlename, id } = this.props;
		return (
			<div className='Book'>
				<h2 className='Book__title'>
					<Link to={`/books/${id}`}>{titlename}</Link>
				</h2>
				<button
					className='title__delete'
					type='button'
					onClick={this.handleClickDelete}>
					<FontAwesomeIcon icon='trash-alt' /> remove
				</button>
			</div>
		);
	}
}
