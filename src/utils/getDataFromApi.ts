import fs from 'fs';
import fm from 'front-matter';
import path from 'path';
import glob from 'glob'

export const getPages = (directory, uriPrefix = '') => {
    const pages = [];
  
    const files = glob.sync('**/*.md', {
        cwd: directory,
    });

    files.forEach((file) => {
        const fileData = fs.readFileSync(`${directory}/${file}`);
        const page = fm(fileData.toString()).attributes;
        page.uri = `${uriPrefix}${
            path.dirname(file) === '.' ? '' : `${path.dirname(file)}/`
        }${path.basename(file, '.md')}`;
        pages.push(page);
    });


    return pages;
};
