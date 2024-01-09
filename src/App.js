import logo from './logo.svg';
import './App.css';
import Salad from './MyFunctions/Salad';
import Bacon from './MyFunctions/Bacon';
import Cheese from './MyFunctions/Cheese';
import Meat from './MyFunctions/Meat';
import React, { Component } from 'react'

class App extends Component {

  state = {
    salad:[],
    bacon:[],
    cheese:[],
    meat:[]
  }

  onIncrementSalad = () => {
    const newSalad = {value: "S", price:10};

    this.setState(prevState => ({
      salad: [...prevState.salad, newSalad]
    }));
  };

  onDecrementSalad = () => {
    this.setState(prevState=>({
      salad: prevState.salad.slice(0, -1)
    }));
  };

  onIncrementBacon = () => {
    const newBacon = {value: "B", price: 20};

    this.setState(prevState=>({
      bacon: [...prevState.bacon, newBacon]
    }));
  }

  onDecrementBacon = ()=> {
    this.setState(prevState=>({
      bacon: prevState.bacon.slice(0, -1)
    }));
  }

  onIncrementCheese = () => {
    const newCheese = {value: "C", price: 30};

    this.setState(prevState=>({
      cheese: [...prevState.cheese, newCheese]
    }));
  }

  onDecrementCheese = () => {
    this.setState(prevState=>({
      cheese: prevState.cheese.slice(0, -1)
    }));
  }

  onIncrementMeat = () => {
    const newMeat = {value: "M", price: 40};

    this.setState(prevState=>({
      meat: [...prevState.meat, newMeat]
    }));
  }

  onDecrementMeat = () => {
    this.setState(prevState=>({
      meat: prevState.meat.slice(0, -1)
    }));
  }

  CountPrice = ()=>{
    let totalPrice = 0;
    this.state.salad.forEach(salad => {
      totalPrice += salad.price;
    });
    this.state.bacon.forEach(bacon=>{
      totalPrice += bacon.price;
    });
    this.state.cheese.forEach(cheese=>{
      totalPrice += cheese.price;
    });
    this.state.meat.forEach(meat=>{
      totalPrice += meat.price;
    });
    return totalPrice;
  };

  render(){
    return (
      <div className="App">
        <h1>Current Price {this.CountPrice()}</h1>
        <Salad
          onIncrementSalad = {this.onIncrementSalad}
          onDecrementSalad = {this.onDecrementSalad}
          disabled = {this.state.salad.length === 0}
        ></Salad>
        <Bacon
          onIncrementBacon = {this.onIncrementBacon}
          onDecrementBacon = {this.onDecrementBacon}
          disabled = {this.state.bacon.length === 0}
        ></Bacon>
        <Cheese
          onIncrementCheese = {this.onIncrementCheese}
          onDecrementCheese = {this.onDecrementCheese}
          disabled = {this.state.cheese.length === 0}
        ></Cheese>
        <Meat
          onIncrementMeat = {this.onIncrementMeat}
          onDecrementMeat = {this.onDecrementMeat}
          disabled = {this.state.meat.length === 0}
        ></Meat>
        <h1>
          _
        </h1>
          {this.state.salad.map((s, index)=>(
            <li key = {index}>{s.value}</li>
          ))}
          {this.state.bacon.map((b, index)=>(
            <li key = {index}>{b.value}</li>
          ))}
          {this.state.cheese.map((c, index)=>(
            <li key = {index}>{c.value}</li>
          ))}
          {this.state.meat.map((m, index)=>(
            <li key = {index}>{m.value}</li>
          ))}
        <h1>
          _
        </h1>
      </div>
    );
  }
}

export default App;
