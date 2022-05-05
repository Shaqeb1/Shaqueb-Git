import faker from '@faker-js/faker'

const Comment = ({ name, avatar, text }) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {name}
        </a>
        <div className='metadata'>
          <span className='date'>{faker.date.weekday()}</span>
        </div>
        <div className='text'>{text}</div>
      </div>
    </div>
  )
}

export default Comment
