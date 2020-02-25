import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NotFound = props => {
  return(
    <main className='not-found'>
      <div className='container'>
        <h1>404 Not Found</h1>
        <p>The page "{props.location.pathname}" does not exist.</p>
        <Link to='/'>Home</Link>
      </div>
      <style jsx>{`
                .not-found {
                    background: url('https://http.cat/404') no-repeat center center fixed;
                    background-size: cover;
                    height 100vh;
                    overflow: hidden
                }

                .container {
                    width: 80%;
                    margin: 0 auto;
                    padding: 1em;
                    text-align: center;
                    background-color: rgba(255, 255, 255, 0.3);
                    border-radius: 4px;
                }
            `}</style>
    </main>
  )
}

NotFound.propTypes = {
  location: PropTypes.object
}

export default NotFound