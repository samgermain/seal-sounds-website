import React from 'react';
import emailjs from 'emailjs-com';
// import ReCaptcha, { Loader } from "@pittica/gatsby-plugin-recaptcha"
// var Recaptcha = require('react-recaptcha');

const EmailForm = ({className}) => {

    const formInput = {
        from_name: "",
        email_subject: "",
        from_email: "",
        html_message: ""
    };

    const FormInput = ({label, children}) => (
        <div className='row text-end form-group' >
            <label className="col-sm-2" >
                {label}
            </label>
            <div className='col-sm-10'>
                {children}
            </div>
        </div>
    );

    // Loader()
    const sendEmail = function(e){
//        const [serviceId, templateId, userId] = ['gmail', 'contactform', 'user_1vdH1saKOwWgYvrTaAnpV']
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        console.log(e.target)
        emailjs.send('gmail', 'emailform', formInput, 'user_QH9yiKWNyZsxxMXp6mpBZ').then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form method="post" id='emailform' className={className} onSubmit={sendEmail}>
            <FormInput label="Name">
                <input
                    className="form-control"
                    type='text'
                    name='from_name'
                    placeholder="Name" 
                    onChange={e => formInput.from_name = e.target.value}
                />
            </FormInput>
            <FormInput label="Email">
                <input
                    className="form-control"
                    type='email'
                    name='from_email'
                    placeholder="Email"
                    onChange={e => formInput.from_email = e.target.value}
                />
            </FormInput>
            <FormInput label="Subject">
                <input
                    className="form-control" 
                    name='email_subject' 
                    type='text' 
                    placeholder="Subject" 
                    onChange={e => formInput.email_subject = e.target.value}
                />
            </FormInput>
            <FormInput label="Message">
                <textarea 
                    className='form-control' 
                    name='html_message' 
                    placeholder="Message" 
                    onChange={e => formInput.html_message = e.target.value}
                />
            </FormInput>
            <div className='row ml-auto col-sm-10' style={{marginLeft: "auto"}}>
                {/* <div className="m-auto m-sm-0 g-recaptcha" data-sitekey="6Le1Y1caAAAAAE-SskS-F9EHwsxdwi_MlJN5UF8q"></div> */}
                <div className='form-group ml-auto mb-md-auto d-flex'>
                    <button 
                        style={{marginLeft: "auto", marginRight: '1.5em'}} 
                        className='btn btn-primary mt-3 ml-auto mr-5' 
                        type="submit"
                    >Submit</button>
                </div>
            </div>
        </form>
    );
};

export default EmailForm;