import nodemailer from 'nodemailer';

const emailRegister = async(data) => {
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
        subject: 'Account confirmation on Real State App',
        text: 'Account confirmation on Real State App',
        html: `
            <p>Hi ${name}, thanks for your register</p>

            <p>To end proces, do click in the next link:
                <a href="${process.env.BACKEND_URL}:${process.env.PORT_EXPRESS}/api/user/validate-email/${token}">Account Confirmation</a> 
            </p>

            <p>If you don't create this account, ignore it</p>
        `
    });

};

export default emailRegister;