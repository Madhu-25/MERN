/*const el = document.createElement("h1");
el.innerText = "Hello world";

document.body.prepend(el);

function clock()
{
    const el = (
        <div> 
            <h1> Clock</h1>
            <p>It is { new Date().toLocaleTimeString()} </p>  
            <input /> 
        </div>
    );

    ReactDom.render(el, document.getElementById("root")); // It is and { ... } two separate text nodes in DOM


}


setInterval(clock, 1000); //1second

function helloMessage()
{
    return <h1>Hello there!</h1>;
}

ReactDom.render(helloMessage(), document.getElementById("root"));


// virtual dom => the ReactDom creates a copy of the original dom (html page)
// for every call and compares the original with the copy.
//it only replaces the contents which have changed in the copy to the original
//here only the date changes so only that part gets updated everytime
//not the whole document object.

//The html tags used here -> jsx
//class attritube in html is specified and className in jsx


//ReactDom.render(null, document.getElementById("root"));


import React, {useEffect, useState} from "react";
import ReactDom from "react-dom";
const reactDom = require("react-dom");

//parent component

function App()
{
    //state is a variable; to use state import hook

    //component update - when a state variable (or value in a component) changes.
    //component mount - when the component is loaded onto the browser
    
   const [message, setMessage] = useState("Hello world"); //set value using arg
   console.log(message);

    useEffect(() => {
        setTimeout(() => {
        setMessage(Math.random().toString());
        },2000);
    }, []);  //[message] - dependancy list , ie if only the state var in the list changes the funtion will run again
    //empty dependancy list means the function will only be in effect once - component mount side effect
   
    return(
    <div>
        
        <Welcome user="John" key_message={message}/>
        <Welcome user="Julie" key_message={message}/>    
        <Welcome user="Emily" key_message={message}/> 

    </div>
    );
}

//function component
function Welcome(porps) //parameter, it is read only
{    
    return <><h1>Welcome {porps.user} to this site</h1>
    <p>{porps.key_message}</p> </>
    
     
}   //if we dynamically change the variable name it will automatically
                                                    //update
ReactDom.render(<App />, document.getElementById("root"));

/*
const name= 'Jon Doe';
ReactDom.render(<Welcome user={name} />, document.getElementById("root"));  //passing funtion into a tag => tells react to render the func as a component
user -> key
name ->property
const el = (<div>
    <Welcome user="John" />
    <Welcome user="Julie" />    
    <Welcome user="Emily" />

    </div>);   //reusing components

//to store multiple elements in one variable u need a parent
//element , in this case <div>

ReactDom.render(el, document.getElementById("root"));

// class component -> not preferred 

class WelcomeMessage extends React.Component{
    name="jane"
    render(){
        return <h3>hello {this.name} </h3>
    }
}


import React, {useState} from "react";
import ReactDom from "react-dom";

function App()
{
    const [showMessage, setshowMessage] = useState(false);
    function onClick()
    {
        setshowMessage(!showMessage);
    }
    

    let message;

    if(showMessage)
        message = <Message/>;  //alternate given below
    return (
        <>
        
        <button onClick={onClick}>Click me</button>
        {showMessage && <Message message="Toggled on"/>} 
        {!showMessage && <Message message="Toggled off"/>} 
        </>
    );
    return (
        <>
        
        <button onClick={onClick}>Click me</button>
        {showMessage ? <Message message="Toggled on"/> : <Message message="Toggled off"/> //ternary operator 
        } 
        
        </>
    );
}

//you cannot write if statement inside a return statement 
// { showMessage && <Message />} acts like an if statement , It checks if showMessage is true and runs the component on the right side

function Message(porps)
{
    return <p>{porps.message}</p>;
}*/
import React, {useEffect, useState} from "react";
import ReactDom from "react-dom";
/*
function App()
{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    }, []);

    return ( <> 
    <Clock time={time}/> 
    <Hello/>
    </>);

}

function Hello()
{
    return <h1>Heyyy!!</h1>;
}

function Clock(props)
{
    return <p>It's currently : {props.time} </p>;
}

//ReactDom.render(<Clock time={new Date().toLocaleTimeString()} />, document.getElementById("root")); 

ReactDom.render(<App />, document.getElementById("root")); 


function App()
{
    const snippets=[
        {
            title : "Snippet 1"
        },
        {
            title : "Snippet 2"
        },
        {
            title : "Snippet 3"
        }
        
    ];

    //array of elements, each element should have a key to uniquely identify it

    function renderSnippets(){
        /*
        const elements = [ 
            <p key="0">hello</p>,
            <p key="1">Hola</p>,
            <p key="2">adios</p>
        ];
        return elements; 

        return snippets.map((snippet, i) => {
            return <Snippet title={snippet.title} key={i} />
        });
    }
    return(
        <>
        {renderSnippets()}
        </>    );
}

function Snippet(props){
    return <h1>{props.title}</h1>;
}


function App()
{
    const [formUsername, setFormUsername] = useState("");
    const [formPassword, setFormPassword] = useState("");
    function sendData(e)
    {
        
        //console.log("Sending data");
        e.preventDefault();   //prevents default behaviour of event e
        //sending data

        setFormPassword("");
        setFormUsername("");

    }
    return (
    <>
        <form onSubmit={sendData}>
            <input type="text" placeholder="username" onChange={(e) => setFormUsername(e.target.value)} value={formUsername}/><br></br>
            <input type="password" placeholder="password" onChange={(e) => setFormPassword(e.target.value)} value={formPassword}/><br></br>
            <button type="submit">Log in</button>
        </form>
     </>
    );
}
*/

function App()
{
    
    const [messageShown, setmessageShown] = useState(false);

    

    // useEffect(() =>
    // {
    //     console.log("component updating");
    // });  //when there dependancy array is not included the function is triggered whenever there is a change in state

    // useEffect(() =>{
    //     console.log("Specific state update ");

    // }, [messageShown]);

    return (
        <>
       
        <button onClick={() => setmessageShown(!messageShown)}>Toggle message</button>
        {messageShown && <> <Random/><p>Some Message</p></>}
        </>
    );
}

function Random()
{
    const [randomNumber, setRandomNumber] = useState(Math.random());
    useEffect(() =>{
        console.log("Component mount");
        const interval_id = setInterval(() =>{ setRandomNumber(Math.random());
        console.log("Setting new random number");},1000);

         return () => {
            console.log("Component unmount");
             clearInterval(interval_id);

         };
    }, []);

    return <h1>{randomNumber}</h1>;

}
ReactDom.render(<App />, document.getElementById("root"));
