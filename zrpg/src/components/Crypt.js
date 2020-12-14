import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { initiateUpdateProfile } from '../actions/profile';
import { validateFields } from '../utils/common';
import { resetErrors } from '../actions/errors';

class Crypt extends React.Component {
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
          <div className="crypt">
            <section> 
                
                <h2> Crypt </h2>
                <p> Venture forth into the crypts to battle undead </p>
                <button onClick={handleClick}>
                    Onward!
                  </button>
            </section>
          </div>
        );
      }
    }

    const mapStateToProps = (state) => ({
        errors: state.errors
      });
      
      export default connect(mapStateToProps)(Crypt);
    