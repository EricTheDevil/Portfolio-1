import React from "react";
import Tittle from "../Components/Tittle.js";
import ImageSection from "../Components/ImageSection.js";

function AboutPage() {
  return (
    <div className="AboutPage">
      <div>
        <Tittle title={"About me"} />

        <ImageSection />
      </div>
    </div>
  );
}
export default AboutPage;
