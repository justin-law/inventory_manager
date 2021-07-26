import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="create-content">
            <div className='create-card'>
                <h3>Contact Me</h3>
                <br></br>
                <ul style={{listStyleType: 'none'}}>
                    <li>
                        <div>Email: justinlaw801@gmail.com</div>
                    </li>
                    <li>
                        <a href="https://github.com/justin-law" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/justinlaw801/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Contact
