import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import FolderIcon from '@material-ui/icons/Folder';
import HasWebsite from '../components/contact-form/hasWebsite'
import HasMarketing from '../components/contact-form/hasMarketing'
import ContactMethod from '../components/contact-form/contactMethod'
import ProjectType from '../components/contact-form/projectType'
import BudgetSlider from '../components/contact-form/budgetSlider'
import Footer from '../components/footer'



function ContactPage(){

    const [value, setValue] = React.useState('yes');

    const handleChange = (event) => {
        setValue(event.target.value);
      };


    return(

        <div className="divide-y divide-gray-500">
      
            <div className="section-header pb-5">
                <h1>Contact Us</h1>
                <h3>lets connect today</h3>
            </div>

            <div className="wrapper">

                <div className="content-wrapper py-5">
                    
                    <p>The hardest part is always getting started, but we make it easy like Sunday morning. Fill out our handy dandy little contact form below and we'll get back to you with all the information you need to kickstart your next project. Remember, the more details you provide us, the better service we can provide you. <i className="fas fa-grin-tongue"></i></p>
                
                    <form className="contact-form">

                        <h2 className="pl-1 pt-5 pb-2"><PersonIcon className="mr-4" style={{ fontSize: 55 }}/>Personal Info</h2>

                        <div className="row">

                            <div className="input-wrapper">
                                <h3>First Name</h3>
                                <input/>
                            </div>

                            <div className="input-wrapper">
                                <h3>Last Name</h3>
                                <input/>
                            </div>

                        </div>

                        <div className="row">

                            <div className="input-wrapper">
                                <h3>Email</h3>
                                <input/>
                            </div>

                            <div className="input-wrapper">
                                <h3>Phone</h3>
                                <input/>
                            </div>

                        </div>

                        <div className="row">

                            <div className="input-wrapper">

                                <ContactMethod/>           

                            </div>

                        </div>

                        <h2 className="pl-1 pt-5 pb-2"><BusinessIcon className="mr-4"  style={{ fontSize: 50 }}/>Business Info</h2>

                        <div className="row">

                            <div className="input-wrapper">
                                <h3>Business Name</h3>
                                <input/>
                            </div>

                            <div className="input-wrapper">
                                <h3>Industry</h3>
                                <input/>
                            </div>

                            <div className="input-wrapper">
                                <h3>Your Role</h3>
                                <input/>
                            </div>

                        </div>

                        <h3 className="pt-3 ml-2">Current Digital Presence:</h3>

                        <div className="row">

                            <div className="input-wrapper">               

                                <p className="py-3">Does your business have:</p>

                                <HasWebsite/>
                                <HasMarketing/>

                            </div>

                        </div>

                        <h2 className="pl-1 pt-5 pb-2"><FolderIcon className="mr-4" style={{ fontSize: 50 }}/>Project Details</h2>

                        <div className="row">

                            <div className="input-wrapper">

                                <ProjectType/>
                                
                            </div>

                            <div className="input-wrapper mx-5">
 
                                <BudgetSlider />

                            </div>

                        </div>


                        <div className="row">

                            <div className="input-wrapper">
                                <h3>Project Goals</h3>
                                <textarea/>
                            </div>

                        </div>

                        <div className="contact-button-wrapper flex row justify-center">
                            <div className="button" role="button">Send</div>           
                        </div>


                    </form>

                </div>

            </div>

            <Footer/>

        </div>

    )
}



export default ContactPage