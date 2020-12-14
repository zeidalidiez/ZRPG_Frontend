import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { initiateUpdateProfile } from '../actions/profile';
import { validateFields } from '../utils/common';
import { resetErrors } from '../actions/errors';

class Cathedral extends React.Component {
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
          <div className="cathedral">
            <section> 
                
                <h2> Cathedral </h2>
                <p> Heal for 20 zenny </p>
                <button onClick={handleClick}>
                    Heal
                  </button>
            </section>
          </div>
        );
      }
    }

    const mapStateToProps = (state) => ({
        errors: state.errors
      });
      
      export default connect(mapStateToProps)(Cathedral);
    