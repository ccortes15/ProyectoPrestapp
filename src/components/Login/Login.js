import React from "react";
import { Button, FormGroup, FormControl, FormLabel, Card, FormText } from "react-bootstrap";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      
    }

    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    //this.handleRegister = this.handleRegister.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  setEmail(e){
    e.preventDefault();
    this.setState({
      email: e.target.value,
    })
  }

  setPassword(e){
    e.preventDefault();
    this.setState({
      password: e.target.value,
    })
  }

  render(){
    return (
        <div className="Login">
          <Card border="success" className="cardSize">
            <Card.Img variant="top" src="./logo2.PNG" roundedCircle/>
            <Card body>
              <Card.Title>Login</Card.Title>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="email" >
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={this.email}
                      onChange={ e => {this.setEmail(e)}}
                      placeholder="Ingresar correo"
                    />
                    <FormText className="text-muted">ej. name@gmail.com</FormText>
                  </FormGroup>
                  <FormGroup controlId="password">
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl
                      value={this.password}
                      onChange={e => (this.setPassword(e))}
                      type="password"
                      placeholder="Ingresar contraseña"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button block variant="success" disabled={!this.validateForm(this)} type="submit">
                      Ingresar
                    </Button>
                  </FormGroup>
                  <Link to="/Registro" >
                    <Button block variant="success" type="button">
                      Registro
                    </Button>
                  </Link>
                </form>
            </Card>
          </Card>
        </div>
    )
  };
};

export default Login;