import React from "react";
import useStyle from "./style/Panel2Style";
import technology from "./asset/technology.png";

function Panel2() {
  const classes = useStyle();
  return (
    <div className={classes.panel2Container}>
      <div className={classes.technologyContainer}>
        <img src={technology} alt="" />
        <div>
          <h2>Open, Integrated, Flexible = Scalable!</h2>
          <p>
            Working with open technologies means your eLearning and HCM systems
            will function exactly as per your
          </p>
          <p>
            requirements, And, more important, evolve as your needs change and
            grow.
          </p>
          <p>
            You will be freed from the lock-in of proprietary systems - their
            product roadmaps that do not work for you,
          </p>
          <p>increasing subscription costs, ever-changing policies.</p>
        </div>
      </div>
    </div>
  );
}

export default Panel2;
