import { Component } from '../core/Component';

export class List extends Component {
 
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    this.$h2HTML = document.createElement('h2');
    this.$h2HTML.textContent = 'List of donated people'
    this.$h2HTML.className = 'donates-container__title'
    this.$divHTML = document.createElement('div');
    this.$divHTML.className = 'donates-container__donates' 

    this.$divHTML.append(this.$h2HTML);
    this.$rootElement.append(this.$divHTML);
    this.$listContainer = this.$divHTML;
   
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement)
  }
}