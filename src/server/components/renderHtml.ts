import {RenderHtml} from '../types';

const renderHtml: RenderHtml = (html: string) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `;
};

export default renderHtml;
