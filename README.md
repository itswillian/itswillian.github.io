<div align="center">
    <br/>
    <img src="./img/Projects/portfolio.gif"/>
    <img height="339px" src="./img/Projects/portfoliomobile.gif"/>
    <br>
</div>

<br/>

# WPS - Portfolio

This project is a personal portfolio website showcasing my background, skills, studies, and projects that I have developed.

To view the final result, you can access the website hosted on GitHub Pages at [https://itswillian.github.io/](https://itswillian.github.io/).

Before starting the development, a prototype was created in Figma to organize and plan the site's interface. The prototype can be accessed at [https://www.figma.com/file/7Pfru4a5hTF7lrbSqkfmqc/Portfolio?node-id=0%3A1](https://www.figma.com/file/7Pfru4a5hTF7lrbSqkfmqc/Portfolio?node-id=0%3A1).

The page is rendered in the browser from a single HTML template (`src/template.html`) and a component with the content and the state (`src/portfolio.js`), using a small runtime (`src/dc-lite.js`) that fills the template and updates only what changed. The styles are in `styles.css` and the images and PDFs are in `assets/`. The site mirrors the final mockup ("Versão final") exactly. To run the project on localhost, an HTTP server is required. During development, the `http-server` package provided by `npm` was used. To install it, run the following command:

```zsh
npm install http-server
```

After installing the HTTP server, navigate to the project folder and run the following command:

```zsh
http-server .
```

This will start the server in the current directory, and you can access it through [http://localhost:8080](http://localhost:8080).