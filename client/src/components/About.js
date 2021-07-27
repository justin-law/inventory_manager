import React from 'react'
import './About.css'

function About() {
    return (
        <div className="create-content">
            <div className='create-card'>
                <h3>About The App</h3>
                    <p>My name is Justin Law, and I am a computer science and cognitive studies double major at Vanderbilt University graduating in 2023. </p>
                    <p>I created this app to learn about the MERN stack and for one of my student groups.
                         As the treasurer of the Maker Club at Vandy, I am in charge of the procurement of goods for our workshops and projects. 
                         I found that the current method of keeping track of club inventory of storing data on an Excel spreadsheet wasn't adequate.
                         I wanted both a UI that showed the relevant information for the club as well as functionality for more complex data visualization if necessary.
                         React and MongoDB solved those two problems for me by both allowing for a responsive website and a powerful backend database with a range of advanced features.</p>
                    <p>This was my first large project working with the tools and frameworks of the MERN stack and I learned a lot about modern website building.
                        I am currently looking for a software engineering internship for summer 2022 and I hope this website was a showcase of my skills.
                        My Email, GitHub and LinkedIn are in the Contact Me page, which can be reached on the Navbar.
                    </p>
            </div>
        </div>
    )
}

export default About
