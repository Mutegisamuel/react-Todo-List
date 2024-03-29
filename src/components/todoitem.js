import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {

        const {id,tittle } = this.props.todo; 

        return (
            <div style = {this.getStyle()}>
                <p>
                    <input style = {{ cursor: 'pointer'}} type="checkbox" onChange = {this.props.markComplete.bind(
                        this,id
                    )}/> {' '}
                {tittle}
                <button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// * prop types
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
  }

  const btnStyle = {
      background: '#ff0000',
      color: '#ffffff',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
  }

 

export default Todoitem;
