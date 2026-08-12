import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import db from '../db'

function AddContact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const contactsCollection = collection(db, 'contacts')

    addDoc(contactsCollection, {
      firstName: firstName,
      lastName: lastName,
      email: email
    })
      .then((document) => {
        navigate(`/contacts/${document.id}`)
      })
  }

  return (
    <div className="form-page">
      <div className="form-card">

        <Link to="/" className="back-link">
          ← Back to Contacts
        </Link>

        <h1>Add Contact</h1>

        <p className="form-subtitle">
          Create a new contact.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="firstName">
              First Name
            </label>

            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(event) =>
                setFirstName(event.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Last Name
            </label>

            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(event) =>
                setLastName(event.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />
          </div>

          <div className="form-actions">

            <Link
              to="/"
              className="secondary-button"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="primary-button"
            >
              Add Contact
            </button>

          </div>

        </form>

      </div>
    </div>
  )
}

export default AddContact