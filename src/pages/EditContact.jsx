import { useEffect, useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { Link, useNavigate, useParams } from 'react-router-dom'
import db from '../db'

function EditContact() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDoc(doc(db, 'contacts', id))
      .then((document) => {
        if (document.exists()) {
          const contactData = document.data()

          setFirstName(contactData.firstName)
          setLastName(contactData.lastName)
          setEmail(contactData.email)

          setLoading(false)
        } else {
          navigate('/')
        }
      })
  }, [id])

  function handleSubmit(event) {
    event.preventDefault()

    updateDoc(doc(db, 'contacts', id), {
      firstName: firstName,
      lastName: lastName,
      email: email
    })
      .then(() => {
        navigate(`/contacts/${id}`)
      })
  }

  if (loading) {
    return (
      <div className="form-page">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="form-page">
      <div className="form-card">

        <Link
          to={`/contacts/${id}`}
          className="back-link"
        >
          ← Back to Contact
        </Link>

        <h1>Edit Contact</h1>

        <p className="form-subtitle">
          Update the contact information.
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
              to={`/contacts/${id}`}
              className="secondary-button"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="primary-button"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  )
}

export default EditContact