import React from 'react'
import ReactDOM from 'react-dom'

var tweets = ['hello','goodbye','lol']
class Test extends React.Component{
    render(){
        return(
            <React.Fragment>
            <ul>
                {tweets.map((tweet,index)=> (
                  <li key={index}>
                      {tweet}
                  </li>  
                ))}
            </ul>

            </React.Fragment>
        )
    }
}

export default Test;