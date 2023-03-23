import React from "react";
import SunCalc from "suncalc";
import "../styles/Moon.css";

export default class MoonPhase extends React.Component {
  getImage(phaseIndex) {
    const imgNum = Math.round(phaseIndex * 23);
    console.log(imgNum,phaseIndex)
    const imgName = "moon_" + (imgNum < 10 ? "0" : "") + imgNum + ".png";
    return "../../../assets/images/moon_phases/" + imgName;
  }

  getPhaseInfo(index) {
    if (index < 0.03) {
      return {
        phase: "New Moon",
        description:
          "The Moon's unilluminated side is facing the Earth. The Moon is not visible (except during a solar eclipse).",
      };
    } else if (index < 0.25) {
      return {
        phase: "Waxing Crescent",
        description:
          "The Moon appears to be partly but less than one-half illuminated by direct sunlight. The fraction of the Moon's disk that is illuminated is increasing.",
      };
    } else if (index < 0.29) {
      return {
        phase: "First Quarter",
        description:
          "One-half of the Moon appears to be illuminated by direct sunlight. The fraction of the Moon's disk that is illuminated is increasing.",
      };
    } else if (index < 0.54) {
      return {
        phase: "Waxing Gibbous",
        description:
          "The Moon appears to be more than one-half but not fully illuminated by direct sunlight. The fraction of the Moon's disk that is illuminated is increasing.",
      };
    } else if (index < 0.58) {
      return {
        phase: "Full Moon",
        description:
          "The Moon's illuminated side is facing the Earth. The Moon appears to be completely illuminated by direct sunlight.",
      };
    } else if (index < 0.75) {
      return {
        phase: "Waning Gibbous",
        description:
          "The Moon appears to be more than one-half but not fully illuminated by direct sunlight. The fraction of the Moon's disk that is illuminated is decreasing.",
      };
    } else if (index < 0.83) {
      return {
        phase: "Last Quarter",
        description:
          " One-half of the Moon appears to be illuminated by direct sunlight. The fraction of the Moon's disk that is illuminated is decreasing.",
      };
    } else {
      return {
        phase: "Waning Crescent",
        description:
          "The Moon appears to be partly but less than one-half illuminated by direct sunlight. The fraction of the Moon's disk that is illuminated is decreasing.",
      };
    }
  }

  render() {
    const { date, doNotDisplayInfo } = this.props;

    const illuminationData = SunCalc.getMoonIllumination(Date.parse(date));
    const phaseIndex = illuminationData["phase"];

    const info = this.getPhaseInfo(phaseIndex);

    if (doNotDisplayInfo) {
      return (
        <div>
          <img
            src={this.getImage(phaseIndex)}
            className="img-card rounded-circle"
            alt={"Moon phase: " + info["phase"]}
          />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img
              src={this.getImage(phaseIndex)}
              alt={"Moon phase: " + info["phase"]}
              className="img-fluid rounded"
            />
            <p className="text-light mb-0 text-center">{info["phase"]}</p>
          </div>
          <div className="col-lg-9 d-flex">
            <div>
              <div>
                <p className="description">
                  In our entire solar system, the only object that shines with its own light is the
                  Sun. That light always beams onto Earth and Moon from the direction of the Sun,
                  illuminating half of our planet in its orbit and reflecting off the surface of the
                  Moon to create moonlight. Like Earth, the Moon has a day side and a night side,
                  which change as the Moon rotates. The Sun always illuminates half of the Moon
                  while the other half remains dark, but how much we are able to see of that
                  illuminated half changes as the Moon travels through its orbit. The Moon changes
                  its apparent shape with four distinct phases depending on the Moon's position as
                  it orbits around the Earth, and the Earth's position as it orbits around the Sun.
                </p>
              </div>

              <div>
                <p className="description">
                  <strong>{info["phase"]} - </strong> {info["description"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}