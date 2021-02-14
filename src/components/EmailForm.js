import React from 'react'
import emailjs from 'emailjs-com'
// import ReCaptcha, { Loader } from "@pittica/gatsby-plugin-recaptcha"

// var Recaptcha = require('react-recaptcha');

const FormControl = ({label, page}) => {
    switch (label) {
        case 'Name':
            return <input className="form-control" type='text' name='from_name' placeholder={label} />
            break
        case 'Email':
            return <input className="form-control" type='email' name='from_email' placeholder={label} />
            break
        case 'Subject':
            return <input className="form-control" name='subject' type='text' placeholder={label} />
            break
            
            
        case 'Message':
            
            return <textarea className='form-control' name='html_message' placeholder={label} />
            break
    }
}

export default ({className, page} ) => {

    // Loader()
    const sendEmail = function(e){
//        const [serviceId, templateId, userId] = ['gmail', 'contactform', 'user_1vdH1saKOwWgYvrTaAnpV']
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm('gmail', 'emailform', e.target, 'user_1vdH1saKOwWgYvrTaAnpV').then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }

    // // create a variable to store the component instance
    // let recaptchaInstance;    
    // // manually trigger reCAPTCHA execution
    // const executeCaptcha = function () {
    //     recaptchaInstance.execute();
    // };
    // // executed once the captcha has been verified
    // // can be used to post forms, redirect, etc.
    // const verifyCallback = function (response) {
    //     // console.log(response);
    //     // document.getElementById("emailForm").submit();
    // };

    return (
        <form method="post" id='emailForm' className={className} onSubmit={sendEmail}>
            {['Name', 'Email', 'Subject', 'Message'].map(label => (
                <div className='row text-right form-group' >
                    <label className="col-sm-2" >
                        {label}
                    </label>
                    <div className='col-sm-10'>
                        <FormControl label={label} page={page} />
                    </div>
                </div>
            ))}
            <div className='row ml-auto col-sm-10'>
                {/* <ReCaptcha
                    action="homepage"
                    sitekey="6LdKLgAVAAAAAKBKZDMHG19KWA1b3sQoB0OLakZU"
                    callback={verifyCallback}
                /> */}
                {/* <div className="m-auto m-sm-0 g-recaptcha" data-sitekey="6Le1Y1caAAAAAE-SskS-F9EHwsxdwi_MlJN5UF8q"></div> */}
                <div className='form-group ml-auto mb-md-auto'>
                    <button className='btn btn-primary mt-2 mt-sm-0 mr-2' type="submit">Submit</button>
                </div>
            </div>
        </form>

    );
    //invisible captcha
                // <div className='text-right'><Button className='mr-2' variant="primary" onClick={executeCaptcha}>Submit</Button></div>
            // <Recaptcha
            //     ref={e => recaptchaInstance = e}
            //     sitekey="6LdKLgAVAAAAAKBKZDMHG19KWA1b3sQoB0OLakZU"
            //     size="invisible"
            //     verifyCallback={verifyCallback}
            // />  
}