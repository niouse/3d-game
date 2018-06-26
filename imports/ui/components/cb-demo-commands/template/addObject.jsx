import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function CbDemoCommands_Template() {
    return (wrappedComponent) => {
        const $CbDemoCommands_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="addObject" className="container" style={styles.imageBox}>
					<svg id="Capa_1"   viewBox="0 0 301.617 301.617" version="1.1" y="0px" x="0px"  width="150" height="150" onClick={props.onClick}>
						<g id="g10"><g id="g856"><path id="path2" d="m272.46 111.22h-42.95c-1.231 6.214-3.847 12.173-7.836 17.318l-9.832 12.682h45.613v130.4h-213.29v-130.4h40.32l-9.832-12.682c-3.988-5.145-6.604-11.104-7.836-17.318h-37.65c-8.284 0-15 6.716-15 15v160.4c0 8.284 6.716 15 15 15h243.29c8.284 0 15-6.716 15-15v-160.4c0.01-8.29-6.71-15-14.99-15z"/><path id="path4" d="m66.403 13.745c18.865 10.926 33.915 27.699 42.694 47.833 4.08 9.357 6.807 19.437 7.926 30h-9.564c-4.396 0-8.408 2.502-10.342 6.449s-1.453 8.651 1.24 12.125l40.702 52.5c2.182 2.814 5.542 4.461 9.103 4.461s6.921-1.647 9.102-4.461l40.702-52.5c2.693-3.474 3.174-8.178 1.24-12.125s-5.947-6.449-10.342-6.449h-11.522c-1.119-10.562-3.844-20.643-7.923-30-15.81-36.239-51.95-61.576-94.009-61.576-1.938 0-3.864 0.054-5.776 0.16-3.217 0.179-5.935 2.45-6.682 5.584-0.749 3.134 0.651 6.386 3.44 8.001z"/></g></g></svg>

				</div>
            );
        }
        $CbDemoCommands_Template.propTypes = {
            styles: PropTypes.object.isRequired,
        };
        return $CbDemoCommands_Template
    }
}