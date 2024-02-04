"use client";
import NavPage from "components/NavPage";

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
    <NavPage
      navButtonArray={NavButtonInfo}
      header="Which airport?"
    />
  );
}
