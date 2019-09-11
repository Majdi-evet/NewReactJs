import React from 'react';
import { Component } from 'react'

import { createApolloFetch } from 'apollo-fetch';


const TITLE = 'React GraphQL GitHub Client';


 
/* const uri = 'https://api.github.com/graphql';
 
const query = `
  query sampleQuery(id: ID!) {
    sample(id: $id) {
      id,
      name
    }
  }
` */
  
  /* alert(JSON.stringify(data));
  console.log(JSON.stringify(data)); */
  /* alert(JSON.stringify(data)); */
  /* return JSON.stringify(data); */


const uri = 'http://127.0.0.1:8000/graphql/';
 
const query = `
query{
  salgql{
      id
      album
      artist
      song
  }
}
` 



export default class Api extends Component{
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    const apolloFetch = createApolloFetch({ uri });

apolloFetch({ query })
.then( result => {
  const { data, error, extensions } = result;
  /* alert(JSON.stringify(data)); */
   this.setState({
    isLoading: false,
    dataSource: data.salgql,
  }, function(){
 /* alert(JSON.stringify(data.salgql[0]))   */
  });
})
.catch(error => {

})
  }

  
  render(){
    if (this.state.isLoading) {
      return <span>Loading...</span>
    }
    else{
  return (
    <div className="Api">
      <div>
      <ul>
      {this.state.dataSource.map((user) => (
        <li>{user.album}</li>
      ))}   
    </ul>
      

        
      </div>
    </div>
  );}

}
}
