import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';

import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Register from './components/Register/Register';

const particleOptions = {
  particles:{
    number:{
      value:30,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

const initialState = {
  input: '',
  imageURL : '',
  box : {},
  route : 'signin',
  isSignedIn : false,
  user : {
    id : '',
    name : '',
    email: '',
    entries : '',
    joined : ''
    
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

  //connection Front end with backend
  // componentDidMount(){
  //   fetch('http://localhost:3001')
  //   .then(response=>response.json())
  //   .then(console.log)
  // }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) =>{
    console.log(box)
    this.setState({box:box})
  }

  InputChange = (event) => {
    this.setState({input:event.target.value});
  
  }

  onButtonSubmit = () =>{
    this.setState({imageURL: this.state.input});
      fetch('https://whispering-scrubland-50063.herokuapp.com/imageUrl',{
        method: 'POST',
          headers : {'Content-Type': 'application/json'},
          body: JSON.stringify({
              imageUrl: this.state.input
          })
      })
      .then(response=>response.json())
      .then(response=>{
        if(response){
          fetch('https://whispering-scrubland-50063.herokuapp.com/image',{
            method: 'PUT',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
          })
          .then(response1=>response1.json())
          .then(count=>{
            //Object.assign is function to change a single element in a object without changing other
            this.setState(Object.assign(this.state.user,{entries:count})) 
          })
          .catch(console.log);
          
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
    .catch(err=>console.log(err))
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState(initialState)
    }else if(route === 'home'){
      this.setState({isSignedIn : true})
    }
    this.setState({route : route})
  }

  loadUser = (data) => {
    this.setState({
        user : {
          id : data.id,
          name : data.name,
          email: data.email,
          entries : data.entries,
          joined : data.joined
        }
    })
  }

  render(){
    return (
      
      <div className="App">
          <Particles className='particles'
            params={particleOptions}/>
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
          {
            this.state.route === 'home' ?
            <div>
              <Logo/>
              <Rank user={this.state.user}></Rank>
              <ImageLinkForm onInputChange={this.InputChange} onSubmit={this.onButtonSubmit}/>
              <FaceRecognition 
              ImageURL={this.state.imageURL} box={this.state.box}></FaceRecognition>
            </div>
            :
            (
              this.state.route === 'signin' ?
              <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}  />
              :
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
          }
      </div>
    );
  }
  
}
export default App;

//"homepage": "https://Meabhishek.github.io/image-recognition",