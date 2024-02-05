"use client";
import NavPage from "components/NavPage";
import LocationWrapper from "components/LocationWrapper";

const NavButtonInfo = [
  {
    header: "IAD",
    subheader: "Washington Dulles International Airport",
    link: "/arriving/airport/iad"
  },
  {
    header: "DCA",
    subheader: "Ronald Reagan Washington National Airport",
    link: "/arriving/airport/dca"
  }
];

export default function Home() {

  return (
    <>
      <NavPage
        navButtonArray={NavButtonInfo}
        header="Which airport?"
      />
      <LocationWrapper/>
      <div className="p-40">

      </div>
    </>
  );
}
