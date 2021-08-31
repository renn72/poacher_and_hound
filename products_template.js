const products = [
  {
    name: 'Breakfast 1', // dish title
    image: '/images/1.JPG', // image file, leave as 1.jp for now
    description: 'Yummy breakfast', // description on item page
    brand: 'food', // an extra category, does nothing atm, so can just leave it as food
    category: ['breakfast', 'lunch'], // category list
    prices: [10, 15], // price list
    sizes: ['M', 'L'], // size list
    unitsPerSize: [10, 20], // unit to decrement for each size
    countInStock: 99, // leave as 99 atm
    rating: 0, // don't worry about
    numReviews: 0, // don't worry about
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: '',
    image: '/images/1.JPG',
    description: '',
    brand: 'food',
    category: [''],
    prices: [],
    sizes: [''],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
]