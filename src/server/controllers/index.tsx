import React from 'react';
import {Request, Response} from 'express';
import {Provider}from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import Hello from '../../client/components/Hello/Hello';
import configureStore from '../../client/store';
import renderHtml from '../components/renderHtml';

const store = configureStore();

export const handleRender = (req: Request, res: Response) => {
    const htmlContent = ReactDOMServer.renderToString(
        <Provider store={store}>
            <Hello/>
        </Provider>
    );
    const htmlPage = renderHtml(htmlContent);

    res.send(htmlPage);
};
