> Extension does not matter use (js / jsx) (ts/tsx)
> Fetch returns a promise so , use .then / async await

<!-- > Check Optional Chaining in JS -->

### Header
- Logo
- Nav
- Items
### Body
- Search
- RestaurantContainer
- RestaurantCard
### Footer
- Copyright
- Links
- Address
- Contact

> You can also provide css through js object

### What are Components
- JS Functions which return JSX
- Components render the div's 

### Props 
Same as passing Arguments to the function


### Config Drivern UI
Based on the API data for different need the data is different 

### About the keys in the map
- Nerver use index = 0 as the keys (index is the index of the arr / list)
- not using keys <<< using index <<< using UUID 

### Two types of Export/Import
- Default
Export/Import
export default Component; import Comppnent from "path";
- Named Export/Import ( Entire Data Object)
export const Component;
import {Component} from "path";

- The Imports whose name Start with use___ are ->
# React Hooks
> Used to Used to create Local State Varibales in the Components
  - so , cannot be called outside the function
  - always use it at the top like ```Headers :)```
> Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

(Normal JS utility functions)
- useState()
- useEffect()

> When ever a state Variable gets updated the Components gets re-rendered

### useState

> Why Use-State is Const but gets updated 
- Its always bundled in the component and gets re-rendered

- when you call  ```useState()``` it provides you a state variable which is to be stored in the variable inside an Array ```const [presentState] = useState() ``` the ```()```  has 2 arg to be passed ```(defaultVal , updatedVal)``` 
> similar to arr Destructuring

- The useState becomes
```const ['presentState' , 'updatedState'] = useState('defaultVal' , 'UpdatedValue')```
- As it stores 2 variables so, we use arr to store it together

### React Concept
> The reason these operations are fast is because it React is good at DOM operation

> why React is Fast -> Because its efficient in DOM manipulation

#### useState Implementation

- React Uses Reconcilation algorithm known as (React Fiber)
- when we change the Dom it creates a virtual dom (JS object) and render's what has been changed in the DOM tree.
- Virual DOM is representaion of Actual DOM 

> Diff Algo finds the difference in the Virtual DOM's (updated and prev)
- Introduced in ```React 16``` new way of finding div and updating DOM 
- Comparing obj is faster than Comparing the div's

### useEffect Implementation
- If you have to do something u have to use useEffect
- After Rendering the Component the useEffect's callback function will be called.

- useEffect takes 2 arguments
- callback , [] -> Dependancy Array
- if the dependancy array is empty the useEffect is called only at the initial render and just Once
- The purpose of the dependancy array is we provide
    1. dependancy - (releated to Event) of the Event occurs the useEffect should be called


### Optional Chaining

Optional chaining: (?.)

The optional chaining operator (?.) enables you to 
read the value of a property located deep within a 
chain of connected objects without having to 
check that each reference in the chain is valid.

The ?. operator is like the . chaining operator, 
except that instead of causing an error if a reference 
is nullish (null or undefined), the expression returns 
a value of undefined. 

When used with function calls, 
it returns undefined if the given function does not exist.

Example:

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// output: undefined

console.log(adventurer.someNonExistentMethod?.());
// output: undefined