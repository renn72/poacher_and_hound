import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    address: '11 street',
    suburb: 'city',
    postalCode: '3171',
    phone: '123456',
    password: bcrypt.hashSync('123456', 10),
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
