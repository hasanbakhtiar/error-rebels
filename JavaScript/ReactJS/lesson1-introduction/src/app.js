import React from 'react';
import  ReactDOM  from 'react-dom';


class App extends React.Component{
    render(){
        return <>
         <h1>Hello React</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex odio atque deleniti eum omnis quam unde dolores non illo eligendi maxime eos eius molestiae facilis ipsa nobis, fugiat doloremque ut!</p>
         
        </>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));