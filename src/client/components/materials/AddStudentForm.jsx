import React, {Component} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import AddButton from './AddButton';

export default class AddStudentForm extends Component {
  state = {
    open: false,
    success: false,
    name: '',
    email: '',
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
      email: '',
      phone: '',
      imgURL: '',
    });
  };

  onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    this.setState({
      [id]: value,
    })
  }

  onSubmit = (e) => {
    const data = {...this.state}
    delete data.open
    alert(`Successfully added new student ${this.state.name}!`)
    this.setState({open: false})
  }


  render() {
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
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              required
              onChange={this.onChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              required
              onChange={this.onChange}
              fullWidth
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
