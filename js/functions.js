import axios from 'axios'

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Caroline' }
    user['lastName'] = 'Becherovka'
    return user;
  },
  fetchUser: async () =>{
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    return data 
  }
}

module.exports = functions