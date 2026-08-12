import { useEffect, useState } from 'react'
import { deleteDoc, doc, getDoc } from 'firebase/firestore'
import { Link, useNavigate, useParams } from 'react-router-dom'
import db from '../db'
import { getAvatarData } from '../avatarData'

function ContactDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [contact, setContact] = useState(null)

  useEffect(() => {
    getDoc(doc(db, 'contacts', id))
      .then((document) => {
        if (document.exists()) {
          setContact({
            id: document.id,
            ...document.data()
          })
        } else {
          navigate('/')
        }
      })
  }, [id])

  function handleDelete() {
    deleteDoc(doc(db, 'contacts', id))
      .then(() => {
        navigate('/')
      })
  }

  if (!contact) {
    return (
      <div className="details-page">
        <p>Loading...</p>
      </div>
    )
  }

  const avatar = getAvatarData(contact.firstName)

  return (
    <div className="details-page">
      <div className="details-card">

        <Link to="/" className="back-link">
          ← Back to Contacts
        </Link>

        <div className="profile-header">

          <div
            className="cute-avatar"
            style={{
              backgroundColor: avatar.bg,
              color: avatar.color
            }}
          >
            {avatar.emoji}
          </div>

          <div className="profile-info">
            <h1>
              {contact.firstName} {contact.lastName}
            </h1>

            <p className="profile-subtitle">
              Contact Information
            </p>
          </div>

        </div>

        <div className="details-content">

          <div className="detail-item">
            <span>First Name</span>
            <p>{contact.firstName}</p>
          </div>

          <div className="detail-item">
            <span>Last Name</span>
            <p>{contact.lastName}</p>
          </div>

          <div className="detail-item">
            <span>Email</span>
            <p>{contact.email}</p>
          </div>

        </div>

        <div className="detail-actions">

          <Link
            to={`/contacts/${id}/edit`}
            className="primary-button"
          >
            Edit Contact
          </Link>

          <button
            type="button"
            className="delete-button"
            onClick={handleDelete}
          >
            Delete Contact
          </button>

        </div>

      </div>
    </div>
  )
}

export default ContactDetails