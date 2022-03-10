import React from 'react'
import PropTypes from 'prop-types'

function Card({children,reverse}) {
  return (
    <div className={reverse ? 'card' : 'card reverse'}>
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: true
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}





export default Card