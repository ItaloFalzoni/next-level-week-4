import { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'

import styles from '../styles/pages/Login.module.css'

export default function Login() {
  const [inputUser, setInputUser] = useState('')
  const [usernameIsEmpty, setUsernameIsEmpty] = useState(true)
  const [isFoundedUser, setIsFoundedUser] = useState(null)

  const { handleDefaultButton } = useContext(AuthenticationContext)

  const handleUsername = (e: any) => setInputUser(e.target.value)

  function onFormSubmit(e) {
    e.preventDefault()

    if (inputUser !== '') {
      handleSubmitUsername()
    }
  }

  async function handleSubmitUsername() {
    if (inputUser !== '') {
      const searchUser = fetch(`https://api.github.com/users/${inputUser}`)

      const responseUserData = searchUser.then(response => response.json())

      responseUserData.then(data => {
        const { login, avatar_url } = data
        if (login) {
          setIsFoundedUser(false)
          handleDefaultButton([login, avatar_url])
        } else {
          setIsFoundedUser(true)
        }
      })
    }
  }

  useEffect(() => {
    if (inputUser == '') {
      setUsernameIsEmpty(true)
    } else {
      setUsernameIsEmpty(false)
    }
  }, [inputUser])

  return (
    <div className={styles.container}>
      <img src="/logo-bg.svg" alt="Background Image" />

      <div>
        <img src="logo-full.svg" alt="Logo" />

        <h3>Bem-vindo</h3>

        <div className={styles.githubDescription}>
          <img src="/icons/github-rounded.svg" alt="Github Icon" />
          <span>Faça login com seu Github para começar</span>
        </div>

        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Digite seu username"
            value={inputUser}
            onChange={handleUsername}
          />

          {
            usernameIsEmpty ? (
              <button
                className={styles.buttonDisabled}
                type="button"
                disabled
              >
                <img src="/icons/arrow-right.svg" alt="Arrow Right" />
              </button>
            ) : (
              <button
                className={styles.buttonEnabled}
                type="button"
                onClick={handleSubmitUsername}
              >
                <img src="/icons/arrow-right.svg" alt="Arrow Right" />
              </button>
            )
          }
        </form>

        {isFoundedUser && <span className={styles.alertNotFoundUser}>Usuário não encontrado</span>}
      </div>
    </div>
  )
}