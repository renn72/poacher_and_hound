const products = [
  // {
  //   name: 'Breakfast 1', // dish title
  //   image: '/images/1.JPG', // image file, leave as 1.jp for now
  //   description: 'Yummy breakfast', // description on item page
  //   brand: 'food', // an extra category, does nothing atm, so can just leave it as food
  //   category: ['breakfast', 'lunch'], // category list
  //   prices: [10, 15], // price list
  //   sizes: ['M', 'L'], // size list
  //   unitsPerSize: [10, 20], // unit to decrement for each size
  //   countInStock: 99, // leave as 99 atm
  //   rating: 0, // don't worry about
  //   numReviews: 0, // don't worry about
  // },
  {
    name: 'Granola Cup',
    image: '/images/catering/granola_cup.jpg',
    description:
      'Natural yogurt with house made maple and almond granola topped with poached fruits',
    brand: 'food',
    category: ['breakfast', 'morning/afternoon tea'],
    prices: [8.9],
    sizes: ['each'],
    unitsPerSize: [1],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Mini Croissants',
    image: '/images/catering/mini_croissants.jpg',
    description: 'Mini Noisette croissants with butter and jam',
    brand: 'food',
    category: ['breakfast', 'morning/afternoon tea'],
    prices: [28, 40],
    sizes: ['M', 'L'],
    unitsPerSize: [8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Mini Cheese Croissants',
    image: '/images/catering/mini_cheese_croissants.jpg',
    description:
      'Mini Noisette croissants filled with Ham and cheese & Tomato and Cheese',
    brand: 'food',
    category: ['breakfast', 'morning/afternoon tea'],
    prices: [36, 48],
    sizes: ['M', 'L'],
    unitsPerSize: [8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Egg and Bacon Wrap',
    image: '/images/catering/egg_bacon_wrap.jpg',
    description: 'Grilled bacon and scrambled egg wrap with tomato sauce cut',
    brand: 'food',
    category: ['breakfast'],
    prices: [48, 70],
    sizes: ['M', 'L'],
    unitsPerSize: [8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Assorted Muffins',
    image: '/images/catering/muffins.jpg',
    description: 'Assorted Noisette daily baked (cupcake sized) muffins',
    brand: 'food',
    category: ['morning/afternoon tea'],
    prices: [4.8, 32, 48],
    sizes: ['each', 'M', 'L'],
    unitsPerSize: [1, 8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Assorted Mini Muffins',
    image: '/images/catering/sample.jpg',
    description: 'Assorted Noisette daily baked (mini sized) muffins',
    brand: 'food',
    category: ['morning/afternoon tea'],
    prices: [19.5, 28],
    sizes: ['M', 'L'],
    unitsPerSize: [8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Toasted Sandwich Platter',
    image: '/images/catering/toasted_sandwich_platter.jpg',
    description:
      'selection of ham and cheese & tomato and cheese toasted sandwiches cut in half',
    brand: 'food',
    category: ['breakfast', 'morning/afternoon tea'],
    prices: [48, 70],
    sizes: ['M', 'L'],
    unitsPerSize: [8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Gluten Free Toasted Sandwich',
    image: '/images/catering/sample.jpg',
    description:
      'a toasted ham or tomato and cheese sandwich on gluten free bread',
    brand: 'food',
    category: ['all'],
    prices: [8],
    sizes: ['each'],
    unitsPerSize: [1],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Banana Bread',
    image: '/images/catering/banana_bread.jpg',
    description: 'Poacher and Hound recipe Banana Bread warm with butter',
    brand: 'food',
    category: ['morning/afternoon tea'],
    prices: [28, 40],
    sizes: ['M', 'L'],
    unitsPerSize: [8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Assorted cakes',
    image: '/images/catering/assorted_cakes.jpg',
    description: 'Assorted cakes and slices cut in halves',
    brand: 'food',
    category: ['Morning/Afternoon tea'],
    prices: [28, 40],
    sizes: ['M', 'L'],
    unitsPerSize: [8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Fruit Platter',
    image: '/images/catering/fruit_platter.jpg',
    description: 'Select seasonal fruits sliced ready-to-eat ',
    brand: 'food',
    category: ['all'],
    prices: [40, 60],
    sizes: ['M', 'L'],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Sandwich Platter',
    image: '/images/catering/sandwich_platter.jpg',
    description:
      'a selection of our popular sandwich varieties including 25% vegetarian varieties cut in half',
    brand: 'food',
    category: ['lunch'],
    prices: [80, 115],
    sizes: ['M', 'L'],
    unitsPerSize: [8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Wraps',
    image: '/images/catering/wraps.jpg',
    description:
      'a selection of our popular wrap varieties including 25% vegetarian varieties cut in thirds',
    brand: 'food',
    category: ['lunch'],
    prices: [80, 115],
    sizes: ['M', 'L'],
    unitsPerSize: [8, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Quiche Lorraine',
    image: '/images/catering/sample.jpg',
    description: 'classic bacon onion and cheese quiche lorraine served warm',
    brand: 'food',
    category: ['all'],
    prices: [7, 80],
    sizes: ['each', 'L'],
    unitsPerSize: [1, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Spinach and feta quiche',
    image: '/images/catering/green_quiche.jpg',
    description:
      'quiches with barrel aged feta ricotta and spinach served warm',
    brand: 'food',
    category: ['all'],
    prices: [7, 80],
    sizes: ['each', 'L'],
    unitsPerSize: [1, 12],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Mini Beef Pies by Wonderpies',
    image: '/images/catering/sample.jpg',
    description: 'Raymond Capaldis mini chunky beef pies',
    brand: 'food',
    category: ['all'],
    prices: [72, 99],
    sizes: ['M', 'L'],
    unitsPerSize: [24, 36],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Mini Sausage Rolls',
    image: '/images/catering/sausage_rolls.jpg',
    description: 'Poacher and Hound recipe pork and vegetable sausage rolls',
    brand: 'food',
    category: ['all'],
    prices: [72, 99],
    sizes: ['M', 'L'],
    unitsPerSize: [24, 36],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Farro and Vegetable Salad',
    image: '/images/catering/farro_veg_salad.jpg',
    description:
      'Spelt(wheat) grain cooked til tender with roasted vegetables in our vinaigrette topped with feta',
    brand: 'food',
    category: ['lunch'],
    prices: [11, 40, 60],
    sizes: ['each', 'M', 'L'],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Daily Cafe Salad',
    image: '/images/catering/daily_salad.jpg',
    description:
      'We produce salads changing daily call us to check or trust that you will receive a fresh and beautiful salad ',
    brand: 'food',
    category: ['lunch'],
    prices: [11, 40, 60],
    sizes: ['each', 'M', 'L'],
    unitsPerSize: [],
    countInStock: 99,
    rating: 0,
    numReviews: 0,
  },
]

export default products
