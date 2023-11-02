import { Component } from "react";
import { Form, Col, Row, Dropdown, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class AccountPage extends Component {
  render() {
    return (
      <div>
        <main>
          <div className="container-fluid w-75">
            <h1>Account</h1>
            <hr />
            <div className="row justify-content-between">
              <div className="col-3">
                <h3 className="accounttext">MEMBERSHIP & BILLING</h3>
                <button className="btn accountButton footFont rounded-0 pe-4 ps-4">
                  Cancel Membership
                </button>
              </div>
              <div className="col-4 flex-grow-1">
                <ul className="list-unstyled">
                  <li className="fw-bold navFont">student@strive.school</li>
                  <li className="accounttext navFont">Password: ********</li>
                  <li className="accounttext navFont">Phone: 321 044 1279</li>
                </ul>
              </div>
              <div className="col-4 text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Change account email</li>
                  <li className="ulColor navFont">Change Password</li>
                  <li className="ulColor navFont">Change Phone Number</li>
                </ul>
              </div>
            </div>
            <hr className="w-75 ms-auto mb-1 mt-1" />
            <div className="row justify-content-end p-0">
              <div className="col-4">
                <ul className="list-unstyled">
                  <li className="fw-bold navFont">
                    <i className="bi bi-paypal navFont me-2">Paypal</i>
                    admin@strive.school
                  </li>
                </ul>
              </div>
              <div className="col-5 text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Update payment info</li>
                  <li className="ulColor navFont">Billing details</li>
                </ul>
              </div>
            </div>
            <hr className="w-75 ms-auto mb-1 mt-1" />
            <div className="row justify-content-between">
              <div className="col text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">
                    Redeem gift cards or promo code
                  </li>
                  <li className="ulColor navFont">Where to buy gift cards</li>
                </ul>
              </div>
            </div>
            <hr className="ms-auto mb-1 mt-1" />
            <div className="row justify-content-between align-items-center">
              <div className="col-3">
                <h3 className="accounttext">PLAN DETAILS</h3>
              </div>
              <div className="col-4 flex-grow-1 flex-row d-flex align-items-center">
                <h2 className="navFont mb-0">Premium</h2>
                <img
                  src="assets/media/Screenshot 2023-10-06 145710.png"
                  width="80"
                  height="25"
                />
              </div>
              <div className="col-4 text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Change plan</li>
                </ul>
              </div>
            </div>
            <hr className="ms-auto mb-1 mt-1" />
            <div className="row justify-content-between">
              <div className="col-3">
                <h3 className="accounttext">SETTINGS</h3>
              </div>
              <div className="col-4 text-start flex-grow-1">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Parental controls</li>
                  <li className="ulColor navFont">Test participation</li>
                  <li className="ulColor navFont">Manage download devices</li>
                  <li className="ulColor navFont">Activate devices</li>
                  <li className="ulColor navFont">
                    Recent device streaming activity
                  </li>
                  <li className="ulColor navFont">Sign out of all devices</li>
                </ul>
              </div>
            </div>
            <hr className="ms-auto mb-1 mt-1" />
            <div className="row justify-content-between">
              <div className="col-3">
                <h3 className="accounttext">MY PROFILE</h3>
              </div>

              <div className="col d-flex flex-row align-items-start mt-1">
                <img
                  src="assets/avatar.png"
                  width="25"
                  className="rounded-circle me-1"
                />
                <h2 className="navFont mt-1 mb-0">
                  <a
                    href="edit_account.html"
                    className="link-offset-2 link-underline link-underline-opacity-0 text-dark"
                  >
                    Strive Student
                  </a>
                </h2>
              </div>
              <div className="col text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Parental controls</li>
                  <li className="ulColor navFont">Test participation</li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-4 offset-3">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Language</li>
                  <li className="ulColor navFont">Playback settings</li>
                  <li className="ulColor navFont">Subtitle appearance</li>
                </ul>
              </div>
              <div className="col-4 text-start flex-grow-1">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Viewing activity</li>
                  <li className="ulColor navFont">ratings</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default AccountPage;
