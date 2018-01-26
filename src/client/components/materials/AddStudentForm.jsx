import React, {Component} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import { FormControl, FormHelperText } from 'material-ui/Form';
import AddButton from './AddButton';

export default class AddStudentForm extends Component {
  state = {
    open: false,
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    phone: '',
    imgURL: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleCancel = () => {
    this.setState({
      open: false,
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      phone: '',
      imgURL: '',
    });
  };

  onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    const {nameError, emailError} = this.state;

    if(nameError && id === 'name' && value.length >= 2) {
      this.setState({
        nameError: '',
        [id]: value,
      })
    } else if(emailError && id === 'email' && value.indexOf('@') > 0) {
      this.setState({
        emailError: '',
        [id]: value,
      })
    } else {
      this.setState({
        [id]: value,
      })
    }
  }

  validate = () => {
    const errors = {};

    if(!this.state.name) {
      errors.present = true;
      errors.nameError = 'Name is required';
    }
    
    if(this.state.name && this.state.name.length < 2) {
      errors.present = true;
      errors.nameError = 'Name must be at least 2 characters'
    }
    
    if(!this.state.email) {
      errors.present = true;
      errors.emailError = 'Email is required';
    }

    if(this.state.email.indexOf('@') === -1) {
      errors.present = true;
      errors.emailError = 'Please enter a valid email'
    }

    if(errors.present){
      this.setState({...this.state, ...errors})
    }

    return errors;
  }

  onSubmit = (e) => {
    const errors = this.validate();

    if(errors.present) {
      return;
    } else {
      const {name, email, phone, imgURL} = this.state;
      const data = {name, email, phone, imgURL};
      alert(`Successfully added new student ${name}!`)
      this.handleCancel();
    }
  }


  render() {
    const {nameError, emailError} = this.state;
    return (
      <div>
        <AddButton onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleCancel}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Student Form</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus={
                nameError
                ? true
                : true
              }
              margin="dense"
              id="name"
              helperText={
                nameError
                ? nameError
                : null
              }
              error={
                nameError
                ? true
                : false
              }
              type="text"
              required
              onChange={this.onChange}
              fullWidth
              label="Name"
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              required
              onChange={this.onChange}
              fullWidth
              autoFocus={
                nameError
                ? false
                : emailError
                ? true
                : false
              }
              helperText={
                emailError
                ? emailError
                : null
              }
              error={
                emailError
                ? true
                : false
              }
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone"
              type="text"
              placeholder="xxx-xxx-xxxx"
              onChange={this.onChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="imgURL"
              label="Image URL"
              type="text"
              onChange={this.onChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubmit} color="primary">
              Add Student
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
