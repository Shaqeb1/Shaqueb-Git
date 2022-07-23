import {useState, useContext} from 'react'
import { signInWithGooglePopup , signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from '../FormInput/FormInput'
import './SignInForm.css'
import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button'
import { UserContext } from '../../Context/UserContext'
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

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