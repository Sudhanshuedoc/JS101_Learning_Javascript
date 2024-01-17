1.What is React?
Ans: React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.

2.Who made React?
Ans: React was created by Jordan Walke, a software engineer at Meta, who released an early prototype of React called "FaxJS". He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012. It was open-sourced at JSConf US in May 2013.

3.What is Babel?
Ans: Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language.
Developers can use new JavaScript language features by using Babel to convert their source code into versions of JavaScript that a Web browser can process. Babel can also be used to compile TypeScript into JavaScript.

4.How does Babel convert html code in React into valid code?
Ans:Babel itself does not directly convert HTML code in React into valid JavaScript code; rather, it primarily focuses on transforming ECMAScript 2015+ (ES6+) code into a backward-compatible version of JavaScript that can run in older environments. However, JSX, a syntax extension used in React for defining UI components, often appears similar to HTML.
JSX code needs to be transformed into JavaScript that the browser can understand. Babel, along with specific plugins, is commonly used for this task.

5.What is ReactDOM used for? Write an example?
Earlier, React Developers directly manipulated the DOM elements which resulted in frequent DOM manipulation, and each time an update was made the browser had to recalculate and repaint the whole view according to the particular CSS of the page, which made the total process to consume a lot of time.
To solve this issue, React brought into the scene the virtual DOM. The Virtual DOM can be referred to as a copy of the actual DOM representation that is used to hold the updates made by the user and finally reflect it over to the original Browser DOM at once consuming much lesser time. 


6.What are the packages that you need to import for react to work with?
Ans: To work with react we need to import several packages The fundamental  ones  are as follow:
 1.React
 2.ReactDOM
 3.Babel


7.How do you add react to a web application?
Ans : To add React to a web Application we can use React and ReactDOM CDN or we can use create react app 

8.What is React.createElement?
Ans: React.createElement is a function in React that is used to create and return a React element. In React, components are the building blocks of a user interface, and elements are what components are made of. The createElement function is typically used to describe what you want the UI to look like.

9.What are the three properties that createElement accept?
Ans:  three properties that createElement accept are  
1.Type(div,span)
2.props(className , id)
3.children(optional)


10.What is the meaning of render and root?
Ans: Render in React refers to the process of converting a React element or a component tree into a set of instructions that the browser can use to paint the user interface on the screen. The render method is a fundamental part of a React component, and it defines what should be displayed on the UI.
In React, the root usually refers to the root DOM element where your React application is mounted. This is the top-level element in your HTML file where all React components are attached.