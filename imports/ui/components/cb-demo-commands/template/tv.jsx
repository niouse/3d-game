import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function CbDemoCommands_Template() {
    return (wrappedComponent) => {
        const $CbDemoCommands_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="tv" className="container" style={styles.imageBox}>
					<svg id="Capa_1"   viewBox="0 0 512 512" version="1.1" y="0px" x="0px"  width="150" height="150" onClick={props.onClick}>
						<g id="g6"><g id="g4"><path id="path2" d="m256.01 114.43c-19.254 0.001-36.294 12.263-42.402 30.514l28.449 9.521c2.009-6.002 7.616-10.035 13.954-10.035 6.331 0 11.936 4.026 13.949 10.02l28.439-9.552c-6.13-18.21-23.16-30.46-42.39-30.46z"/></g></g><g id="g12"><g id="g10"><path id="path8" d="m256.02 58.635c-43.112 0-81.266 27.452-94.938 68.311l28.449 9.521c9.574-28.609 36.294-47.832 66.489-47.832 30.16-0.001 56.87 19.193 66.465 47.76l28.439-9.552c-13.7-40.805-51.84-68.215-94.9-68.215z"/></g></g><g id="g18"><g id="g16"><path id="path14" d="m256.02 0c-66.677 0-125.68 42.456-146.83 105.65l28.449 9.521c17.05-50.944 64.62-85.17 118.38-85.17 53.699 0 101.26 34.175 118.34 85.04l28.44-9.552c-21.19-63.098-80.17-105.49-146.78-105.49z"/></g></g><g id="g24"><g id="g22"><path id="path20" d="m307.75 189.19h-103.5c-29.774 0-53.998 24.224-53.998 53.998v214.82c0 29.774 24.224 53.998 53.998 53.998h103.5c29.774 0 53.998-24.224 53.998-53.998v-214.83c0-29.77-24.23-53.99-54-53.99zm24 268.81c0 13.232-10.766 23.998-23.998 23.998h-103.5c-13.232 0-23.998-10.766-23.998-23.998v-214.82c0-13.232 10.766-23.998 23.998-23.998h103.5c13.232 0 23.998 10.766 23.998 23.998v214.82z"/></g></g><g id="g30"><g id="g28"><rect id="rect26" y="278.72" x="211.59" height="29.667" width="29.667"/></g></g><g id="g36"><g id="g34"><rect id="rect32" y="278.72" x="270.75" height="29.667" width="29.667"/></g></g><g id="g42"><g id="g40"><rect id="rect38" y="336.93" x="211.59" height="29.667" width="29.667"/></g></g><g id="g48"><g id="g46"><rect id="rect44" y="336.93" x="270.75" height="29.667" width="29.667"/></g></g><g id="g54"><g id="g52"><rect id="rect50" y="395.14" x="211.59" height="29.667" width="29.667"/></g></g><g id="g60"><g id="g58"><rect id="rect56" y="395.14" x="270.75" height="29.667" width="29.667"/></g></g></svg>

				</div>
            );
        }
        $CbDemoCommands_Template.propTypes = {
            styles: PropTypes.object.isRequired,
        };
        return $CbDemoCommands_Template
    }
}