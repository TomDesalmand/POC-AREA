import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

import logoImage from '../image/Pasted-image.png'; // Import your image here

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '90vh' }}>
      <MDBContainer>
        <MDBRow>
          <MDBCol col='12'>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto'>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img src={logoImage} alt="Logo" style={{ width: '191px', position: 'absolute', top: '30px', left: '10px' }} />
                <h2 className="fw-bold mb-2 text-uppercase" style={{ marginLeft: '160px', position: 'absolute', top: '50px', left: '0.1px' }}>
                  <span style={{ color: 'black' }}>Welcome to </span>
                  <span style={{ color: 'green' }}>Area.</span>
                </h2>
                <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn className="mb-0 px-5 custom-login-button" style={{ position: 'absolute', top: '30px', right: '20px', borderRadius: '30px' }} size='lg'>Sign in</MDBBtn>
                </div>
              </div>
              <h2 className="fw-bold mb-2 text-uppercase">Log in</h2>
              <p className="fw-bold mb-5">
                <span style={{ width : "300px", color: 'black' }}>Connect </span>
                <span style={{ color: 'green' }}>yourself.</span>
              </p>
              <MDBInput wrapperClass='mb-4 narrow-input' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 narrow-input' label='Password' id='formControlLg' type='password' size="lg"/>
              <p className="small mb-3 pb-lg-2"><a className="text-50" href="#!">Forgot password?</a></p>
              <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5 custom-login-button" size='lg'>Log in</MDBBtn>
              </div>
              {/* Social Media Buttons */}
              <div className='d-flex flex-row mt-3 mb-5'>
                <button className='btn btn-light m-3'>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </button>
                <button className='btn btn-light m-3'>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </button>
                <button className='btn btn-light m-3'>
                  <MDBIcon fab icon='google' size="lg"/>
                </button>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;