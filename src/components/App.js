import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {

  setup(props) {

    this.state = {
      total: 0,
      donates: [],
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const h1HTMLelement = document.createElement('h1');
    const spanHTMLelement = document.createElement('span');
    spanHTMLelement.textContent = `Итого: ${this.state.total}`;
    this.spanHTMLelement = spanHTMLelement;
    h1HTMLelement.appendChild(spanHTMLelement)
    this.$total = spanHTMLelement;

    this.$rootElement.appendChild(h1HTMLelement)

    this.$rootElement.append(document.createElement('br'))

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;


  }


  onItemCreate(amount) {
    const item = new ListItem({ amount: amount });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += amount;
    this.spanHTMLelement.textContent = `Итого: ${this.state.total}`;
  }


}
