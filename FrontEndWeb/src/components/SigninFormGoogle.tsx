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

function Signin() {
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
                <MDBBtn className="mb-0 px-5 custom-login-button" style={{ position: 'absolute', top: '30px', right: '20px', borderRadius: '30px' }} size='lg'>Log in</MDBBtn>
                </div>
              </div>
              <h2 className="fw-bold mb-2 text-uppercase">Sign in</h2>
              <p className="fw-bold mb-4">
                <span style={{ width : "300px", color: 'black' }}>Get </span>
                <span style={{ color: 'green' }}>started.</span>
              </p>
              <MDBBtn className="mb-4 w-100 narrow-input" size="lg" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100 narrow-input" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
              </MDBBtn>
              {/* Social Media Buttons */}
              <div>
                <p className="mb-2">Or use your email to <a href="#!" className="text-green-50 fw-bold"><span style={{ color: 'green' }}>Sign Up</span></a></p>

              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Signin;