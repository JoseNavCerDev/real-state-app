import { exit } from 'node:process';
import db from '../config/ddbb.js';

import categoriesSeed from "./categories-seed.js";
import pricesSeed from './prices-seed.js';

import { Category, Price } from '../models/relations-model.js';

//Function to import DATA
const dataImport = async () => {
    try {
        //Authentication
        await db.authenticate();

        //Generate colums
        await db.sync();

        //Data insert       
        await Promise.all([
            Category.bulkCreate(categoriesSeed),
            Price.bulkCreate(pricesSeed)
        ]);

        console.log('Success data import');

    } catch (error) {
        console.log(error);
        exit(1);
    }
}


//Function to erase data
const dataErase = async () => {
    try {
        await Promise.all([
            Category.destroy({ where : {}, truncate: true }),
            Price.destroy({ where : {}, truncate: true })
        ]);

        console.log('Success data erase');
        
    } catch (error) {
        console.log(error);
        exit(1);
    }
}



//Logics funtion to execute command on package.json script

//Import data
if(process.argv[2] === '-i' /*i of import*/ ){
    dataImport();
}

//Erase data
if(process.argv[2] === '-e' /*e of erase*/ ){
    dataErase();
}