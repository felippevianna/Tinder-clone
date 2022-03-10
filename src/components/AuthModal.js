import { useState } from 'react'

const AuthModal = ({setShowModal}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    
    const handleClick = () => {
        setShowModal(false)
    }

    const isSignUp = true

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>X</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking log in, you agree to aour terms ...</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="email" 
                    required={true}  
                    onChgange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="password" 
                    required={true}  
                    onChgange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="password-check" 
                    id="password-check" 
                    name="password-check" 
                    placeholder="confirm password" 
                    required={true}  
                    onChgange={(e) => setConfirmPassword(e.target.value)}
                />
            </form>
            Auth modal
        </div>
    )
}

export default AuthModal