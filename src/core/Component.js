export class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.$rootElement = null;
    if (this.constructor === Component) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.setup(props);
  }

  setup() {
    throw new Error("Method 'setup' must be implemented by derived classes");
  }

getisValid = () => {
  if(this.state.amount >= 1 && this.state.amount <= 100) {
    return  true;
  } else {
    return false; }

}
  
setisValid = (bool) => {
   this._isValid=bool;
}

}
