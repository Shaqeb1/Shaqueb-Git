import {useState, useContext} from 'react'
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../FormInput/FormInput'
import {UserContext} from '../../Context/UserContext'
import './SignUpForm.css'
import Button from '../Button/Button'
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };



  return (
    <div className='signUp-container'>
        <h2 className='signUp-heading'>Don't have an account?</h2>
        <span className='signUp-span'>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName}/>
            <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email}/>
            <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>
            <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <Button type='submit'>Sign Up</Button>
        </form>
        {/* <div className='warning'>Email SignUp not working please use google signIn</div> */}
    </div>
  )
}

export default SignUpForm