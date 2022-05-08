import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },

  winter: {
    text: "Burr, it is a chilly",
    iconName: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const DisplaySeason = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //[season either winter or summer]{text, iconName}

  //   console.log(props.latitude);
  //   console.log(season);
  //   const text =
  //     season === "winter" ? "Burr,it is chilly" : "Let's hit the beach";

  //   const icon = season === "winter" ? "snowflake" : "sun";
  //   //   <i class="snowflake icon" />

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default DisplaySeason;
