import React from "react";
import SocialLogin from "../SocialLogin";
import FindUs from "../FindUs";

const RightNavbar = () => {
  return (
    <div className="space-y-7">
      <section>
        <SocialLogin />
      </section>
      <section>
        <FindUs />
      </section>
    </div>
  );
};

export default RightNavbar;
