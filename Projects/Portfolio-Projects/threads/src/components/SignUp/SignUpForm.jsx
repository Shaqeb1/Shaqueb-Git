import {useState} from 'react'
import {  createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../FormInput/FormInput'
import './SignUpForm.css'
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value })
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }



  return (
    <div className='signUp-container'>
        <h2 className='signUp-heading'>Don't have an account?</h2>
        <span className='signUp-span'>Sign up with your email and password</span>
        <form>
            <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName}/>
            <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email}/>
            <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>
            <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <button id='signUp-button' type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm