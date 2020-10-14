import React, { Component } from 'react';
import ChartistGraph, { FixedScaleAxis } from 'react-chartist';
import { Doughnut } from 'react-chartjs-2';
import {
  ComposableMap,
  Geographies, 
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import DatePicker from 'react-datepicker';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export class Dashboard extends Component {

  state = {
    startDate : new Date(),
    dateRange: [new Date() - 1, new Date()]
  }

  performanceIndicatorChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [30, 25, 50, 25, 50, 25, 50, 55, 20, 35, 25, 30 ],
              [25, 50, 10, 35, 30, 15, 20, 20, 30, 25, 10, 15 ],
              [45, 25, 40, 40, 20, 60, 30, 25, 50, 40, 65, 55 ]
            ]
  };

  performanceIndicatorChartOptions = {
    stackBars: true,
    height: 200,
    axisY: {
      type: FixedScaleAxis,
      ticks: [0, 25, 50, 75, 100]
    },
    showGridBackground: false
  };

  performanceIndicatorChartResponsiveOptions = [
    ['screen and (max-width: 480px)', {
      height: 150,
    }]
  ];

  sessionsDoughnutData = {
    datasets: [{
      data: [55,25,20],
      backgroundColor: [
          '#ffca00',
          '#38ce3c',
          '#ff4d6b'
      ],
      borderColor: [
        '#ffca00',
        '#38ce3c',
        '#ff4d6b'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Reassigned',
        'Not Assigned',
        'Assigned'
    ]
  }

  sessionsDoughnutOptions = {
    cutoutPercentage: 75,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
        display: false
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    }
  }

  incomeExpenseSummaryChartData = {
    // A labels array that can contain any sort of values
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [505, 781, 480, 985, 410, 822, 388, 874, 350, 642, 320, 796],
      [700, 430, 725, 390, 686, 392, 757, 500, 820, 400, 962, 420]
    ]
  }

  incomeExpenseSummaryChartOptions = {
    height:300,
    axisY: {
      high: 1000,
      low: 250,
      referenceValue: 1000,
      type: FixedScaleAxis,
      ticks: [250, 500, 750, 1000]
    },
    showArea: true,
    showPoint: false,
    fullWidth: true
  }

  incomeExpenseSummaryChartResponsiveOptions = [
    ['screen and (max-width: 480px)', {
      height: 150,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value;
        }
      }
    }]
  ];
  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render() {
    return (
      <div>
        <div className="proBanner">
          <div>
            <span className="d-flex align-items-center purchase-popup">
              <p className="m-0">Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
              <a href="https://www.bootstrapdash.com/product/stellar-admin-template-react/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-info ml-auto">Check Pro Version</a>
              <i className="typcn typcn-delete-outline bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div>
        </div>
        <div className="row">
              <div className="col-md-8 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body performane-indicator-card">
                    <div className="d-sm-flex">
                      <h4 className="card-title flex-shrink-1">Performance Indicator</h4>
                      <p className="m-sm-0 ml-sm-auto flex-shrink-0">
                        <span className="data-time-range ml-0">7d</span>
                        <span className="data-time-range active">2w</span>
                        <span className="data-time-range">1m</span>
                        <span className="data-time-range">3m</span>
                        <span className="data-time-range">6m</span>
                      </p>
                    </div>
                    <div className="d-sm-flex flex-wrap mt-3">
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-primary ml-2"></span>
                        <p className="mb-0 ml-2 text-muted font-weight-semibold">Complaints (2098)</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-info ml-2"></span>
                        <p className="mb-0 ml-2 text-muted font-weight-semibold"> Task Done (1123)</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-danger ml-2"></span>
                        <p className="mb-0 ml-2 text-muted font-weight-semibold">Attends (876)</p>
                      </div>
                    </div>
                    <ChartistGraph className="performance-indicator-chart mt-5" type="Bar" data={this.performanceIndicatorChartData} options={this.performanceIndicatorChartOptions} responsive-options={this.performanceIndicatorChartResponsiveOptions} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Sessions by channel</h4>
                    <div className="aligner-wrapper py-3">
                      {/* <canvas id="sessionsDoughnutChart" height="210"></canvas> */}
                      <Doughnut data={this.sessionsDoughnutData} options={this.sessionsDoughnutOptions} height={210} />
                      <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center">
                        <h2 className="text-center mb-0 font-weight-bold">8.234</h2>
                        <small className="d-block text-center text-muted  font-weight-semibold mb-0">Total Leads</small>
                      </div>
                    </div>
                    <div className="wrapper mt-4 d-flex flex-wrap align-items-cente">
                      <div className="d-flex">
                        <span className="square-indicator bg-danger ml-2"></span>
                        <p className="mb-0 ml-2">Assigned</p>
                      </div>
                      <div className="d-flex">
                        <span className="square-indicator bg-success ml-2"></span>
                        <p className="mb-0 ml-2">Not Assigned</p>
                      </div>
                      <div className="d-flex">
                        <span className="square-indicator bg-warning ml-2"></span>
                        <p className="mb-0 ml-2">Reassigned</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        {/*Quick Action Toolbar Starts*/}
            <div className="row quick-action-toolbar">
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-header d-block d-md-flex">
                    <h5 className="mb-0">Quick Actions</h5>
                    <p className="ml-auto mb-0">How are your active users trending overtime?<i className="icon-bulb"></i></p>
                  </div>
                  <div className="d-md-flex row m-0 quick-action-btns" role="group" aria-label="Quick action buttons">
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"> <i className="icon-user mr-2"></i> Add Client</button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="icon-docs mr-2"></i> Create Quote</button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="icon-folder mr-2"></i> Enter Payment</button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="icon-book-open mr-2"></i>Create Invoice</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/*Quick Action Toolbar Ends */}
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-sm-flex align-items-center mb-4">
                    <h4 className="card-title mb-sm-0">Products Inventory</h4>
                    <a href="!#" onClick={evt => evt.preventDefault()} className="text-dark ml-auto mb-3 mb-sm-0"> View all Products</a>
                  </div>
                  <div className="table-responsive border rounded p-1">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="font-weight-bold">Store ID</th>
                          <th className="font-weight-bold">Amount</th>
                          <th className="font-weight-bold">Gateway</th>
                          <th className="font-weight-bold">Created at</th>
                          <th className="font-weight-bold">Paid at</th>
                          <th className="font-weight-bold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img className="img-sm rounded-circle" src={require('../../assets/images/faces/face1.jpg')} alt="profile" /> Katie Holmes </td>
                          <td>$3621</td>
                          <td><img src={require('../../assets/images/dashboard/alipay.png')} alt="alipay" className="gateway-icon mr-2" /> alipay</td>
                          <td>04 Jun 2019</td>
                          <td>18 Jul 2019</td>
                          <td>
                            <div className="badge badge-success p-2">Paid</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img className="img-sm rounded-circle" src={require('../../assets/images/faces/face2.jpg')} alt="profile" /> Minnie Copeland </td>
                          <td>$6245</td>
                          <td><img src={require('../../assets/images/dashboard/paypal.png')} alt="alipay" className="gateway-icon mr-2" /> Paypal</td>
                          <td>25 Sep 2019</td>
                          <td>07 Oct 2019</td>
                          <td>
                            <div className="badge badge-danger p-2">Pending</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img className="img-sm rounded-circle" src={require('../../assets/images/faces/face3.jpg')} alt="profile" /> Rodney Sims </td>
                          <td>$9265</td>
                          <td><img src={require('../../assets/images/dashboard/alipay.png')} alt="alipay" className="gateway-icon mr-2" /> alipay</td>
                          <td>12 dec 2019</td>
                          <td>26 Aug 2019</td>
                          <td>
                            <div className="badge badge-warning p-2">Failed</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img className="img-sm rounded-circle" src={require('../../assets/images/faces/face4.jpg')} alt="profile" /> Carolyn Barker </td>
                          <td>$2263</td>
                          <td><img src={require('../../assets/images/dashboard/alipay.png')} alt="alipay" className="gateway-icon mr-2" /> alipay</td>
                          <td>30 Sep 2019</td>
                          <td>20 Oct 2019</td>
                          <td>
                            <div className="badge badge-success p-2">Paid</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex mt-4 flex-wrap align-items-center">
                    <p className="text-muted mb-sm-0">Showing 1 to 10 of 57 entries</p>
                    <nav className="ml-auto">
                      <ul className="pagination separated pagination-info mb-sm-0">
                        <li className="page-item"><a href="!#" onClick={evt => evt.preventDefault()} className="page-link"><i className="icon-arrow-left"></i></a></li>
                        <li className="page-item active"><a href="!#" onClick={evt => evt.preventDefault()} className="page-link">1</a></li>
                        <li className="page-item"><a href="!#" onClick={evt => evt.preventDefault()} className="page-link">2</a></li>
                        <li className="page-item"><a href="!#" onClick={evt => evt.preventDefault()} className="page-link">3</a></li>
                        <li className="page-item"><a href="!#" onClick={evt => evt.preventDefault()} className="page-link">4</a></li>
                        <li className="page-item"><a href="!#" onClick={evt => evt.preventDefault()} className="page-link"><i className="icon-arrow-right"></i></a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 grid-margin stretch-card">
              <div className="card sales-report-country">
                <div className="card-body">
                  <div className="d-md-flex">
                    <h4 className="card-title">Sales Performance by Country</h4>
                    <div className="mb-2 m-md-0 ml-md-auto">
                      <a href="!#" onClick={evt => evt.preventDefault()} className="text-secondary mr-3 d-inline-block mb-3"><i className="icon-cloud-upload mr-3"></i> Export File</a>
                      <a href="!#" onClick={evt => evt.preventDefault()} className="text-secondary mr-3 d-inline-block"><i className="icon-printer mr-3"></i>Print File</a>
                    </div>
                  </div>
                  <div className="row my-xl-3">
                    <div className="col-md-12 d-md-flex">
                      <div>
                        <h1 className="font-weight-bold mb-0">136,356.00</h1>
                        <p className="text-muted">+23 since last year</p>
                      </div>
                      <div className="ml-md-3">
                        <p className="mb-0 mt-2">Sales performance of all states in the world</p>
                        <p className="mb-0">This is your most recent earnings for today's date.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 pt-3">
                      <div className="row">
                        <div className="pb-xl-3 col-sm-6 col-xl-12 sales-activity">
                          <p className="mb-1">Activations</p>
                          <h1 className="font-weight-bold mb-0 text-info">156,123</h1>
                          <p className="text-muted">Updated-6:16 pm</p>
                        </div>
                        <div className="pt-xl-3 col-sm-6 col-xl-12 sales-activity">
                          <p className="mb-0">Net Revenue</p>
                          <h1 className="font-weight-bold mb-0 text-primary">331,520</h1>
                          <p className="text-muted pb-0">Updated-5:14 pm</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8">
                      <div className="dashboard-vmap">
                      <ComposableMap>
                        <ZoomableGroup zoom={1}>
                          <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                              geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                            }
                          </Geographies>
                        </ZoomableGroup>
                      </ComposableMap>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-sm-flex align-items-center">
                    <h4 className="card-title mb-0">Latest Activity</h4>
                    <a href="!#" onClick={evt => evt.preventDefault()} className="btn btn-outline-info border-0 font-weight-semibold ml-auto p-0 btn-no-hover-bg">View more</a>
                  </div>
                  <div className="d-flex mt-4 py-3 border-bottom">
                    <img className="img-sm rounded-circle" src={require('../../assets/images/faces/face3.jpg')} alt="profile" />
                    <div className="wrapper ml-2">
                      <p className="mb-1 font-weight-medium">Mobile Apps Redesign</p>
                      <small className="text-muted">+23 since last year</small>
                    </div>
                    <small className="text-muted ml-auto">10:07PM</small>
                  </div>
                  <div className="d-flex py-3 border-bottom">
                    <img className="img-sm rounded-circle" src={require('../../assets/images/faces/face2.jpg')} alt="face" />
                    <div className="wrapper ml-2">
                      <p className="mb-1 font-weight-medium">Inviting Join Apps Cont...</p>
                      <small className="text-muted">+23 since last year</small>
                    </div>
                    <small className="text-muted ml-auto">01:07AM</small>
                  </div>
                  <div className="d-flex py-3 border-bottom">
                    <img className="img-sm rounded-circle" src={require('../../assets/images/faces/face4.jpg')} alt="profile" />
                    <div className="wrapper ml-2">
                      <p className="mb-1 font-weight-medium">Website Redesign</p>
                      <small className="text-muted">+23 since last year</small>
                    </div>
                    <small className="text-muted ml-auto">04:42AM</small>
                  </div>
                  <div className="d-flex py-3  border-bottom">
                    <img className="img-sm rounded-circle" src={require('../../assets/images/faces/face8.jpg')} alt="face" />
                    <div className="wrapper ml-2">
                      <p className="mb-1 font-weight-medium">Analytics Dashboard</p>
                      <small className="text-muted">+23 since last year</small>
                    </div>
                    <small className="text-muted ml-auto">07:44PM</small>
                  </div>
                  <div className="d-flex pt-3">
                    <img className="img-sm rounded-circle" src={require('../../assets/images/faces/face7.jpg')} alt="face" />
                    <div className="wrapper ml-2">
                      <p className="mb-1 font-weight-medium">Great Logo Design</p>
                      <small className="text-muted">+23 since last year</small>
                    </div>
                    <small className="text-muted ml-auto">10:49AM</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row income-expense-summary-chart-text">
                    <div className="col-xl-4">
                      <h5>Income And Expenses Summary</h5>
                      <p className="small text-muted">A comparison of people who mark themselves of their ineterest from the date range given above. Learn more.</p>
                    </div>
                    <div className=" col-md-3 col-xl-2">
                      <p className="income-expense-summary-chart-legend"> <span style={{ borderColor : '#6469df' }}></span> Total Income </p>
                      <h3>$ 1,766.00</h3>
                    </div>
                    <div className="col-md-3 col-xl-2">
                      <p className="income-expense-summary-chart-legend"> <span style={{ borderColor : '#37ca32'}}></span> Total Expense </p>
                      <h3>$ 5,698.30</h3>
                    </div>
                    <div className="col-md-6 col-xl-4 d-flex align-items-center">
                      <DateRangePicker 
                        className="ml-auto income-expense-summary-chart-daterange" 
                        calendarIcon={<i className='icon-arrow-down'></i>}
                        format="MMMM d, y"
                        clearIcon={null}
                        value={[new Date() - 1, new Date()]}
                        onChange={ date => this.setState({'dateRange': date})}
                          />
                    </div>
                  </div>
                  <div className="row income-expense-summary-chart mt-3">
                    <div className="col-md-12">
                      <div className="ct-chart" id="income-expense-summary-chart"></div>
                      <ChartistGraph 
                        type="Line"
                        data={this.incomeExpenseSummaryChartData} 
                        options={this.incomeExpenseSummaryChartOptions} 
                        responsive-options={this.incomeExpenseSummaryChartResponsiveOptions}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card social-card card-colored twitter-card">
                <div className="card-body d-flex flex-wrap align-items-center justify-content-center">
                  <i className="icon-social-twitter flex-shrink-0"></i>
                  <div className="wrapper ml-3">
                    <h5 className="mb-0">Twitter Followers</h5>
                    <h1 className="mb-0">3200+</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card social-card card-colored facebook-card">
                <div className="card-body d-flex flex-wrap align-items-center justify-content-center">
                  <i className="icon-social-facebook flex-shrink-0"></i>
                  <div className="wrapper ml-3">
                    <h5 className="mb-0">facebook likes</h5>
                    <h1 className="mb-0">1500+</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card social-card card-colored instagram-card">
                <div className="card-body d-flex flex-wrap align-items-center justify-content-center">
                  <i className="icon-social-instagram flex-shrink-0"></i>
                  <div className="wrapper ml-3">
                    <h5 className="mb-0">Instagram Posts</h5>
                    <h1 className="mb-0">2320+</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-sm-flex align-items-baseline report-summary-header">
                        <h5 className="font-weight-semibold">Report Summary</h5> <span className="ml-auto">Updated Report</span> <button className="btn btn-icons border-0 p-2"><i className="icon-refresh"></i></button>
                      </div>
                    </div>
                  </div>
                  <div className="row report-inner-cards-wrapper">
                    <div className=" col-md -6 col-xl report-inner-card">
                      <div className="inner-card-text">
                        <span className="report-title">EXPENSE</span>
                        <h4>$32123</h4>
                        <span className="report-count"> 2 Reports</span>
                      </div>
                      <div className="inner-card-icon bg-success">
                        <i className="icon-rocket"></i>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl report-inner-card">
                      <div className="inner-card-text">
                        <span className="report-title">PURCHASE</span>
                        <h4>95,458</h4>
                        <span className="report-count"> 3 Reports</span>
                      </div>
                      <div className="inner-card-icon bg-danger">
                        <i className="icon-briefcase"></i>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl report-inner-card">
                      <div className="inner-card-text">
                        <span className="report-title">QUANTITY</span>
                        <h4>2650</h4>
                        <span className="report-count"> 5 Reports</span>
                      </div>
                      <div className="inner-card-icon bg-warning">
                        <i className="icon-globe-alt"></i>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl report-inner-card">
                      <div className="inner-card-text">
                        <span className="report-title">RETURN</span>
                        <h4>25,542</h4>
                        <span className="report-count"> 9 Reports</span>
                      </div>
                      <div className="inner-card-icon bg-primary">
                        <i className="icon-diamond"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
              <div className="card sessions-progress-bar-card">
                <div className="card-header">
                  <h4>Sessions by Countries</h4>
                </div>
                <div className="card-body">
                  <ul className="dashboard-progress-bar-wrapper m-0">
                    <li>
                      <div className="d-flex justify-content-between">
                        <h6>1. Netherlands</h6>
                        <p className="font-weight-semibold">$380.50 <span className="text-muted font-weight-normal">(1.51%)</span></p>
                      </div>
                      <div className="progress progress-md">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between">
                        <h6>2. United States</h6>
                        <p className="font-weight-semibold">$503.20 <span className="text-muted font-weight-normal">(13.45%)</span></p>
                      </div>
                      <div className="progress progress-md">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '75%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between">
                        <h6>3. United kingdom</h6>
                        <p className="font-weight-semibold">$421.80 <span className="text-muted font-weight-normal">(1.51%)</span></p>
                      </div>
                      <div className="progress progress-md">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between">
                        <h6>4. Canada</h6>
                        <p className="font-weight-semibold">$850.30 <span className="text-muted font-weight-normal">(1.51%)</span></p>
                      </div>
                      <div className="progress progress-md">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between">
                        <h6>5. Australia</h6>
                        <p className="font-weight-semibold">$380.50 <span className="text-muted font-weight-normal">(1.51%)</span></p>
                      </div>
                      <div className="progress progress-md">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '40%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
              <div className="card dashboard-inline-datepicker datepicker-custom">
                <div className="card-body">
                  <div id="dashboard-inline-datepicker"></div>
                  <DatePicker
                    renderCustomHeader={({
                      date,
                      changeYear,
                      changeMonth,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled
                    }) => (
                      <div className="datepicker-custom-header">
                        <div className="month-name">{date.toLocaleString('default', { month: 'long' }) + ' ' + date.toLocaleString('default', { year: 'numeric' })}</div>
                        <button className="month-nav-btn prev-month" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}><i className="icon-arrow-left-circle"></i></button>
                        <button className="month-nav-btn next-month" onClick={increaseMonth}><i className="icon-arrow-right-circle" disabled={nextMonthButtonDisabled}></i></button>
                      </div>
                    )}
                    selected={this.state.startDate}
                    onChange={date => this.setState({startDate: date})}
                    inline
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 grid-margin stretch-card">
              <div className="card quick-status-card">
                <div className="card-body">
                  <h4 className="card-title">Quick Status</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="quick-status-circular-progress">
                        <CircularProgressbarWithChildren 
                          value="74"
                          strokeWidth="10"
                          styles={buildStyles({
                            pathColor: '#1bdbe0',
                            trailColor: '#eeeeee',
                          })}
                        >
                          <p className="circle-progress-value">74</p>
                          <p className="circle-progress-label">Expense</p>
                        </CircularProgressbarWithChildren>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="quick-status-circular-progress">
                        <CircularProgressbarWithChildren 
                          value="56"
                          strokeWidth="10"
                          styles={buildStyles({
                            pathColor: '#8e32e9',
                            trailColor: '#eeeeee', 
                          })}
                        >
                          <p className="circle-progress-value">56</p>
                          <p className="circle-progress-label">Income</p>
                        </CircularProgressbarWithChildren>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12">
                      <div className="wrapper py-4 d-flex border-bottom">
                        <span className="icon-holder">
                          <i className="icon-wallet"></i>
                        </span>
                        <div className="ml-3">
                          <p className="mb-1">My Balance</p>
                          <h6 className="mb-0">$5021.00</h6>
                        </div>
                        <div className="ml-auto"><i className="icon-arrow-down-circle"></i><span className="text-muted ml-2">2.87 %</span></div>
                      </div>
                      <div className="wrapper py-4 d-flex">
                        <span className="icon-holder">
                          <i className="icon-basket-loaded"></i>
                        </span>
                        <div className="ml-3">
                          <p className="mb-1">Sales Revenue</p>
                          <h6 className="mb-0">24,301.00</h6>
                        </div>
                        <div className="ml-auto"><i className="icon-arrow-down-circle"></i><span className="text-muted ml-2">2.87 %</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }

}

export default Dashboard;