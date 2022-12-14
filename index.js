import express from 'express';
import dotenv from 'dotenv';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';

import routes from './routes/routes.js';
import ddbb from './config/ddbb.js';

//App Creation
const app = express();

//Method to can use json format and forms
app.use(express.json());
app.use( express.urlencoded({ extended : true }) );

//Cookie parser availability
app.use( cookieParser() );

//CSRF availability (Global in all app)
app.use( csrf({ cookie : true }) );

//Database connection
try {
    await ddbb.authenticate();
    ddbb.sync();
    console.log('Successful connection');
} catch (error) {
    console.log(error);
}

dotenv.config();

//Routing
app.use('/api', routes);

//Pug
app.set('view engine', 'pug');
app.set('views', "./views");

//Public
app.use( express.static('public') );

app.listen(process.env.PORT_EXPRESS, () => {
    console.log(`LISTEN ON PORT ${process.env.PORT_EXPRESS}`);
});