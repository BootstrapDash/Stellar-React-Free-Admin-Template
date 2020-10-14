import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class Buttons extends Component {
  render () {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Buttons
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Buttons</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Single color buttons</h4>
                <p className="card-description">Add className <code>.btn-&#123;color&#125;</code> for buttons in theme colors</p>
                <div className="template-demo">
                  <button type="button" className="btn btn-primary btn-fw">Primary</button>
                  <button type="button" className="btn btn-secondary btn-fw">Secondary</button>
                  <button type="button" className="btn btn-success btn-fw">Success</button>
                  <button type="button" className="btn btn-danger btn-fw">Danger</button>
                  <button type="button" className="btn btn-warning btn-fw">Warning</button>
                  <button type="button" className="btn btn-info btn-fw">Info</button>
                  <button type="button" className="btn btn-light btn-fw">Light</button>
                  <button type="button" className="btn btn-dark btn-fw">Dark</button>
                  <button type="button" className="btn btn-link btn-fw">Link</button>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Inverse buttons</h4>
                <p className="card-description">Add className <code>.btn-inverse-&#123;color&#125; for inverse buttons</code></p>
                <div className="template-demo">
                  <button type="button" className="btn btn-inverse-primary btn-fw">Primary</button>
                  <button type="button" className="btn btn-inverse-secondary btn-fw">Secondary</button>
                  <button type="button" className="btn btn-inverse-success btn-fw">Success</button>
                  <button type="button" className="btn btn-inverse-danger btn-fw">Danger</button>
                  <button type="button" className="btn btn-inverse-warning btn-fw">Warning</button>
                  <button type="button" className="btn btn-inverse-info btn-fw">Info</button>
                  <button type="button" className="btn btn-inverse-light btn-fw">Light</button>
                  <button type="button" className="btn btn-inverse-dark btn-fw">Dark</button>
                  <button type="button" className="btn btn-link btn-fw">Link</button>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Rounded buttons</h4>
                <p className="card-description">Add className <code>.btn-rounded</code></p>
                <div className="template-demo">
                  <button type="button" className="btn btn-primary btn-rounded btn-fw">Primary</button>
                  <button type="button" className="btn btn-secondary btn-rounded btn-fw">Secondary</button>
                  <button type="button" className="btn btn-success btn-rounded btn-fw">Success</button>
                  <button type="button" className="btn btn-danger btn-rounded btn-fw">Danger</button>
                  <button type="button" className="btn btn-warning btn-rounded btn-fw">Warning</button>
                  <button type="button" className="btn btn-info btn-rounded btn-fw">Info</button>
                  <button type="button" className="btn btn-light btn-rounded btn-fw">Light</button>
                  <button type="button" className="btn btn-dark btn-rounded btn-fw">Dark</button>
                  <button type="button" className="btn btn-link btn-rounded btn-fw">Link</button>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Outlined buttons</h4>
                <p className="card-description">Add className <code>.btn-outline-&#123;color&#125;</code> for outline buttons</p>
                <div className="template-demo">
                  <button type="button" className="btn btn-outline-primary btn-fw">Primary</button>
                  <button type="button" className="btn btn-outline-secondary btn-fw">Secondary</button>
                  <button type="button" className="btn btn-outline-success btn-fw">Success</button>
                  <button type="button" className="btn btn-outline-danger btn-fw">Danger</button>
                  <button type="button" className="btn btn-outline-warning btn-fw">Warning</button>
                  <button type="button" className="btn btn-outline-info btn-fw">Info</button>
                  <button type="button" className="btn btn-outline-light btn-fw">Light</button>
                  <button type="button" className="btn btn-outline-dark btn-fw">Dark</button>
                  <button type="button" className="btn btn-link btn-fw">Link</button>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Normal buttons</h4>
                <p className="card-description">Use any of the available button classNamees to quickly create a styled button.</p>
                <div className="template-demo">
                  <button type="button" className="btn btn-primary">Primary</button>
                  <button type="button" className="btn btn-secondary">Secondary</button>
                  <button type="button" className="btn btn-success">Success</button>
                  <button type="button" className="btn btn-danger">Danger</button>
                  <button type="button" className="btn btn-warning">Warning</button>
                  <button type="button" className="btn btn-info">Info</button>
                  <button type="button" className="btn btn-light">Light</button>
                  <button type="button" className="btn btn-dark">Dark</button>
                  <button type="button" className="btn btn-link">Link</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7">
                    <h4 className="card-title">Icon Buttons</h4>
                    <p className="card-description">Add className <code>.btn-icon</code> for buttons with only icons</p>
                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                      <button type="button" className="btn btn-primary btn-rounded btn-icon">
                        <i className="icon-home"></i>
                      </button>
                      <button type="button" className="btn btn-dark btn-rounded btn-icon">
                        <i className="icon-globe"></i>
                      </button>
                      <button type="button" className="btn btn-danger btn-rounded btn-icon">
                        <i className="icon-envelope-open"></i>
                      </button>
                      <button type="button" className="btn btn-info btn-rounded btn-icon">
                        <i className="icon-star"></i>
                      </button>
                      <button type="button" className="btn btn-success btn-rounded btn-icon">
                        <i className="icon-location-pin"></i>
                      </button>
                    </div>
                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                      <button type="button" className="btn btn-inverse-primary btn-rounded btn-icon">
                        <i className="icon-home"></i>
                      </button>
                      <button type="button" className="btn btn-inverse-dark btn-icon">
                        <i className="icon-globe"></i>
                      </button>
                      <button type="button" className="btn btn-inverse-danger btn-icon">
                        <i className="icon-envelope-open"></i>
                      </button>
                      <button type="button" className="btn btn-inverse-info btn-icon">
                        <i className="icon-star"></i>
                      </button>
                      <button type="button" className="btn btn-inverse-success btn-icon">
                        <i className="icon-location-pin"></i>
                      </button>
                    </div>
                    <div className="template-demo d-flex justify-content-between flex-nowrap mt-4">
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-heart text-danger"></i>
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-music-tone-alt text-dark"></i>
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-star text-primary"></i>
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-speedometer text-info"></i>
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-graph text-success"></i>
                      </button>
                    </div>
                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-heart"></i>
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-music-tone-alt"></i>
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-star"></i>
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-speedometer"></i>
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                        <i className="icon-graph"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h4 className="card-title">Button Size</h4>
                    <p className="card-description">Use className <code>.btn-&#123;size&#125;</code></p>
                    <div className="template-demo">
                      <button type="button" className="btn btn-outline-secondary btn-lg">btn-lg</button>
                      <button type="button" className="btn btn-outline-secondary btn-md">btn-md</button>
                      <button type="button" className="btn btn-outline-secondary btn-sm">btn-sm</button>
                    </div>
                    <div className="template-demo mt-4">
                      <button type="button" className="btn btn-danger btn-lg">btn-lg</button>
                      <button type="button" className="btn btn-success btn-md">btn-md</button>
                      <button type="button" className="btn btn-primary btn-sm">btn-sm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Block buttons</h4>
                <p className="card-description">Add className <code>.btn-block</code></p>
                <div className="template-demo">
                  <button type="button" className="btn btn-info btn-lg btn-block">Block buttons <i className="icon-menu float-right"></i>
                  </button>
                  <button type="button" className="btn btn-dark btn-lg btn-block">Block buttons</button>
                  <button type="button" className="btn btn-primary btn-lg btn-block">
                    <i className="icon-user"></i> Block buttons </button>
                  <button type="button" className="btn btn-outline-secondary btn-lg btn-block">Block buttons</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="card-title">Button groups</h4>
                    <p className="card-description">Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code></p>
                    <div className="template-demo">
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-secondary">1</button>
                        <button type="button" className="btn btn-outline-secondary">2</button>
                        <button type="button" className="btn btn-outline-secondary">3</button>
                      </div>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-secondary">
                          <i className="icon-heart"></i>
                        </button>
                        <button type="button" className="btn btn-outline-secondary">
                          <i className="icon-calendar"></i>
                        </button>
                        <button type="button" className="btn btn-outline-secondary">
                          <i className="icon-clock"></i>
                        </button>
                      </div>
                    </div>
                    <div className="template-demo">
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">1</button>
                        <button type="button" className="btn btn-primary">2</button>
                        <button type="button" className="btn btn-primary">3</button>
                      </div>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">
                          <i className="icon-heart"></i>
                        </button>
                        <button type="button" className="btn btn-primary">
                          <i className="icon-calendar"></i>
                        </button>
                        <button type="button" className="btn btn-primary">
                          <i className="icon-clock"></i>
                        </button>
                      </div>
                    </div>
                    <div className="template-demo mt-4">
                      <div className="btn-group-vertical" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-secondary">
                          <i className="icon-arrow-up"></i>
                        </button>
                        <button type="button" className="btn btn-outline-secondary">
                          <i className="icon-menu"></i>
                        </button>
                        <button type="button" className="btn btn-outline-secondary">
                          <i className="icon-arrow-down"></i>
                        </button>
                      </div>
                      <div className="btn-group-vertical" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-secondary">Default</button>
                        <div className="btn-group">
                        <Dropdown>
                          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            Dropdown
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        </div>
                        <button type="button" className="btn btn-outline-secondary">Default</button>
                      </div>
                      <div className="btn-group-vertical" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-secondary">Top</button>
                        <button type="button" className="btn btn-outline-secondary">Middle</button>
                        <button type="button" className="btn btn-outline-secondary">Bottom</button>
                      </div>
                    </div>
                    <div className="template-demo mt-4">
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-secondary">
                          <i className="icon-star d-block mb-1"></i> Favourites </button>
                        <button type="button" className="btn btn-outline-secondary">
                          <i className="icon-reload d-block mb-1"></i> Reload </button>
                        <button type="button" className="btn btn-outline-secondary">
                          <i className="icon-user d-block mb-1"></i> Users </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="card-title">Button with text and icon</h4>
                    <p className="card-description">Wrap icon and text inside <code>.btn-icon-text</code> and use <code>.btn-icon-prepend</code> or <code>.btn-icon-append</code> for icon tags</p>
                    <div className="template-demo">
                      <button type="button" className="btn btn-primary btn-icon-text">
                        <i className="icon-doc btn-icon-prepend"></i> Submit </button>
                      <button type="button" className="btn btn-dark btn-icon-text"> Edit <i className="icon-doc btn-icon-append"></i>
                      </button>
                      <button type="button" className="btn btn-success btn-icon-text">
                        <i className="icon-info btn-icon-prepend"></i> Warning </button>
                    </div>
                    <div className="template-demo">
                      <button type="button" className="btn btn-danger btn-icon-text">
                        <i className="icon-cloud-upload btn-icon-prepend"></i> Upload </button>
                      <button type="button" className="btn btn-info btn-icon-text"> Print <i className="icon-printer btn-icon-append"></i>
                      </button>
                      <button type="button" className="btn btn-warning btn-icon-text">
                        <i className="icon-reload btn-icon-prepend"></i> Reset </button>
                    </div>
                    <div className="template-demo mt-2">
                      <button type="button" className="btn btn-outline-primary btn-icon-text">
                        <i className="icon-doc btn-icon-prepend"></i> Submit </button>
                      <button type="button" className="btn btn-outline-secondary btn-icon-text"> Edit <i className="icon-doc btn-icon-append"></i>
                      </button>
                      <button type="button" className="btn btn-outline-success btn-icon-text">
                        <i className="icon-info btn-icon-prepend"></i> Warning </button>
                    </div>
                    <div className="template-demo">
                      <button type="button" className="btn btn-outline-danger btn-icon-text">
                        <i className="icon-cloud-upload btn-icon-prepend"></i> Upload </button>
                      <button type="button" className="btn btn-outline-info btn-icon-text"> Print <i className="icon-printer btn-icon-append"></i>
                      </button>
                      <button type="button" className="btn btn-outline-warning btn-icon-text">
                        <i className="icon-reload btn-icon-prepend"></i> Reset </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Social Icon Buttons</h4>
                <p className="card-description">Add className <code>.btn-social-icon</code></p>
                <div className="template-demo">
                  <button type="button" className="btn btn-social-icon btn-outline-facebook"><i className="icon-social-facebook"></i></button>
                  <button type="button" className="btn btn-social-icon btn-outline-youtube"><i className="icon-social-youtube"></i></button>
                  <button type="button" className="btn btn-social-icon btn-outline-twitter"><i className="icon-social-twitter"></i></button>
                  <button type="button" className="btn btn-social-icon btn-outline-dribbble"><i className="icon-social-dribbble"></i></button>
                  <button type="button" className="btn btn-social-icon btn-outline-linkedin"><i className="icon-social-linkedin"></i></button>
                  <button type="button" className="btn btn-social-icon btn-outline-google"><i className="icon-social-google"></i></button>
                </div>
                <div className="template-demo">
                  <button type="button" className="btn btn-social-icon btn-facebook"><i className="icon-social-facebook"></i></button>
                  <button type="button" className="btn btn-social-icon btn-youtube"><i className="icon-social-youtube"></i></button>
                  <button type="button" className="btn btn-social-icon btn-twitter"><i className="icon-social-twitter"></i></button>
                  <button type="button" className="btn btn-social-icon btn-dribbble"><i className="icon-social-dribbble"></i></button>
                  <button type="button" className="btn btn-social-icon btn-linkedin"><i className="icon-social-linkedin"></i></button>
                  <button type="button" className="btn btn-social-icon btn-google"><i className="icon-social-google"></i></button>
                </div>
                <div className="template-demo">
                  <button type="button" className="btn btn-social-icon btn-facebook btn-rounded"><i className="icon-social-facebook"></i></button>
                  <button type="button" className="btn btn-social-icon btn-youtube btn-rounded"><i className="icon-social-youtube"></i></button>
                  <button type="button" className="btn btn-social-icon btn-twitter btn-rounded"><i className="icon-social-twitter"></i></button>
                  <button type="button" className="btn btn-social-icon btn-dribbble btn-rounded"><i className="icon-social-dribbble"></i></button>
                  <button type="button" className="btn btn-social-icon btn-linkedin btn-rounded"><i className="icon-social-linkedin"></i></button>
                  <button type="button" className="btn btn-social-icon btn-google btn-rounded"><i className="icon-social-google"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Social button with text</h4>
                <p className="card-description">Add className <code>.btn-social-icon-text</code></p>
                <div className="template-demo">
                  <button type="button" className="btn btn-social-icon-text btn-facebook"><i className="icon-social-facebook"></i>Facebook</button>
                  <button type="button" className="btn btn-social-icon-text btn-youtube"><i className="icon-social-youtube"></i>Youtube</button>
                  <button type="button" className="btn btn-social-icon-text btn-twitter"><i className="icon-social-twitter"></i>Twitter</button>
                  <button type="button" className="btn btn-social-icon-text btn-dribbble"><i className="icon-social-dribbble"></i>Dribbble</button>
                  <button type="button" className="btn btn-social-icon-text btn-linkedin"><i className="icon-social-linkedin"></i>Linkedin</button>
                  <button type="button" className="btn btn-social-icon-text btn-google"><i className="icon-social-google"></i>Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;