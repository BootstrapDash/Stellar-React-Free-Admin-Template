import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <div className="text-muted text-center text-sm-left"><Trans>
            Copyright © 2019 Stellar. All rights reserved.
          </Trans> 
            <div className="d-sm-inline-block">
              <a href="!#" onClick={ evt=>evt.preventDefault() } className="pl-1"><Trans>
                Terms of use
              </Trans></a> |
              <a href="!#" onClick={ evt=>evt.preventDefault() } className="px-1"><Trans>
                Privacy Policy
              </Trans></a>
            </div>
          </div>
          <div className="mt-1 mt-sm-0 text-center"><Trans>
            Hand-crafted & made with
          </Trans> <i className=" icon-heart text-danger"></i></div>
        </div>
      </footer>
    );
  }
}

export default Footer;