
import React from "react";
import "./style.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (

      <div>
      <div className="container-sm contain">
          <div className="row">
              <div className="col-md-12">
                  <div className="page-header">
                      <h1 className="text-center">Contact</h1>
                      <div className="my-4"> </div>
                  </div>
  
              </div>





      <form className=""
        onSubmit={this.submitForm}
        action="https://formspree.io/f/meqpnaoy"
        method="POST"
        >
        <div className="row">
        

        <label>Email:  </label>

        <input type="email" name="email" />
        
       

        </div>
        <div className="row">

        <label>Phone Number: </label>
        <input type="text" name="phoneNumber" />
        </div>
        <div className="row">

        <label>Message: </label>
        <input type="text" name="message" />
        </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    
          </div>
    
          </div>
 
          </div>


       

    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
export default Contact;