import { useContext, useState } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import styles from '../styles/pages/Login.module.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [isEmpty, setIsEmpty] = useState(null)

  const { user, handleDefaultButton, handleGithubButton } = useContext(AuthenticationContext)

  const handleUsername = (e: any) => setUsername(e.target.value)

  async function handleSubmitUsername() {
    if (username !== '') {
      fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
          const { login } = data
          handleDefaultButton(login)
        })
    } else {
      // setIsEmpty(true)
      console.log('Digite um usuário!')
    }
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