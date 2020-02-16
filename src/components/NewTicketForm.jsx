import React from 'react'

const NewTicketForm = () => {
    let _names = null
    let _location = null
    let _issue = null

    const handleNewTicketFormSubmission = event => {
        event.preventDefault()
        console.log(_names)
        console.log(_location)
        console.log(_issue)
        _names.value = ''
        _location.value = ''
        _issue.value = ''
    }
    return (
        <div className="form-container">
            <form onSubmit={handleNewTicketFormSubmission}>
                <input
                    type='text'
                    id='names'
                    placeholder='Pair Names'
                    ref={input => {_names = input}} />
                <input
                    type='text'
                    id='location'
                    placeholder='Loaction'
                    ref={input => {_location = input}} />
                <textarea
                    id='issude'
                    placeholder='Describe your issue.'
                    ref={textarea => {_issue = textarea}} />
                <button type='submit'>Help!</button>
            </form>
            <style jsx>{`
                .form-container {
                    margin: 30px;
                }

                form, input, textarea, button {
                    border-radius: 4px;
                }

                form {
                    width: 80%;
                    padding: 30px;
                    border: 1px solid #efefef;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                }

                input, textarea, button {
                    width: 50%;
                    font-size: 18px;
                    margin: 0 auto;
                    margin-bottom: 30px;
                }

                textarea {
                    height: 5em;
                }

                button {
                    width: 20%;
                    height: 40px;
                }
            `}</style>
        </div>
    )
}

export default NewTicketForm