import {
  defineConfig
} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Introduction to React",
  description: "Getting started with React (MFT Course)",
  base: '/intro-to-react',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Getting Started',
        link: '/en/'
      }
    ],

    sidebar: [{
      text: 'Table of Content',
      items: [{
          text: 'Session 1: Introduction to JavaScript and ES6',
          items: [{
              text: 'Variables and Data Types',
              link: '/en/1/1-vars-data-types.md'
            },
            {
              text: 'Control Structures',
              link: '/en/1/2-control-structures.md'
            },
            {
              text: 'Functions',
              link: '/en/1/3-functions.md'
            },
            {
              text: 'ES6 Features: Arrow Functions, let, const and template literals',
              link: '/en/1/4-es6.md'
            },
          ]
        },
        {
          text: 'Session 2: Advanced JavaScript Concepts',
          items: [{
              text: 'Scope and Closures',
              link: '/en/2/1-scope-and-closures.md'
            },
            {
              text: 'Prototypes and Inheritance',
              link: '/en/2/2-proto-and-inheritance.md'
            },
            {
              text: 'Async Programming with Promises and Async/Await',
              link: '/en/2/3-async.md'
            },
          ]
        },
        {
          text: 'Session 3: NodeJS and NPM',
          items: [{
              text: 'Introduction to NodeJS and NPM',
              link: '/en/3/1-intro-node.md'
            },
            {
              text: 'Modules',
              link: '/en/3/2-modules.md'
            },
            {
              text: 'Export/Require in NodeJS',
              link: '/en/3/3-export-require.md'
            },
          ]
        },
        {
          text: 'Session 4: Introduction to React',
          items: [{
              text: 'What is React and Why Use It?',
              link: '/en/4/1-what-react.md'
            },
            {
              text: 'Creating a React Application',
              link: '/en/4/2-creat-react-app.md'
            },
            {
              text: 'Understanding Components',
              link: '/en/4/3-understand-component.md'
            },
            {
              text: 'JSX',
              link: '/en/4/4-jsx.md'
            },
            {
              text: 'Import/Export in JS',
              link: '/en/4/5-import-export.md'
            },
          ]
        },
        {
          text: 'Session 5: Functional Components in React',
          items: [{
              text: 'Creating Functional Components',
              link: '/en/5/1-creating-func-component.md'
            },
            {
              text: 'Rendering Components',
              link: '/en/5/2-rendering.md'
            },
            {
              text: 'Props and State',
              link: '/en/5/3-props-and-states.md'
            },
          ]
        },
        {
          text: 'Session 6: React Hooks',
          items: [{
              text: 'Introduction to React Hooks',
              link: '/en/6/1-intro-react-hooks.md'
            },
            {
              text: 'useState Hook',
              link: '/en/6/2-usestate.md'
            },
            {
              text: 'useEffect Hook',
              link: '/en/6/3-useeffect.md'
            },
            {
              text: 'Lifecycles with useEffect Hook',
              link: '/en/6/4-lifecycle.md'
            },
          ]
        },
        {
          text: 'Session 7: Advanced React Hooks',
          items: [{
              text: 'useRef Hook',
              link: '/en/7/1-useref.md'
            },
            {
              text: 'useReducer Hook',
              link: '/en/7/2-usereducer.md'
            },
            {
              text: 'useContext Hook',
              link: '/en/7/3-usecontext.md'
            },
          ]
        },
        {
          text: 'Session 8: Styling React Components',
          items: [{
              text: 'Using CSS with React',
              link: '/en/8/1-css-react.md'
            },
            {
              text: 'Styled Components',
              link: '/en/8/2-styled-components.md'
            },
            {
              text: 'CSS Modules',
              link: '/en/8/3-css-modules.md'
            },
          ]
        },
        {
          text: 'Session 9: Forms in React',
          items: [{
              text: 'Controlled vs Uncontrolled Components',
              link: '/en/9/1-controlled-vs.uncontrolled.md'
            },
            {
              text: 'Handling Form Data',
              link: '/en/9/2-handling-form-data.md'
            },
            {
              text: 'Form Validation',
              link: '/en/9/3-form-validation.md'
            },
          ]
        },
        {
          text: 'Session 10: React-Router',
          items: [{
              text: 'Introduction to React-Router',
              link: '/en/10/1-intro.md'
            },
            {
              text: 'Setting up React-Router',
              link: '/en/10/2-set-up.md'
            },
            {
              text: 'Routing Basics',
              link: '/en/10/3-basic-routing.md'
            },
            {
              text: 'Route Parameters',
              link: '/en/10/4-route-parameters.md'
            },
          ]
        },
        {
          text: 'Session 11: Serverless Deployment with Netlify',
          items: [{
            text: 'Deploy CRA to Netlify',
            link: '/en/11/1-deploy.md'
          }, ]
        },
      ]

    }],

    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/pmzi/introduction-to-react-course'
    }]
  }
})