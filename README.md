# React CRA Testing Practice

<!-- PROJECT SHIELDS -->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-url]
[![Issues-closed][issues-closed-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]

<!-- PROJECT LOGO -->

|                                              Healthy Foodie                                              |
| :------------------------------------------------------------------------------------------------------: |
|                                              ![app-icon][]                                               |
|                          Learn to test in a CRA app with Typescript using Jest                           |
|                          [🐞 Report a bug or 🙋‍♂️ request a feature][issues-url]                           |
| [![contributions welcome][contributions-welcome]][issues-url] [![License][badge-apache]][apache-license] |

- [React CRA Testing Practice](#react-cra-testing-practice)
  - [The Project](#the-project)
    - [Features](#features)
    - [Built With](#built-with)
  - [Using the App](#using-the-app)
  - [How to run this project](#how-to-run-this-project)
    - [Prerequisites](#prerequisites)
    - [Run it (Quickstart with docker)](#run-it-quickstart-with-docker)
    - [Installing the project](#installing-the-project)
    - [Available Scripts](#available-scripts)
      - [`npm start`](#npm-start)
      - [`npm run build`](#npm-run-build)
    - [Learn More](#learn-more)
  - [Potential Features](#potential-features)
  - [Author](#author)
  - [Contributing](#contributing)
  - [Show your support and acknowledges](#show-your-support-and-acknowledges)
  - [License](#license)

![app-banner][]

## The Project

This project is for updating knowledge on testing

### Features

![javascript][]
![react][]

- Basic `create-react-app` structure
- Sets `eslint` rules
- Linters
- React
- React-DOM
- React-Create-App
- Typescript
- ES6 syntax
- Export/import ES6+ notation

### Built With

- `create-react-app`
- `ESLint`
- `npm`
- `vscode` with _ESLint_ extension
- Linux/GNU
- Love and Passion for code

## Using the App

- Open it

## How to run this project

### Prerequisites

- `npm` 6.14 +
- `node` 14.17 +
- `docker` and `docker-compose` (optional)
- A Text Editor like VSCode
- A browser like Firefox or Chrome

### Run it (Quickstart with docker)

- Be sure to setup `docker-compose` and have `git` and `npm` working.
- Run this:

```sh
> git clone https://github.com/Israel-Laguan/react-cra-ts-testing-practice.git
> cd react-cra-ts-testing-practice
> npm i
> docker-compose build
> docker-compose up frontend
```

- Enter [localhost:3000][] in a browser for the frontend.

![docker-build](docs/docker-build.gif)

![docker-up](docs/docker-up.gif)

You can also test using docker, run `docker-compose up test` or `docker-compose run --rm test`

![docker-test](docs/docker-test.gif)

Not a fan of Docker or need more information? Continue for instructions to learn more about how to setup your PC for run the frontend!

We used `create-react-app` to initialize this project, so it is configurated to be easy to run. Just follow the following instructions.

### Installing the project

Now that you are set up, open a terminal and:

```sh
git clone https://github.com/Israel-Laguan/react-cra-ts-testing-practice.git
cd react-cra-ts-testing-practice
npm i && npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see the app.

![app](docs/app.gif)

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Potential Features

- [ ] Create a landing page.
- [ ] \<Insert your great idea here!>.

## Author

| [Israel Laguan][author-github] | ![email-icon][] Email me to [contact@israellaguan.com][author-email] / ![linkedin-icon][] Connect to [my Linkedin][author-linkedin] |
| :----------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|        ![author-pic][]         |                                                             ![banner][]                                                             |

## Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues and feature requests are welcome!
Feel free to check the [issues page][issues-url].

## Show your support and acknowledges

🤗 Give a ⭐️ if you like this project!

This project is possible with help from:

- Lint configuration from [Camilo Martinez][lint-conf]
- Icons from [![Icons8][icons8-logo]][icons8] Icons8
- Banner from [canva.com](https://www.canva.com)
- Favicon from [favicon.io](https://favicon.io/emoji-favicons/)

## License

[![License][badge-apache]][apache-license]

📝 This project is licensed under the [Apache 2](LICENSE)\
Feel free to fork this project and improve it!

[![HitCount](http://hits.dwyl.com/Israel-Laguan/react-cra-ts-testing-practice.svg)](http://hits.dwyl.com/Israel-Laguan/react-cra-ts-testing-practice)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Israel-Laguan/react-cra-ts-testing-practice?style=for-the-badge
[contributors-url]: https://github.com/Israel-Laguan/react-cra-ts-testing-practice/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Israel-Laguan/react-cra-ts-testing-practice?style=for-the-badge
[forks-url]: https://github.com/Israel-Laguan/react-cra-ts-testing-practice/network/members
[stars-shield]: https://img.shields.io/github/stars/Israel-Laguan/react-cra-ts-testing-practice?style=for-the-badge
[stars-url]: https://github.com/Israel-Laguan/react-cra-ts-testing-practice/stargazers
[issues-open-shield]: https://img.shields.io/github/issues/Israel-Laguan/react-cra-ts-testing-practice?style=for-the-badge
[issues-closed-shield]: https://img.shields.io/github/issues-closed/Israel-Laguan/react-cra-ts-testing-practice?style=for-the-badge
[badge-framework]: https://img.shields.io/badge/store-Redux-000?style=for-the-badge&logo=redux
[react]: https://img.shields.io/badge/React-16+-61DAFB?style=for-the-badge&logo=react
[javascript]: https://img.shields.io/badge/JAVASCRIPT-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript
[css]: https://img.shields.io/badge/style-CSS-1572B6?style=for-the-badge&logo=css3
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[issues-url]: https://github.com/Israel-Laguan/react-cra-ts-testing-practice/issues
[badge-apache]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge
[apache-license]: https://opensource.org/licenses/Apache-2.0
[author-pic]: https://avatars2.githubusercontent.com/u/36519478?s=460&v=4
[author-github]: https://israel-laguan.github.io
[author-linkedin]: https://www.linkedin.com/in/israellaguan
[author-email]: mailto:contact@israellaguan.com
[linkedin-icon]: https://img.icons8.com/color/20/000000/linkedin.png
[email-icon]: https://img.icons8.com/color/20/000000/message-squared.png
[banner]: https://github.com/Israel-Laguan/Israel-Laguan/raw/master/docs/banner.jpg
[app-banner]: docs/app-banner.png
[app-icon]: https://img.icons8.com/pastel-glyph/64/000000/test-tube--v2.png
[icons8]: https://icons8.com/
[icons8-logo]: https://img.icons8.com/fluent/20/000000/icons8-new-logo.png
[api-logo]: https://spoonacular.com/images/spoonacular-logo-b.svg
[lint-conf]: https://dev.to/equiman/powerful-react-project-setup-3k3l
