"use client";
import FunFactPage from "@/components/FunFactPage";

const FunFactsData = [
  {
    "header": "Ride Mobile Lounges",
    "subheader": "Embark on a unique journey through Dulles Airport aboard the famous 'mobile lounges,' offering panoramic views of the airport grounds and an unforgettable pre-flight experience."
  },
  {
    "header": "Building Architecture",
    "subheader": "Immerse yourself in the architectural marvels of Dulles Airport, designed by renowned architect Eero Saarinen. Discover the striking mid-century modern design of the main terminal, featuring sweeping curves and elegant lines."
  },
  {
    "header": "Smithsonian Air & Space",
    "subheader": "Experience a journey through aviation history at the Smithsonian National Air and Space Museum Annex, adjacent to Dulles Airport. Explore thousands of aviation and space artifacts, including the iconic Space Shuttle Discovery and the Enola Gay."
  },
  {
    "header": "Plane Spotting",
    "subheader": "Experience the excitement of plane spotting at Dulles Plane Watching Park, located near the airport. Enjoy fantastic views of the runways and witness planes take off and land up close, surrounded by picnic areas and a playground for families."
  },
  {
    "header": "Dulles Art Installations",
    "subheader": "Immerse yourself in the vibrant art scene at Dulles Airport, featuring a diverse range of art installations throughout the terminals. Discover captivating sculptures, murals, and interactive exhibits showcasing the creativity of local and international artists."
  },
  {
    "header": "Dulles Dining & Shopping",
    "subheader": "Satisfy your cravings with a culinary adventure at Dulles Airport, offering a diverse array of dining options from local delicacies to international cuisine. Explore the shopping outlets for unique souvenirs and last-minute essentials before your journey."
  }
];



export default function Home() {

  return (
    <>
      <div className="mt-10">
        <FunFactPage header="Fun Facts" navButtonArray={FunFactsData} />
      </div>
      <div className="p-20">

      </div>
    </>
  );
}
