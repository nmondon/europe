'use strict';

var React = require('react');
var simplify = require('services/get-simplify');
var projection = require('services/get-projection');
var path = d3.geo.path()
    .projection(projection);

var style = {
    stroke: 'rgb(232, 101, 101)',
    strokeLinejoin: 'round',
    strokeWidth: '6',
    strokeMiterlimit: '4',
    fill: 'none'
};

var OTANStroke = React.createClass({
    render: function () {
        return (
            <path
                style={style}
                d={path(this.props.feature)}
                onMouseOver={this.handleMouseOver}></path>
        )
    }
});

module.exports = OTANStroke;