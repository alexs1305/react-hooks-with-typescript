# Some samples of using useState and useEffect within a react app with typescript

## Running the project

To start this project
* Pull down the repo
* Go into the repo
* Open command line or terminal
* run `npm i`
* run `npm start`

# Examples


below are some brief explanations of the two hooks

useState
=======
```ts
let [name, setName] = useState("defaultName")
```

vs 
```ts
interface State {
  name:string
}

class A extends React.Component<any,State>{
state = {
  name:"defaultName"
}
...
render(){
  let {name} = this.state;
  let setName = (name:string)=> this.setState({name:name})
} 
...
}
```

with useState the first item in the array is the state object, by default it will be undefined until set. There are two main use cases that you have here 
```ts
let [name, setName] = useState()
```
or
```ts
let [name, setName] = useState("name")
```
in this second case we are setting a default value for the state

### Objects as the state object

You might be more familiar with a state object and then setting parts of this. like So

```ts
interface State {
    name:string,
    age:number
}

...
setState({name:"something"})
...
setState({age:21})
```

if so you might be in for a shock if you did a straight swap to useState as when you call the set state function you will be overwriting the entire object rather than just the props you have passed in 

```ts
let [state, setState] = useState({name:"u1", age:21})
setState({name:"crazy dude"})
``` 
in the above example we overwrite the age prop. You can handle this how you like, either use multiple useState functions for each prop or remember to spread the current value of the state each time you update

useEffect
=========
a function that runs each mount, render and unmount. With certain controls we can limit the amount of times it is called

```ts
useEffect(()=>{
    console.log("called")
})
``` 

if we ran this what we would see in the debug console is called output 2 times. To get this to call a cleanup method (one that is run on the unmount) we need our function to return a function (at the moment it is a void)

```ts
useEffect(()=>{
    console.log("called")
    return ()=>{
        console.log("unmounting")
    }
})
```

whats left now is to make sure we can control when this runs. We can use the second argument to `useEffect` to do this

```ts
...
const component = ({name})=>{
useEffect(()=>{
    console.log("called")
    return ()=>{
        console.log("unmounting")
    }
}, [name])
...
```

what happens now is that this hook will only be called when the prop `name` changes 
