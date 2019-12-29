import React from 'react';
import express from 'express';
import bodyparser from 'body-parser';
import {handleRender} from './controllers';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(express.static('dist/build/'));
app.use(handleRender);

app.listen(PORT, () => {
    console.log(`React SSR App is running on port ${PORT}`)
});
