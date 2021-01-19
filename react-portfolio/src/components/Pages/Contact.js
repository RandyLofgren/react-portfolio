// import React from "react";
// import { Link, Route } from "react-router-dom";


// function Contact(props) {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>
//         Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
//         Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
//         pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
//         tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
//         posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec
//         metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula.
//         Nam tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora
//         torquent per conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus.
//         Etiam vel condimentum magna, quis tempor nulla.
//       </p>

//     </div>
//   );
// }

// export default Contact;


import React from "react";

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
      <form className="text-center"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/meqpnaoy"
        method="POST"
      >
        
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" />
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
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