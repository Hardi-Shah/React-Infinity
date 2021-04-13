import React from "react";
import { Table } from "react-bootstrap";
import {
  AlertCloseIcon,
  AlertDangerIcon,
  AlertInfoIcon,
  AlertSuccessIcon,
  AlertWarnIcon,
  BinIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
  UploadIconWhite,
} from "../../assets/images";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const InnerPage = () => {
  return (
    <div className="wrapper">
      <div id="overlay"></div>
      <Header />
      <Sidebar />
      <div id="main">
        <div className="dashboard-content">
          <div className="row">
            <div className="col-md-12">
              <h3 className="innerpage-text">innerpage</h3>
            </div>

            <div className="col-md-12">
              <div className="innerpage-table-div content-box">
                <div className="table-text">
                  <div className="table-border">Table</div>
                </div>
                <div className="table-responsive stats-table">
                  <Table
                    className="table table-borderless"
                    data-pagination="true"
                    data-page-list="[5, 10, 25, 50, 100, ALL]"
                    data-page-size="6"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Lead Name</th>
                        <th scope="col">Views</th>
                        <th scope="col">Favorites</th>
                        <th scope="col">Last visit</th>
                        <th scope="col" className="status-head">
                          Status
                        </th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-success btn-text"
                          >
                            In Progress
                          </button>
                        </td>
                        <td className="">
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-warning btn-pending"
                          >
                            Pending
                          </button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="landlord">Landlord</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-text"
                          >
                            Cancelled
                          </button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="seller">Seller</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-success btn-text"
                          >
                            In Progress
                          </button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-text"
                          >
                            Cancelled
                          </button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-success btn-text"
                          >
                            In Progress
                          </button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-success btn-text"
                          >
                            In Progress
                          </button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-warning btn-pending"
                          >
                            Pending
                          </button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-completed"
                          >
                            Completed
                          </button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="main-pagination">
                    <div className="pagination justify-content-start">
                      <h3 className="show-text">Show</h3>
                      <div className="select-div">
                        <select className="select-entry" id="entry">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6" selected>
                            6
                          </option>
                        </select>
                      </div>
                      <h3 className="entry-text">Entries</h3>
                    </div>

                    <div className="pagination justify-content-end">
                      <a href="/#">
                        <img
                          src={ChevronLeftIcon}
                          alt=""
                          className="chevron-left-img"
                        />
                      </a>
                      <a className="pagination-tabs" href="/#">
                        1
                      </a>
                      <a className="pagination-tabs active" href="/#">
                        2
                      </a>
                      <a className="pagination-tabs" href="/#">
                        3
                      </a>
                      <a className="pagination-tabs" href="/#">
                        4
                      </a>
                      <a className="pagination-tabs" href="/#">
                        5
                      </a>
                      <a href="/#">
                        <img
                          src={ChevronRightIcon}
                          alt=""
                          className="chevron-left-img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-div content-box">
                <div className="analytics-text">
                  <div className="analytics-border">FORM STYLE</div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h3 className="one-column-head">One Column</h3>
                  </div>
                  <div className="col-12">
                    <form>
                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInputDropdown"
                        >
                          Dropdown
                        </label>

                        <select
                          className="form-control custom-dropdown"
                          id="exampleFormControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleTextarea"
                        >
                          Textarea
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleTextarea"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <h3 className="two-column-head">Two Column</h3>
                  </div>
                  <div className="col-md-6">
                    <form>
                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          Disabled
                        </label>
                        <input
                          type="text"
                          disabled
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <form>
                      <div className="form-group">
                        <label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Focus
                        </label>
                        <input
                          type="text"
                          className="form-control focus-input"
                          id="exampleInput"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <h3 className="three-column-head">Three Column</h3>
                  </div>
                  <div className="col-md-4">
                    <form>
                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInputDropdown"
                        >
                          Dropdown
                        </label>
                        <select
                          className="form-control custom-dropdown"
                          id="exampleFormControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4">
                    <form>
                      <div className="form-group">
                        <label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInputDropdown"
                        >
                          Dropdown
                        </label>
                        <select
                          className="form-control custom-dropdown"
                          id="exampleFormControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4">
                    <form>
                      <div className="form-group">
                        <label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInputDropdown"
                        >
                          Dropdown
                        </label>
                        <select
                          className="form-control custom-dropdown"
                          id="exampleFormControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <h3 className="four-column-head">Four Column</h3>
                  </div>
                  <div className="col-md-3">
                    <form>
                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInputDropdown"
                        >
                          Dropdown
                        </label>
                        <select
                          className="form-control custom-dropdown"
                          id="exampleFormControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-3">
                    <form>
                      <div className="form-group">
                        <label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInputDropdown"
                        >
                          Dropdown
                        </label>
                        <select
                          className="form-control custom-dropdown"
                          id="exampleFormControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-3">
                    <form>
                      <div className="form-group">
                        <label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInputDropdown"
                        >
                          Dropdown
                        </label>
                        <select
                          className="form-control custom-dropdown"
                          id="exampleFormControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-3">
                    <form>
                      <div className="form-group">
                        <label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="one-column-label"
                          htmlFor="exampleInputDropdown"
                        >
                          Dropdown
                        </label>
                        <select
                          className="form-control custom-dropdown"
                          id="exampleFormControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <h3 className="element-head">Other Elements</h3>
                  </div>

                  <div className="col-md-12">
                    <form>
                      <div className="file-upload">
                        <span className="form-label one-column-label">
                          File Upload:
                        </span>

                        <label htmlFor="input-file">
                          <img
                            src={UploadIconWhite}
                            alt=""
                            className="upload-white-icon"
                          />{" "}
                          Upload
                        </label>
                        <input id="input-file" type="file" />
                      </div>
                    </form>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="checkbox-label" htmlFor="exampleInput">
                        Check Boxes
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="custom-control custom-checkbox checkbox1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="inlineCheckbox1"
                        >
                          Option 1
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="inlineCheckbox2"
                        >
                          Option 2
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="inlineCheckbox3"
                        >
                          Option 3
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="checkbox-label" htmlFor="exampleInput">
                        Radio Buttons
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="custom-control custom-radio checkbox1">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="InputRadio"
                          id="InputRadio1"
                          value="option1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="InputRadio1"
                        >
                          Option 1
                        </label>
                      </div>
                      <div className="custom-control custom-radio checkbox1">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="InputRadio"
                          id="InputRadio2"
                          value="option2"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="InputRadio2"
                        >
                          Option 2
                        </label>
                      </div>
                      <div className="custom-control custom-radio checkbox1">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="InputRadio"
                          id="InputRadio3"
                          value="option3"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="InputRadio3"
                        >
                          Option 3
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="button-element">
                      <button type="button" className="btn primary-btn">
                        Primary
                      </button>
                      <button type="button" className="btn secondary-btn">
                        Secondary
                      </button>
                      <button
                        type="button"
                        className="btn btn-lg btn-toggle active"
                        data-toggle="button"
                        aria-pressed="true"
                        // autocomplete="off"
                      >
                        <div className="handle"></div>
                        <span className="on">ON</span>
                        <span className="off">OFF</span>
                      </button>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="alert-message">
                      <div className="alert alert-success" role="alert">
                        <img
                          className="alert-icon"
                          src={AlertSuccessIcon}
                          alt=""
                        />
                        <span className="alert-success-text">
                          This is a success message
                        </span>
                        <img
                          className="alert-close"
                          src={AlertCloseIcon}
                          alt=""
                        />
                      </div>
                      <div className="alert alert-info" role="alert">
                        <img
                          className="alert-icon"
                          src={AlertInfoIcon}
                          alt=""
                        />
                        <span className="alert-info-text">
                          This is an info message
                        </span>
                        <img
                          className="alert-close"
                          src={AlertCloseIcon}
                          alt=""
                        />
                      </div>
                      <div className="alert alert-warning" role="alert">
                        <img
                          className="alert-icon"
                          src={AlertWarnIcon}
                          alt=""
                        />
                        <span className="alert-warn-text">
                          This is an alert message
                        </span>
                        <img
                          className="alert-close"
                          src={AlertCloseIcon}
                          alt=""
                        />
                      </div>
                      <div className="alert alert-danger" role="alert">
                        <img
                          className="alert-icon"
                          src={AlertDangerIcon}
                          alt=""
                        />
                        <span className="alert-danger-text">
                          This is an error message
                        </span>
                        <img
                          className="alert-close"
                          src={AlertCloseIcon}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <h3 className="tab-head">Tab Style</h3>
                  </div>
                  <div className="col-md-12">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          className="nav-item nav-link active nav-link-label"
                          id="nav-maintenance-1-tab"
                          data-toggle="tab"
                          href="#nav-maintenance-1"
                          role="tab"
                        >
                          Maintenance1
                        </a>
                        <a
                          className="nav-item nav-link nav-link-label"
                          id="nav-maintenance-2-tab"
                          data-toggle="tab"
                          href="#nav-maintenance-2"
                          role="tab"
                        >
                          Maintenance2
                        </a>
                        <a
                          className="nav-item nav-link nav-link-label"
                          id="nav-maintenanc-3-tab"
                          data-toggle="tab"
                          href="#nav-maintenance-3"
                          role="tab"
                        >
                          Maintenance3
                        </a>
                        <a
                          className="nav-item nav-link nav-link-label"
                          id="nav-maintenance-4-tab"
                          data-toggle="tab"
                          href="#nav-maintenance-4"
                          role="tab"
                        >
                          Maintenance4
                        </a>
                      </div>
                    </nav>
                    <div
                      className="tab-content py-3 px-3 px-sm-0"
                      id="nav-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="nav-maintenance-1"
                        role="tabpanel"
                      >
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-maintenance-2"
                        role="tabpanel"
                      >
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-maintenance-3"
                        role="tabpanel"
                      >
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-maintenance-4"
                        role="tabpanel"
                      >
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <p className="innerpage-copyright">
                Copyright 2021.All rights reserved.
                <span className="span-career">Careers</span>
                <span className="span-policy">Prviacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPage;
