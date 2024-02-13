### Solves the Problem of the prop drilling 
- to pass the props over the hierarchy 
- maintain the state over the component just like keeping it in the global state

### to use the Context use useContext from the react

> Using the UserContext provider wrap the componet and the component can use the state

### React-Redux -> Redux Toolkit
- stores in the Seprate store which are divided in to the Slices / Division 
- The Cart slices cannot be directly modified
- When you click on a button it Dispatches an Action ... Action calls a function -> the function modifies the cart
- The Function is Known as the Reducer

- To Get the data from the cart we use Selectors
- Using the Selector is Known as subscribing the Store
- It will automatically update the Component (Such as the Items in the cart)


### Redux
- Will Create a Store inside the Utils
- the 2 Libraries [@reduxjs/toolkit react-redux] have different task to do 
    - @reduxjs/toolkit handles the redux functining using ( configureStore )
    - react-redux handles the react side features using ( Provider )
- Takes Store as props -> just like the context provider we have redux store provider

- Use Selctor to subscribe the state (Selectors are the hooks)

### Redux ToolKit 
- Redux tool kit says either mutate the state or return new state