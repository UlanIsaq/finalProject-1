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

    const innerDiv = document.createElement('div');

    this.$rootElement.append(innerDiv)
    const year = new Date();
    const b = document.createElement('b')
    b.textContent = `${'$'}${this.state.amount}`
    innerDiv.textContent = `${this.state.date.toLocaleDateString('en-GB')}, ${this.state.date.toLocaleTimeString()} - `;
    innerDiv.appendChild(b)
    const deleteButton = document.createElement('button');

    deleteButton.type = 'button';
    deleteButton.textContent = "Delete";
    deleteButton.className = 'delete-button'
    deleteButton.onclick = () => {
      this.deleteItem(this.props.amount)
    };

    this.$rootElement.append(deleteButton)


  }

  deleteItem(amount) {
    const itemDelete = document.querySelector('span')
    const total = Number(itemDelete.textContent.split(': ')[1].trim()) - amount;

    itemDelete.textContent = `Итого: ${total}`;
    this.$rootElement.remove();
  }
}
