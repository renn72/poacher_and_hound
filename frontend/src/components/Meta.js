import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Poacher and Hound',
  description: 'Modern Cafe, and offsite catering',
  keywords: 'food, catering, cheap catering, melbourne catering',
}

export default Meta
