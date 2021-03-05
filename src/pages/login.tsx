import { stringify } from 'querystring'
import { useContext, useState } from 'react'
import { setFlagsFromString } from 'v8'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import styles from '../styles/pages/Login.module.css'

export default function Login() {
  const [username, setUsername] = useState('')

  const { user, handleDefaultButton, handleGithubButton } = useContext(AuthenticationContext)

  const handleUsername = (e: any) => setUsername(e.target.value)

  async function handleSubmitUsername() {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        if (data.message == 'Not found') {
          console.log('Digite um usuário válido.')
        }

        const { login, avatar_url } = data

        handleDefaultButton(login)
      })
  }


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

        <form>
          <input
            type="text"
            placeholder="Digite seu username"
            value={username}
            onChange={handleUsername}
          />

          <button type="button" onClick={handleSubmitUsername} >
            <img src="/icons/arrow-right.svg" alt="Arrow Right" />
          </button>
        </form>
      </div>
    </div>
  )
}