import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    const olHTML= document.createElement('ol');
    const liHTML = document.createElement('li');
    olHTML.appendChild(liHTML);
    this.$rootElement.append(olHTML)
    const year = new Date();
    
    liHTML.textContent = `${this.state.date.toLocaleDateString('en-GB')}, ${this.state.date.toLocaleTimeString()} - ${this.state.amount}`;



  
  }
}
