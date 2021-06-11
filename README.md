# Poacher and Hound eCommerce Platform

## Features

- Full featured shopping cart
- User profile with orders
- PayPal / credit card integration
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)

- Data Models
  - Users
    - name
    - email
    - password
    - isAdmin
  - Products
    - name
    - image
    - description
    - brand
    - category
    - price
    - size
    - listOrder
    - countInStock
    - user
  - Orders
    - User
    - orderItems
    - shippingAddress
    - paymentMethod
    - paymentResult
    - taxPrice
    - shippingPrice
    - totalPrice
    - isPaid
    - paidAt
    - isDelivered
    - deliveredAt
    - timeStamp

## Features to add

- different sizes on the products
- organize the products into category's
- choice of pickup or delivery
- limiting the delivery areas
- password recovery
- other payment systems
- currently can only using locally stored images

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
