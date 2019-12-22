import React from 'react';
import express, {Request, Response} from 'express';
import bodyparser from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import Hello from '../client/components/Hello/Hello';
import renderHtml from './components/renderHtml';

const app = express();
const PORT = process.env.PORT || 3000;

const handleRender = (req: Request, res: Response) => {
    const htmlContent = ReactDOMServer.renderToString(<Hello/>);
    const htmlPage = renderHtml(htmlContent);

    res.send(htmlPage);
};

app.use(bodyparser.json());
app.use(express.static('dist/build/'));
app.use(handleRender);

app.listen(PORT, () => {
    console.log(`React SSR App is running on port ${PORT}`)
});
