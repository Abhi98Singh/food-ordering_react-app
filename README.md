# Laying_the_Foundation

# ReactApp

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search Bar
- - ResturantCardsContainer
-            - Resturant Cards
-                  - img
-                  - name of Rest, star rating, Cusinine, deleivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

    # Two Types of Export/Import

    - Default Export/Import

      export default Component;
      import Component "path";

    - Named Export/Import

      export const Component;
      import {Component} "path";

    # React-Hooks

    (Normal JS Utility Functions)

    - useState() - Superpowerful State Variables in React
    - useEffect()

    # Data Layer / UI Layer

    @ Note: ** "Whenever we have react App we have a UI layer and data layer,
    UI layer will display what is being sent by the data layer. **

    " React keeps the UI sync with Data layer, As soon as The Data Layer, The UI Layer also updates
    As soon as State variable changes/updates, React re-renders the Component "
    that's why React is most popular library in the world

    # ** React has one of the best Render Mechanism **

    # ** React Renders the UI very Fast **

    # useEffect() hook

    - ‘ useEffect() ' takes two arguments .

      1. Callback function.
      2. Dependency Array.

      - useEffect Callback function is called as soon as The Component is rendered

      - useEffect is useful to follow second approach - "Render First Fetch Later"
        It is really helpful to render data which we will get after the ‘ fetch() ' operation

    # ** fetch() is not Javascipt function rather It is a Browser's Web API which is used to use/access Browser's Functionality/ Features, "fetch() Web API is to make external network calls" **

    # ** Re-rendering the component simply means Calling the Functional Component again with updated state value **

    # ** Whenever we change/updates local state variable with setVal(), React re-renders the Component **

    # ** React re-renders the entire Component and manipulates/updates the specific DOM element which has got changed/updated **

    # There are two types of routing in web apps

    1.) Client Side Routing
    2.) Server side Routing

    # "Single Page Application :- It's a single Page, only components are getting interchnaged"

---

# Redux Toolkit

- Install llibraries :- @reduxjs/toolkit and react-redux
- Build our own Store
- Connect our Store to our app
- Create a Slice (cartsSlice) and add slice to ur Store
- dispath(action)
- Selector(Read the data using Selector)

---

# Types of Testing (Developer : writing test cases)

- Unit Testing
- Intregation Testing
- End to End testing (e2e testing)

# Setting up Trsting into our Application

- Install React Testing Libraary
- Install jest
- Intall Babel additioanl Dependicies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration
- Install jsdom library
- Install @babel/preset-react library to make JSX work/enabled in test cases
- Include @babel/preset-react inside babael config
- Install @testing-library/jest-dom
- Install npm i -D @types/jest (for get the intelligense/auto-complete after importing @testing-library/jest-dom)

# Three pieces of test cases (Implemntation)

- render things on the screen(jestdom)
- finding / querying / get something
- Assert something
