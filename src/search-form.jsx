
'use strict';
var React = require('react');
var SearchForm = React.createClass({
  /**
   * Sets the default state of this component.
   * https://facebook.github.io/react/docs/component-specs.html#getinitialstate
   */
  getInitialState: function() {
    return {
      type: 'info',
      message: ''
    };
  },
  /**
   * Form submission callback.
   */
  handleSubmit: function (event) {
    event.preventDefault();
    // Scroll to the top of the page to show the status message.
    document.getElementById('heading').scrollIntoView();
    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
  },
  /**
   * Submits form data to the web server.
   */
  sendFormData: function () {
    // Prepare form data for submitting it.
    var formData = {
      search: React.findDOMNode(this.refs.search).value
    };


    // Send the form data.
    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });
        }
        else {
          _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later or send us an email at info@example.com.' });
        }
      }
    };
    xmlhttp.open('POST', 'send', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(formData));
  },
  /**
   * Transforms an object into a URL querystring.
   *
   * @param object params
   * @return string the formatted querystring.
   */
  requestBuildQueryString: function (params) {
    var queryString = [];
    for(var property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
    return queryString.join('&');
  },
  /**
   * Extracts selected values from checkboxes and radios.
   *
   * @param string fieldName
   * @return string the selected value(s).
   */
  getSelected: function (fieldName) {
    var i;
    var fields = document.getElementsByName(fieldName);
    var selectedFields = [];
    for (i = 0; i < fields.length; i++) {
      if (fields[i].checked === true) {
        selectedFields.push(fields[i].value);
      }
    }
    return selectedFields.join(', ');
  },
  /**
   * Renders the component.
   * https://facebook.github.io/react/docs/component-specs.html#render
   */
  render: function() {
    if (this.state.type && this.state.message) {
      var classString = 'alert alert-' + this.state.type;
      var status = <div id="status" className={classString} ref="status">
                     {this.state.message}
                   </div>;
    }
    return (
      <div>
        <h1 id="heading">React contact form example: Tell us about your project</h1>
        <p>This is the companion application for an article on <a href="https://www.lullabot.com/articles/processing-forms-in-react" target="_blank">Processing Forms in React</a>.</p>
        <p>The application contains a sample contact form powered by <a href="https://facebook.github.io/react/" target="_blank"> React</a>,
           an <a href="https://www.lullabot.com/articles/what-is-an-isomorphic-application" target="_blank">isomorphic</a> library built by Facebook. The form submission
           is handled by a <a href="https://nodejs.org/" target="_blank">Node.js</a> application written with <a href="http://expressjs.com/" target="_blank">Express</a>.</p>
        {status}
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your full name *</label>
            <input className="form-control" name="search" ref="search" required type="text" />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">Send your project info</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = SearchForm;
