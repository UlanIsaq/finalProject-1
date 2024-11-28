import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {

    this.state.amount = '';


    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';
    const formLabelHTML = document.createElement('label');
    formLabelHTML.id = 'total';
    formLabelHTML.className = 'donate-form__input-label'

    const h1header = document.createElement('h1');
    h1header.textContent = "Введите сумму в $"
    this.$input = document.createElement('input');
    this.$input.type = 'number';
    this.$input.max = '100';
    this.$input.min = '1';
    this.$input.required = true;

    this.$input.name = 'amount';
    this.$input.className = 'donate-form__donate-input'


    formLabelHTML.append(this.$input)
    this.$button = document.createElement('button');
    this.$button.type = 'submit';
    this.$button.textContent = "Задонатить";
    this.$button.className = 'donate-form__submit-button'
    this.$button.disabled = true;
    this.$rootElement.append(h1header, formLabelHTML, this.$button)

    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
    console.log(this.$input)

  }

  handleInput(event) {
    console.log(event.target.value)
    this.state.amount = event.target.value;
    console.log(this.state.amount)
    console.log('Valid number', this.getisValid())

    const disabled = this.getisValid()
    this.$button.disabled = !disabled;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.getisValid)
    if (this.getisValid()) {
      console.log(this.getisValid)
      this.state.amount = this.state.amount;
      this.$input.value = '';
    }


    this.props.onSubmit(Number(this.state.amount))
  }
}
