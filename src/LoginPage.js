import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === '123456') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
      <div style={{ marginTop: '140px' }} className="row">
        <div className="col-md-6 col-xs-8 col-md-offset-3">
          <div className="panel panel-primary">
            <div className="panel-heading" style={{ fontSize: '20px' }}>
              <span style={{ color: 'black', fontWeight: 'bold' }}>V</span>endor
              <span style={{ color: 'black', fontWeight: 'bold' }}>B</span>illing
            </div>
            <div className="panel-body">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <strong>Please fill in your credentials to login.</strong>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <span className="glyphicon glyphicon-envelope"></span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <span className="glyphicon glyphicon-lock"></span>
                    </div>
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      className="input-group-addon"
                      onMouseDown={() => setPasswordVisible(true)}
                      onMouseUp={() => setPasswordVisible(false)}
                      title="Click and hold to view password"
                      style={{ cursor: 'pointer' }}
                    >
                      <span
                        className={`glyphicon ${
                          passwordVisible ? 'glyphicon-eye-open' : 'glyphicon-eye-close'
                        }`}
                      ></span>
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary pull-right">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <img
            src="images/shadow1.png"
            className="img-responsive"
            style={{ marginTop: '-20px' }}
            alt="shadow"
          />
        </div>
      </div>
  );
}

export default LoginPage;
