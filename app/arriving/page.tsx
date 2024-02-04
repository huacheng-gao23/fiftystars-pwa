"use client";
import NavPage from "components/NavPage";

const NavButtonInfo = [
  {
    header: "Airport",
    subheader: "Landing at IAD or DCA?",
    link: "/arriving"
  },
  {
    header: "Train",
    subheader: "Arriving at Union Station?",
    link: "/arriving"
  },
  {
    header: "Car",
    subheader: "Looking for a place to park?",
    link: "/arriving"
  }
];

export default function Home() {

  return (
    <NavPage navButtonArray={NavButtonInfo}></NavPage>
  );
}
