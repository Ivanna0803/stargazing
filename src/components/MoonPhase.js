import React from 'react';
import SunCalc from 'suncalc';

export default class MoonPhase extends React.Component {
    getImage(phaseIndex) {
        const imgNum = Math.round(phaseIndex * 23);
        const imgName = 'moon_' + (imgNum < 10 ? '0' : '') + imgNum + '.png';
        return '../../../assets/images/moon_phases/' + imgName;
    }

    getPhaseInfo(phaseIndex) {
        const index = Math.round((phaseIndex + Number.EPSILON) * 100) / 100;
        if (index < 0.01) {
            return {
                'phase': 'New Moon',
                'description': 'test',
            };
        } else if (index < 0.25) {
            return {
                'phase': 'Waxing Crescent',
                'description': 'test',
            };
        } else if (index < 0.26) {
            return {
                'phase': 'First Quarter',
                'description': 'test',
            };
        } else if (index < 0.50) {
            return {
                'phase': 'Waxing Gibbous',
                'description': 'test',
            };
        } else if (index < 0.51) {
            return {
                'phase': 'Full Moon',
                'description': 'test',
            };
        } else if (index < 0.75) {
            return {
                'phase': 'Waning Gibbous',
                'description': 'test',
            };
        } else if (index < 0.76) {
            return {
                'phase': 'Last Quarter',
                'description': 'test',
            };
        } else {
            return {
                'phase': 'Waning Crescent',
                'description': 'test',
            };
        }
    }

    render() {
        const { date, doNotDisplayInfo } = this.props;

        const illuminationData = SunCalc.getMoonIllumination(Date.parse(date));
        const phaseIndex = illuminationData['phase'];

        const info = this.getPhaseInfo(phaseIndex);

        if (doNotDisplayInfo) {
            return (<div><img src={this.getImage(phaseIndex)} alt={"Moon phase: " + info['phase']} /></div>);
        }

        return (
            <div>
                <img src={this.getImage(phaseIndex)} alt={"Moon phase: " + info['phase']} />
                <p>Moon Phase: {info['phase']}</p>
                <p>Description: {info['description']}</p>
            </div>
        );
    }
}
