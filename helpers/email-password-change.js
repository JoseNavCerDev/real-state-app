import nodemailer from 'nodemailer';

const emailPasswordChange = async(data) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      })
    
    const { name, email, token } = data;    

    //Send the email
    await transport.sendMail({
        from: 'Real State App',
        to: email,
        subject: 'Change password request on Real State App',
        text: 'Change password on Real State App',
        html: `
            <p>Hi ${name}, We've detected a password change request</p>

            <p>If you didn't make any password change request, only ignore it</p>

            <p>To end proces, do click in the next link:
                <a href="${process.env.BACKEND_URL}:${process.env.PORT_EXPRESS}/api/user/change-password/${token}">Account Confirmation</a> 
            </p>

        `
    });

};

export default emailPasswordChange;