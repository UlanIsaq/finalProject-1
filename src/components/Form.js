import { Component } from '../core/Component';

export class Form extends Component {
  constructor(props){
    props.onSubmit()
  }


  

  setup(props) {

    this.state.amount = '';
   

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';
    const formLabelHTML = document.createElement('label');
    formLabelHTML.id='total';
    formLabelHTML.textContent = "Введите сумму в $"
    this.$input = document.createElement('input');
    this.$input.type = 'text';
    this.$input.id = 'total';
    this.$input.name = 'total';

    this.$button = document.createElement('button');
    this.$button.type = 'submit';
    this.$button.textContent = "Задонатить";
   

    this.$rootElement.append(formLabelHTML, this.$input, this.$button)


    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit',this.handleSubmit)
  
   
  }

  handleInput(event) {
    console.log(event.target.value)
    this.state.amount = event.target.value;
    console.log(this.state.amount)
    console.log(this.getisValid())
    if(this.getisValid) {
      this.$button.disabled = false;
    } else  {
      this.$button.disabled = true;
      }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.getisValid)
    if(this.getisValid) {
      console.log(this.getisValid)
      this.state.amount = this.state.amount;
      this.$input.value = '';
    }
  
    
    this.props.onSubmit(Number(this.state.amount))
  }
}
