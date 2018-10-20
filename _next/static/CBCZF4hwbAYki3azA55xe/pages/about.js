(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{272:function(e,t,a){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=a(273),{page:e.exports.default}})},273:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(28),l=a(29);t.default=function(){return o.a.createElement(n.a,null,o.a.createElement(l.a,null),o.a.createElement("article",null,o.a.createElement("h1",null,"The Idea Behind This Example"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://www.apollographql.com/client/"},"Apollo")," is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server."),o.a.createElement("p",null,"In this simple example, we integrate Apollo seamlessly with"," ",o.a.createElement("a",{href:"https://github.com/zeit/next.js"},"Next")," by wrapping our pages inside a"," ",o.a.createElement("a",{href:"https://facebook.github.io/react/docs/higher-order-components.html"},"higher-order component (HOC)"),". Using the HOC pattern we're able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application."),o.a.createElement("p",null,"On initial page load, while on the server and inside getInitialProps, we invoke the Apollo method,"," ",o.a.createElement("a",{href:"https://www.apollographql.com/docs/react/features/server-side-rendering.html#getDataFromTree"},"getDataFromTree"),". This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized."),o.a.createElement("p",null,"This example relies on ",o.a.createElement("a",{href:"http://graph.cool"},"graph.cool")," for its GraphQL backend.")))}}},[[272,1,0]]]);