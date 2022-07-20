import {useState} from 'react'
import { signInWithGooglePopup , createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from '../FormInput/FormInput'
import './SignInForm.css'
import Button from '../Button/Button'
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password, } = formFields

    const handleSubmit = async (event) => {
        event.preventDefault()
        

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            switch(error.code) {
            case 'auth/wrong-password':
                alert('Incorrect password')
                break
            case 'auth/user-not-found':
                alert('no user associated with this email')
                break;
                default: 
                console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value })
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


     const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }


  return (
    <div className='signUp-container'>
        <h2 className='signUp-heading'>Already have an account?</h2>
        <span className='signUp-span'>Sign In with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email}/>
            <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>
            <div className='buttons-container'>
                <Button type='submit'>Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm