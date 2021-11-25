import sgMail from '@sendgrid/mail'

const newOrder = (data) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // console.log(data.toString())
  // console.log(JSON.stringify(data))

  let text = ''

  text += '<h1>New Order</h1>'
  text += '<hr>'
  text += '<ul>'
  data.orderItems.forEach((item) => {
    const { name, qty, size } = item
    const s = `<li><h2>${qty} X ${size} : ${name} </h2></li>`
    text += s
  })
  text += '</ul>'
  text += '<hr>'

  text += '<br>'

  text += `<h3>Total: $${data.itemsPrice} + $${data.shippingPrice} + $${data.totalPrice}</h3>`

  text += '<br>'
  text += data.user.name + '<br>'
  text += data.user.email + '<br>' + '<br>'
  text += data.shippingAddress.address + '<br>'
  text += data.shippingAddress.suburb + '<br>'
  text += data.shippingAddress.postalCode + '<br>'
  text += data.shippingAddress.phone + '<br>'

  const msg = {
    to: 'renwa6801@gmail.com', // Change to your recipient
    from: 'test@warner.systems', // Change to your verified sender
    subject: `New Order for ${data.user.name}`,
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

  msg.to = 'enquiries@poacherandhound.com.au'
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

export { newOrder }
