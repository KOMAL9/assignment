import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from './src/App';

const app = express();

app.use(express.static('./build', { index: false }));

app.get('/*', (request, response) => {
    const sheet = new ServerStyleSheet();

    const reactApp = renderToString(
        sheet.collectStyles(
            <StyleSheetManager sheet={sheet.instance}>
                <App />
            </StyleSheetManager>
        )
    );

    const templateFile = path.resolve('./build/index.html');
    fs.readFile(templateFile, 'utf-8', (err, data) => {
        if (err) {
            return response.status(500).send(err);
        }

        return response.send(
            data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
                .replace('{{styles}}', sheet.getStyleTags())
        );
    });
});

app.listen(8080, () => {
    console.log('Server is running on PORT::8080')
});