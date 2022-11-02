import React, { Component } from "react";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    address: "",
    city: "",
    phone: "",
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.state({
      step: step + 1,
    });
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.state({
      step: step - 1,
    });
  };
  // handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, password, age, address, city, phone } =
      this.state;
    const values = {
      firstName,
      lastName,
      email,
      password,
      age,
      address,
      city,
      phone,
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            value={values}
          />
        );
      case 2:
        return (
          <h1 className="text-center text-3xl ">Form personal details</h1>
        );
      case 3:
        return (
          <h1 className="text-center text-3xl ">Confirm</h1>
        );
      case 4:
        return (
          <h1 className="text-center text-3xl ">Success</h1>
        );
    }
  }
}

export default UserForm;
