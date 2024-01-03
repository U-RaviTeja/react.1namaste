/*

<div id "parent">
    <div>
    <h1> "Iam a h1 tag<h1/>
    <h2> I'M h2 Tag<h2/>
    </div>
</div>
<div id "child2">
    <div>
    <h1> "Iam a h1 tag<h1/>
    <h2> I'M h2 Tag<h2/>
    </div>
</div>

ReactElement (creats = object) => HTML(Browser Understands);
*/

 const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child"},
    [React.createElement("h1", {id:""}, "I'M an h1 Tag"),
    React.createElement("h2", {id:""}, "I'M an h2 Tag")
  ]),
    React.createElement("div", {id:"child"},
    [React.createElement("h1", {id:""}, "I'M an h1 Tag"),
    React.createElement("h2", {id:""}, "I'M an h2 Tag")
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//=======================================================================================

// const heading = React.createElement("h1" ,      // THIS CREATES AN ELEMENT IN CONSOLE
//  {id: "heading" , xyz :"abc"} ,       //ATTRIBUTES & PROPS
//  "Hello World from React!!");        //CHILDREN

//    console.log(heading);        //RETURNS OBJECT
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(heading);