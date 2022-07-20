import SignUpForm from "../SignUp/SignUpForm"
import SignInForm from "../SignIn/SignInForm"
import './Authentication.scss'

const Authentication = () => {
 
  return (
    <div className="authentication-container">
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication