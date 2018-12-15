import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const values = serializeForm(e.target, { hash: true})
		if (this.props.onCreateContact) 
			this.props.onCreateContact(values)	
	}
	render() {
		return ( 
			<div>
				<Link className="close-create-contact" to="/">Close</Link>
				<form className="create-contact-form">
				  <ImageInput
					className="create-contact-avatar-input"
					name="avatargUrl"
					maxHeight={64}
					/>
				<div className="create-contact-details">
					<input name="name" type="text" placeholder="Name"/>
					<input name="email" type="text" placeholder="Email"/>
					<button>Add Contact</button>
				</div>
			</form>
			</div>
	  )
	}
}
export default CreateContact;