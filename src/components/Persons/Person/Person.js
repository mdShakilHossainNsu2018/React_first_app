import React, { Component , Fragment } from 'react';
import withClass from '../../../hoc/withClass';
import PropType from 'prop-types'
import AuthContext from '../../../context/auth-context';
import classes from './Person.css';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    static contextType = AuthContext;
    render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
          {this.context.authenticated ? <p>authenticated</p>:<p>please login</p>}

        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes =  {
    click: PropType.func,
    name: PropType.string,
    age: PropType.number,
    change: PropType.func
};

export default withClass(Person, classes.Person);
