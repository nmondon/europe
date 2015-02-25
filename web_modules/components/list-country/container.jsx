'use strict';

require('list-country.scss');

var React = require('react');
var $ = require('jquery');
var _ = require('lodash');

var GroupCountry = require('components/list-country/group-country');
var Country = require('components/list-country/country');

/**
 * @props data
 * @type {*|Function}
 */
module.exports = React.createClass({
    computeGroups: function () {
        var groupAdhesionUEHash = _.groupBy(this.props.data, function (c) {
            return c.UE;
        });
        var currentFirstCountryInd = 0;
        var groupAdhesionUEData = _.keys(groupAdhesionUEHash).map(function (key, i) {
            var obj = {
                key: key,
                countries: groupAdhesionUEHash[key],
                firstCountryInd: currentFirstCountryInd
            };
            currentFirstCountryInd += groupAdhesionUEHash[key].length;
            return obj;
        });
        return groupAdhesionUEData;
    },
    render: function () {
        var groupAdhesionUEData = this.computeGroups();
        return (
            <div id="list-country">
                <div className="list-country-container">
                {groupAdhesionUEData.map(function (g, kg) {
                    return (
                        <GroupCountry key={kg} >
                            {
                                g.countries.map(function (c, kc) {
                                    return <Country country={c} key={kc}/>;
                                })
                                }
                        </GroupCountry>
                    );
                })}
                </div>
            </div>
        );
    }
});