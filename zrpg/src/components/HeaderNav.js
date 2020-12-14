import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { initiateUpdateProfile } from '../actions/profile';
import { validateFields } from '../utils/common';
import { resetErrors } from '../actions/errors';

class HeaderNav extends React.Component {
    state = {
      first_name: '',
      last_name: '',
      email: '',
      errorMsg: '',
      isSubmitted: false
    };

    render() {
      return (
        <React.Fragment>
          <nav className="navbar navbar-dark bg-dark mb-3">
            <a className="navbar-brand" href="#">
              <h1>Total Items <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
            </a>
          </nav>
        </React.Fragment>
      );

      }
    }

    const mapStateToProps = (state) => ({
        errors: state.errors
      });
      
      export default connect(mapStateToProps)(HeaderNav);
    