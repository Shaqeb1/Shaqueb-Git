import Comment from './Comment'
import { faker } from '@faker-js/faker'
const comments = [
  {
    name: faker.name.firstName(),
    avatar: faker.image.avatar(),
    id: faker.datatype.uuid(),
    text: faker.lorem.words(),
  },
  {
    name: faker.name.firstName(),
    avatar: faker.image.avatar(),
    id: faker.datatype.uuid(),
    text: faker.lorem.words(),
  },
  {
    name: faker.name.firstName(),
    avatar: faker.image.avatar(),
    id: faker.datatype.uuid(),
    text: faker.lorem.words(),
  },
]
const ApprovalCard = () => {
  return (
    <div className='ui card'>
      <div className='content'>
        {comments.map(({ id, name, avatar, text }) => (
          <>
            <Comment key={id} name={name} avatar={avatar} text={text} />
            <div className='extra content'>
              <div className='ui two buttons'>
                <div className='ui basic green button'>Approve</div>
                <div className='ui basic red button'>Reject</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default ApprovalCard
