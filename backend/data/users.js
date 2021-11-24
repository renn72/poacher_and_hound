import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Super User',
    email: 'poacher@warner.systems',
    address: '11 street',
    suburb: 'city',
    postalCode: '3171',
    phone: 'JUMPsit11',
    password: bcrypt.hashSync('JUMPsit11', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    address: '11 street',
    suburb: 'city',
    postalCode: '3171',
    phone: '123456',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    address: '11 street',
    suburb: 'city',
    postalCode: '3171',
    phone: '123456',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
