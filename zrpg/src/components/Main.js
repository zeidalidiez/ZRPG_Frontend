import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { initiateUpdateProfile } from '../actions/profile';
import { validateFields } from '../utils/common';
import { resetErrors } from '../actions/errors';

class Main extends React.Component {
    state = {
      first_name: '',
      last_name: '',
      email: '',
      errorMsg: '',
      isSubmitted: false
    };

    render() {
        const { errorMsg, first_name, last_name, email, isSubmitted } = this.state;
        return (
          <div className="maingame">
            <section> 
                
                <h2> Main game screen</h2>
                <p> Welcome to the game - please proceed to the cathedral to receive healing, to the market to make purchases or to the crypt to engage in battle.  </p>

                <Button href="/Cathedral"> Cathedral </Button>
                <Button href="/Crypt"> Crypt </Button>
                <Button href="/Market"> Market </Button>


            </section>
          </div>
        );
      }
    }

    const mapStateToProps = (state) => ({
        errors: state.errors
      });
      
      export default connect(mapStateToProps)(Main);
    