import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { initiateUpdateProfile } from '../actions/profile';
import { validateFields } from '../utils/common';
import { resetErrors } from '../actions/errors';

class Market extends React.Component {
    state = {
      first_name: '',
      last_name: '',
      email: '',
      errorMsg: '',
      isSubmitted: false
    };

    render() {
        const { errorMsg, first_name, last_name, email, isSubmitted } = this.state;


        function handleClick(e) {
          e.preventDefault();
          console.log('The link was clicked.');
        }


        return (
          <div className="market">
            <section> 
                
                <h2> Market </h2>
                <p> Browse through the stalls in an open-air market </p>
                <button onClick={handleClick}>
                    Proceed
                  </button>
            </section>
          </div>
        );
      }
    }

    const mapStateToProps = (state) => ({
        errors: state.errors
      });
      
      export default connect(mapStateToProps)(Market);
    