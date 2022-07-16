import './FormInput.css'

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className='form-group'>
        {label && (<label className= 'from-input-label'>{label}</label>)}
        <input className='from-input' {...otherProps} />
    </div>
  )
}

export default FormInput