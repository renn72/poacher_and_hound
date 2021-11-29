import sgMail from '@sendgrid/mail'

const sendEmailOrder = ({ createdOrder, user }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // console.log(data.toString())
  // console.log(JSON.stringify(data))

  const {
    createdAt,
    deliveryDate,
    deliveryTime,
    deliveryDetails,
    _id,
    isPaid,
    orderItems,
    shippingPrice,
    totalPrice,
    shippingAddress,
  } = createdOrder

  const orderPlaced = new Date(Date.parse(createdAt))
  const formattedDeliveryDate = new Date(deliveryDate)

  let text = ''

  text += '<h1>New Order</h1>'
  text += `<h5>Time Placed: ${orderPlaced} </h5>`
  text += `<h2>Delivery: ${deliveryTime}, ${formattedDeliveryDate.toDateString()}</h2>`
  if (deliveryDetails !== '') {
    text += `<h3>Details: ${deliveryDetails}</h3>`
  }
  text += `<h4>id: ${_id}</h4>`
  text += `<h4>paid: ${isPaid}</h4>`
  text += `<h4></h4>`
  text += '<hr>'
  text += '<ul>'
  orderItems.forEach((item) => {
    const { name, qty, size } = item
    const s = `<li><h2>${qty} X ${size} : ${name} </h2></li>`
    text += s
  })
  text += '</ul>'
  text += '<hr>'

  text += '<br>'

  text += `<h3>Shipping: $${shippingPrice}, Total: $${totalPrice}</h3>`

  text += '<br>'
  text += user.name + '<br>'
  text += user.email + '<br>' + '<br>'
  text += shippingAddress.isPickup ? '<h3>-- PICKUP --</h3>' + '<br>' : ''
  text += shippingAddress.address + '<br>'
  text += shippingAddress.suburb + '<br>'
  text += shippingAddress.postalCode + '<br>'
  text += shippingAddress.phone + '<br>'

  const msg = {
    to: 'renwa6801@gmail.com', // Change to your recipient
    from: 'test@warner.systems', // Change to your verified sender
    subject: `New Order for ${user.name}`,
    html: text,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })

  // msg.to = 'enquiries@poacherandhound.com.au'
  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log('Email sent')
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
}

export { sendEmailOrder }
