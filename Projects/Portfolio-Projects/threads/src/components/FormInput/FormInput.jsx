import './FormInput.css'

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className='form-group'>
        {label && (<label className= 'form-input-label'>{label}</label>)}
        <input className='form-input' {...otherProps} />
    </div>
  )
}

export default FormInput