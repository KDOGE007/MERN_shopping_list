import React, { Component } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItem, editItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems()
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id)
  }
  onEditClick = (id) => {
    const newName = prompt('Edit Item')
    const newItem = {
      name: newName,
    }
    if (newName) {
      this.props.editItem(newItem, id)
    }
  }
  crossLine = (event) => {
    console.log(event.target)
    const element = event.target
    if (event.target.type !== 'button') {
      element.classList.toggle('crossed-line')
    }
  }

  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal,
  //     name: '',
  //   })
  // }

  // onChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  // onSubmit = (e) => {
  //   e.preventDefault()

  //   //Pass Edited Item
  //   const newItem = {
  //     _id: this.state._id,
  //     name: this.state.name,
  //   }

  //   //Add item via addItem actions
  //   this.props.editItem(newItem)

  //   //Reset back State
  //   this.setState({
  //     modal: !this.state.modal,
  //     _id: null,
  //     editValue: '',
  //   })

  //   //Recall GET request to refresh all items
  //   this.props.getItems()
  // }

  // onEditClick = ({ _id, name }) => {
  //   this.setState({
  //     modal: !this.state.modal,
  //     _id: _id,
  //     name: name,
  //   })
  // }

  render() {
    const { items } = this.props.item
    return (
      <Container>
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Edit Item </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder={this.state.name}
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color='dark' style={{ marginBottom: '2rem' }} block>
                Edit Item
              </Button>
            </Form>
          </ModalBody>
        </Modal> */}
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem onClick={this.crossLine}>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  <Button
                    className='edit-btn'
                    size='sm'
                    color='warning'
                    onClick={this.onEditClick.bind(this, _id)}
                  >
                    &hellip;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item,
})

export default connect(mapStateToProps, { getItems, deleteItem, editItem })(
  ShoppingList
)
