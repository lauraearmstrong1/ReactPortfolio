import React from "react";

const Contact = () => {

  return (
    <div>
      <div className="row">
        <div className="col-sm-3 d-flex justify-content-start">
          <div className="contact-info ml-3">
            <p id="contact">I would love to hear from you!</p><br />
            <p id="info"><i className="fa fa-envelope"></i> lauraearmstrong1@gmail.com</p>
            <p id="info"><i className="fa fa-mobile-phone fa-lg"></i> 864.993.9027</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="contact-form">
            <div className="form-group">
              <label className="control-label col-sm-3" for="fname">First Name:</label>
              <div className="col-sm-12">
                <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3" for="lname">Last Name:</label>
              <div className="col-sm-12">
                <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="email">Email:</label>
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="comment">Comment:</label>
              <div className="col-sm-12">
                <textarea className="form-control" rows="5" id="comment"></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-12">
                <button id="submit" type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
