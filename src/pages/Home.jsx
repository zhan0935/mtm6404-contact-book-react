import { useEffect, useState } from 'react'
import {
  collection,
  query,
  onSnapshot,
  orderBy
} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import db from '../db'
import { getAvatarData } from '../avatarData'

function Home() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const q = query(
      collection(db, 'contacts'),
      orderBy('lastName')
    )

    onSnapshot(q, (snapshot) => {
      const data = []

      snapshot.forEach((document) => {
        data.push({
          id: document.id,
          ...document.data()
        })
      })

      setContacts(data)
    })
  }, [])

  const filteredContacts = contacts.filter((contact) => {
    const firstName = contact.firstName.toLowerCase()
    const lastName = contact.lastName.toLowerCase()
    const searchText = search.toLowerCase()

    return (
      firstName.includes(searchText) ||
      lastName.includes(searchText)
    )
  })

  return (
    <div className="App">

      <div className="home-header">

        <div>
          <h1>Contact Book</h1>

          <p>
            {contacts.length}{' '}
            {contacts.length === 1 ? 'Contact' : 'Contacts'}
          </p>
        </div>

        <Link
          to="/new"
          className="primary-button add-button"
        >
          + Add Contact
        </Link>

      </div>

      <div className="search-container">

        <input
          type="text"
          placeholder="Search by first or last name..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

      </div>

      <div className="contact-list">

        {filteredContacts.map((contact) => {
          const avatar = getAvatarData(contact.firstName)

          return (
            <Link
              to={`/contacts/${contact.id}`}
              className="contact-card-link"
              key={contact.id}
            >
              <div className="contact-card contact-card-row">

                <div
                  className="mini-avatar"
                  style={{
                    backgroundColor: avatar.bg,
                    color: avatar.color
                  }}
                >
                  {avatar.emoji}
                </div>

                <div className="contact-text">

                  <h2>
                    {contact.firstName}{' '}
                    {contact.lastName}
                  </h2>

                  <p>
                    {contact.email}
                  </p>

                </div>

              </div>
            </Link>
          )
        })}

        {filteredContacts.length === 0 && (
          <p className="no-results">
            No contacts found.
          </p>
        )}

      </div>

    </div>
  )
}

export default Home