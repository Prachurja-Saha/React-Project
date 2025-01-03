# why we need react
when we are creating large application it is very dificult to build/manage application using only vanila/plain JS
in react we no longer need to update/quering DOM elements, instead we describe web page using reusable components and react will take 
care of DOM (efficiently, updating) DOM element.
component help us write reusable, modular and better structured/organized code.
component will break into sections/ parts 
in component app[Parent Component] is the root

2 types component
1. Class component
2. function based component

vanila JS -> when HTML loaded browser creates tree like structure called DOM (Data Object Model)

Vite is a tool which will help us to create React folder
# How to create a react project using VITE
1. open cmd and using cd go to that location where u wants to create react project
2. write command -> npm create vite@4.1.0 
3. press -> y
4. provide project name + select react and javascript/typescript
5. go to that project location using cd project-name
6. write command -> 1. npm install  2. npm run dev

# Installing Bootstrap (Bootstrap is a CSS library, which provides css classes for styling our applicaton
1. open new terminal other than the terminal where Web server/ react application is running
2. cpmmand for install(i) -> npm install bootstrap@5.2.3  

# Install Axios
we can stop server using ctrl + c and then run command to install axios : npm i axios  OR npm install axios