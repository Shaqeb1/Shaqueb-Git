const users = [
  { id: 1, name: 'Jack', isActive: true, age: 20 },
  { id: 1, name: 'Jack', isActive: true, age: 18 },
  { id: 1, name: 'Jack', isActive: false, age: 33 },
]

const names = users.map((user) => user.name)
const activeUsers = users
  .filter((user) => user.isActive)
  .map((user) => user.name)

const sortedUsers = users.sort((user1, user2) =>
  user1.age < user2.age ? 1 : -1
)
