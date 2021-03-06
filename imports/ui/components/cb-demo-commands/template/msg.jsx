import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function CbDemoCommands_Template() {
    return (wrappedComponent) => {
        const $CbDemoCommands_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="msg" className="container" style={styles.imageBox}>
					<svg id="Layer_1"   viewBox="0 0 512 512" version="1.1" y="0px" x="0px"  width="150" height="150" onClick={props.onClick}>
						<g id="g6"><g id="g4"><path id="path2" d="m511.61 197.6c-0.001-0.77-0.173-1.933-0.472-2.603-0.787-2.854-2.536-5.461-5.154-7.281l-73.292-50.948v-54.617c0-7.24-5.872-13.112-13.112-13.112h-84.33l-71.743-49.878c-4.484-3.121-10.437-3.134-14.935-0.026l-72.206 49.904h-83.944c-7.242 0-13.112 5.872-13.112 13.112v53.973l-73.648 50.9c-3.623 2.504-5.583 6.507-5.645 10.6-0.004 0.07-0.021 0.15-0.021 0.23l0.391 284.24c0.005 3.477 1.391 6.81 3.852 9.266 2.458 2.451 5.788 3.827 9.26 3.827h0.018l485.38-0.667c7.24-0.01 13.104-5.889 13.094-13.13l-0.38-283.8zm-78.92-28.89l41.898 29.118-41.898 29.128v-58.25zm-176.67-122.83l33.31 23.156h-66.812l33.5-23.156zm-150.48 49.381h300.93v149.92l-101.04 70.25-41.194-31.954c-0.064-0.05-0.119-0.081-0.181-0.126-4.604-3.454-11.116-3.581-15.894 0.126l-41.493 32.185-101.13-69.893v-150.5zm-26.226 72.735v59.64l-43.146-29.819 43.146-29.82zm-53.056 54.87l158.67 109.66-158.35 122.82-0.322-232.48zm25.617 246.04l204.32-158.48 203.59 157.92-407.92 0.56zm275.26-136.64l158.28-110.04 0.32 233.06-158.6-123.02z"/></g></g><g id="g12"><g id="g10"><path id="path8" d="m344.77 147.71h-177.54c-7.24 0-13.112 5.872-13.112 13.112s5.872 13.112 13.112 13.112h177.54c7.242 0 13.112-5.872 13.112-13.112s-5.87-13.11-13.11-13.11z"/></g></g><g id="g18"><g id="g16"><path id="path14" d="m344.77 215.9h-177.54c-7.24 0-13.112 5.872-13.112 13.112s5.872 13.112 13.112 13.112h177.54c7.242 0 13.112-5.872 13.112-13.112s-5.87-13.11-13.11-13.11z"/></g></g>
					</svg>

				</div>
            );
        }
        $CbDemoCommands_Template.propTypes = {
            styles: PropTypes.object.isRequired,
        };
        return $CbDemoCommands_Template
    }
}