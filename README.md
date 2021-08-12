<p align="center">
  <a href="https://github.com/salihcodev/ts-react-redux-toolkit-template">
    <img src="https://raw.githubusercontent.com/salihcodev/ts-react-redux-toolkit-template/main/public/assets/images/logo.svg" alt="Chakra logo" width="500" />
  </a>
</p>

<h2 align="center">Start to build awesome apps, And be more productive⚡️</h2>

<p align="center">There is no need for writing boring boilerplate any more :)</p>

<br>

<p align="center">
  <img alt="MIT License" src="https://img.shields.io/github/license/salihcodev/ts-react-redux-toolkit-template"/>
  <img alt="Github Stars" src="https://badgen.net/github/stars/salihcodev/ts-react-redux-toolkit-template" />
</p>

<br />

### Description

@reactjs template with redux-toolkit and typescript included, And needed libs and pkgs installed and included as well.

<br>

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [`http://localhost:3000`](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

---

## File Structure

```bash
.../ts-react-redux-toolkit-template
│
├── config-overrides.js
├── package.json
├── public
│   ├── assets
│   │   ├── fonts
│   │   │   ├── OperatorMonoLig-BookItalic.otf
│   │   │   ├── OperatorMonoLig-Book.otf
│   │   │   ├── OperatorMonoLig-MediumItalic.otf
│   │   │   └── OperatorMonoLig-Medium.otf
│   │   └── images
│   │       ├── loading.gif
│   │       ├── logo.svg
│   │       └── notfound-cover.svg
│   ├── favicon.ico
│   ├── icon.svg
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── api
│   │   ├── base.ts
│   │   ├── user
│   │   │   └── endpoints-referrers.ts
│   │   └── usual-collection-crud-callers
│   │       └── endpoints-referrers.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── common
│   │   ├── constants // static content
│   │   ├── interfaces
│   │   │   ├── auth
│   │   │   │   └── auth.interface.ts
│   │   │   ├── comps
│   │   │   │   ├── add-banner.interface.ts
│   │   │   │   ├── banner.interface.ts
│   │   │   │   ├── footer.interface.ts
│   │   │   │   ├── form-input.interface.ts
│   │   │   │   ├── header.interface.ts
│   │   │   │   ├── hero.interface.ts
│   │   │   │   ├── layout.interface.ts
│   │   │   │   └── notifyer.interface.ts
│   │   │   └── slices
│   │   │       └── initial
│   │   │           └── initial.interface.ts
│   │   ├── styles
│   │   │   ├── app.sass
│   │   │   ├── index.sass
│   │   │   └── utils
│   │   │       ├── _animation.util.sass
│   │   │       ├── _colors.util.sass
│   │   │       ├── _fonts.util.sass
│   │   │       ├── _helper-classes.util.sass
│   │   │       └── _mixins.util.sass
│   │   ├── types
│   │   │   ├── signin-form.types.ts
│   │   │   └── signup-form.types.ts
│   │   └── utilities
│   │       ├── localstorage-dealer
│   │       │   ├── localstorage-getters.util.ts
│   │       │   └── localstorage-setter.util.ts
│   │       └── scroll-to-top
│   │           └── scroll-to-top.util.ts
│   ├── components
│   │   ├── base
│   │   │   └── initial
│   │   │       ├── initial.comp.tsx
│   │   │       └── style.sass
│   │   └── distributed
│   │       ├── ad-banner
│   │       │   ├── add-banner.comp.tsx
│   │       │   └── style.sass
│   │       ├── banner
│   │       │   ├── banner.comp.tsx
│   │       │   └── style.sass
│   │       ├── footer
│   │       │   ├── footer.comp.tsx
│   │       │   └── style.sass
│   │       ├── form-input
│   │       │   ├── form-input.comp.tsx
│   │       │   └── style.sass
│   │       ├── header
│   │       │   ├── header.comp.tsx
│   │       │   └── style.sass
│   │       ├── hero
│   │       │   ├── hero.comp.tsx
│   │       │   └── style.sass
│   │       ├── layout
│   │       │   ├── layout.comp.tsx
│   │       │   └── style.sass
│   │       └── notifyer
│   │           ├── notifyer.comp.tsx
│   │           └── style.sass
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── redux
│   │   ├── hooks.ts
│   │   ├── slices
│   │   │   └── initial
│   │   │       ├── initial.slice.ts
│   │   │       └── logic
│   │   │           └── async-call.sliceLogic.ts
│   │   └── store.ts
│   ├── serviceWorker.ts
│   ├── setupTests.ts
│   └── views
│       ├── contact
│       │   ├── contact.page.tsx
│       │   └── style.sass
│       ├── landing
│       │   ├── landing.page.tsx
│       │   └── style.sass
│       ├── not-found
│       │   ├── notfound.page.tsx
│       │   └── style.sass
│       ├── signin
│       │   ├── signin.page.tsx
│       │   └── style.sass
│       ├── signup
│       │   ├── signup.page.tsx
│       │   └── style.sass
│       └── terms
│           ├── style.sass
│           └── terms.page.tsx
├── tsconfig.json
└── yarn.lock

```

---

## Contribution

#### Project naming convention

- For naming files and directories i like to use **cabab-case**
- For naming functions, utilities i like to use **camelCase** is javascript used to be
- For naming interfaces, types i like to use **PascalCase**

> [Read about naming-convention in programming (wiki)](<https://en.wikipedia.org/wiki/Naming_convention_(programming)>)

#### How to contribute

If you don't know how to contribute or where you can start.. I suggest to visit those links below

- [How-to-contribute (github-blog)](https://opensource.guide/how-to-contribute/)
- [how-to-contribute-to-open-source (freeCodeCamp)](https://github.com/freeCodeCamp/how-to-contribute-to-open-source#useful-articles-for-new-open-source-contributors)

#### Start to contribute

Things need contributions in this project

- Create `constants/footer.data.ts` which is should contains footer data represented in arrays of objects, Or any other **DS** as needed.

  - then go to build footer with this data.

- As same as footer, You can start build **DS** for header routes in the `/constants` directory.

  Also build the mobile-header menu and manage the responsiveness.

- Create additional animations `/common/styles/utils/_animation.util.sass`

- Remove bootstrap and its redundant dependencies then replace it with [Chakra-ui](https://chakra-ui.com) OR [Ant-design](https://ant.design/)

- Write terms & policy data in `/constants` to use it later in terms page.

- Customize the project given components and modify it to be reusable as possible.

<br>

## Support

Feel free to star the repo

follow me on twitter [@salihcodev](https://t.me/salihcodev)
