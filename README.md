# Didomi frontend challenge
Simple challenge project for Didomi application, ships with React, Redux, React testing library, a simple Webpack server, Babel and Travis for automated testing in the cloud.


## Prerequisites
- node
- yarn

## Local development Setup

```
git clone https://github.com/marcosraul94/didomi-frontend-challenge.git
cd <Your Project Path> 
yarn
// optionaly you can enable automatic pre-commit lint check on staged files with
yarn lint-precommit-setup
// start app
yarn start
```

The project will run at http://localhost:4200/.

## Running tests

```
yarn test
```

Other forms of testing are supported, project comes with `eslint` check while developing, `pre-commit linting` analisys on staged files (if enabled) and automatic testing on each push in `travis ci` platform.


## Running lint

```
yarn lint
```

## Technology documentation
1. [React](https://reactjs.org/)
2. [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/)
3. [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
4. [Redux](https://redux.js.org/) with [ReduxDevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) integration
5. [Travis CI](https://travis-ci.org/)
6. [ESlint](https://eslint.org/)
7. [Husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged#readme)


