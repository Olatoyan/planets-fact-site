"use strict";
const planetSection = document.querySelector(".planet-section");
const plantList = document.getElementById("planet-list");
const morePlanetInfo = document.querySelector(".more-info-box");
const main = document.querySelector("main");

// const renderOverview = function (data) {
//   const html = `
//             <div>
//             <img src="${data.images.planet}" alt="${data.name}" />
//           </div>
//           <div class="flex flex-col px-72 gap-20">
//             <div class="flex flex-col gap-10">
//               <h1
//                 class="text-8rem font-antonio font-400 leading-norm uppercase primary-heading"
//               >${data.name}</h1>
//               <p class="font-spartan text-1.8rem leading-2.5rem font-400">
//                ${data.overview.content}
//               </p>
//               <div
//                 class="flex items-center font-spartan text-1.4rem leading-2.5rem font-400 opacity-50"
//               >
//                 <span> Source :</span>
//                 <a
//                   href="${data.overview.source}"
//                   class="underline font-700 pr-3"
//                 >
//                   Wikipedia</a
//                 >
//                 <img src="assets/icon-source.svg" alt="source" />
//               </div>
//             </div>
//             <div class="flex flex-col gap-7">
//               <div
//                 class="flex items-center gap-12 cursor-pointer bg-vibrant-blue py-5 px-11"
//               >
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
//                 >
//                   01
//                 </p>
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan"
//                 >
//                   Overview
//                 </p>
//               </div>
//               <div
//                 class="flex items-center gap-12 py-5 px-11 border border-white border-opacity-20 cursor-pointer hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0"
//               >
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
//                 >
//                   02
//                 </p>
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan"
//                 >
//                   Internal Structure
//                 </p>
//               </div>
//               <div
//                 class="flex items-center gap-12 py-5 px-11 border border-white border-opacity-20 cursor-pointer hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0"
//               >
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
//                 >
//                   03
//                 </p>
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan"
//                 >
//                   Surface Geology
//                 </p>
//               </div>
//             </div>
//           </div>
//   `;
//   planetSection.innerHTML = "";
//   planetSection.insertAdjacentHTML("beforeend", html);
// };
// const renderInternalStructure = function (data) {
//   const html = `
//             <div>
//             <img src="${data.images.internal}" alt="${data.name}" />
//           </div>
//           <div class="flex flex-col px-72 gap-20">
//             <div class="flex flex-col gap-10">
//               <h1
//                 class="text-8rem font-antonio font-400 leading-norm uppercase primary-heading"
//               >${data.name}</h1>
//               <p class="font-spartan text-1.8rem leading-2.5rem font-400">
//                ${data.structure.content}
//               </p>
//               <div
//                 class="flex items-center font-spartan text-1.4rem leading-2.5rem font-400 opacity-50"
//               >
//                 <span> Source :</span>
//                 <a
//                   href="${data.structure.source}"
//                   class="underline font-700 pr-3"
//                 >
//                   Wikipedia</a
//                 >
//                 <img src="assets/icon-source.svg" alt="source" />
//               </div>
//             </div>
//             <div class="flex flex-col gap-7">
//               <div
//                 class="flex items-center gap-12 cursor-pointer border border-white border-opacity-20 py-5 px-11  hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 "
//               >
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
//                 >
//                   01
//                 </p>
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan"
//                 >
//                   Overview
//                 </p>
//               </div>
//               <div
//                 class="flex items-center gap-12 bg-vibrant-blue py-5 px-11 cursor-pointer"
//               >
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
//                 >
//                   02
//                 </p>
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan"
//                 >
//                   Internal Structure
//                 </p>
//               </div>
//               <div
//                 class="flex items-center gap-12 py-5 px-11 border border-white border-opacity-20 cursor-pointer hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0"
//               >
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
//                 >
//                   03
//                 </p>
//                 <p
//                   class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan"
//                 >
//                   Surface Geology
//                 </p>
//               </div>
//             </div>
//           </div>
//   `;
//   planetSection.innerHTML = "";
//   planetSection.insertAdjacentHTML("beforeend", html);
// };

const renderPlanetInfo = function (data, section, info) {
  console.log("Data:", data); // Check the value of the data object
  console.log("Section:", section); // Check the value of the section parameter

  const html = `
      <section class="grid grid-cols-2 justify-items-center pt-52 items-center pb-36 planet-section">
        <div class="relative">
          <img src="${data.images[section]}" alt="${data.name}" />
          <div class="w-64 absolute bottom-8 left-1/2 -translate-x-1/2">
              <img
                src="assets/geology-neptune.png"
                alt="mercury"
                class="object-cover"
              />
            </div>
        </div>
        <div class="flex flex-col px-72 gap-20">
          <div class="flex flex-col gap-10">
            <h1 class="text-8rem font-antonio font-400 leading-norm uppercase primary-heading">${
              data.name
            }</h1>
            <p class="font-spartan text-1.8rem leading-2.5rem font-400">${
              data[info].content
            }</p>
            <div class="flex items-center font-spartan text-1.4rem leading-2.5rem font-400 opacity-50">
              <span> Source :</span>
              <a href="${
                data[info].source
              }" class="underline font-700 pr-3">Wikipedia</a>
              <img src="assets/icon-source.svg" alt="source" />
            </div>
          </div>
          <div class="flex flex-col gap-7">
            <div class="flex items-center gap-12 cursor-pointer ${
              info === "overview"
                ? "bg-vibrant-blue"
                : "border border-white border-opacity-20"
            } py-5 px-11 hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 overview">
              <p class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50">01</p>
              <p class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan">Overview</p>
            </div>
            <div class="flex items-center gap-12 cursor-pointer ${
              info === "internal"
                ? "bg-vibrant-blue"
                : "border border-white border-opacity-20"
            } py-5 px-11 hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 internal">
              <p class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50">02</p>
              <p class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan">Internal Structure</p>
            </div>
            <div class="flex items-center gap-12 cursor-pointer ${
              info === "geology"
                ? "bg-vibrant-blue"
                : "border border-white border-opacity-20"
            } py-5 px-11 hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 geology">
              <p class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50">03</p>
              <p class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan">Surface Geology</p>
            </div>
          </div>
        </div>
    </section>
    <section class="grid grid-cols-4 gap-12 pr-72 pl-60 pb-24">
      <div
        class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50">
        <h3
          class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50">
          Rotation Time
        </h3>
        <p
          class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem">
          ${data.rotation}
        </p>
      </div>
      <div
        class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50">
        <h3
          class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50">
          Revolution Time
        </h3>
        <p
          class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem">
          ${data.revolution}
        </p>
      </div>
      <div
        class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50">
        <h3
          class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50">
          Radius
        </h3>
        <p
          class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem">
         ${data.radius}
        </p>
      </div>
      <div
        class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50">
        <h3
          class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50">
          Average Temp.
        </h3>
        <p
          class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem">
         ${data.temperature}
        </p>
      </div>
    </section>
  `;

  main.innerHTML = html;
};

// const getMoreInfo =  function (e) {
//   console.log(e.target);
//   console.log(currentPlanetData);
//   if (currentPlanetData === null) {
//     // No planet is selected yet, do nothing
//     return;
//   }
//   if (e.target.classList.contains("overview")) {
//     renderOverview(currentPlanetData);
//   } else if (e.target.classList.contains("internal")) {
//     renderInternalStructure(currentPlanetData);
//   } else if (e.target.classList.contains("geology")) {
//     renderGeology(currentPlanetData);
//   }
// }

const renderOverview = function (data) {
  // const data = await getPlanets();
  renderPlanetInfo(data, "planet", "overview");
};

const renderInternalStructure = function (data) {
  renderPlanetInfo(data, "internal", "structure");
};

const renderGeology = function (data) {
  renderPlanetInfo(data, "geology", "geology");
};
let data;
const getPlanets = async function () {
  try {
    const res = await fetch("data.json");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
getPlanets();

let currentPlanetData = data;

plantList.addEventListener("click", async function (e) {
  try {
    e.preventDefault();
    const planet = e.target.classList;
    const data = await getPlanets();

    if (planet.contains("mercury")) {
      currentPlanetData = data[0];
    } else if (planet.contains("venus")) {
      currentPlanetData = data[1];
    } else if (planet.contains("earth")) {
      currentPlanetData = data[2];
    } else if (planet.contains("mars")) {
      currentPlanetData = data[3];
    } else if (planet.contains("jupiter")) {
      currentPlanetData = data[4];
    } else if (planet.contains("saturn")) {
      currentPlanetData = data[5];
    } else if (planet.contains("uranus")) {
      currentPlanetData = data[6];
    } else if (planet.contains("neptune")) {
      currentPlanetData = data[7];
    }

    renderOverview(currentPlanetData);
    console.log(currentPlanetData);
  } catch (err) {
    console.log(err);
  }
});

main.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(currentPlanetData);
  if (currentPlanetData === null) {
    // No planet is selected yet, do nothing
    return;
  }
  if (e.target.closest(".overview")) {
    renderOverview(currentPlanetData);
    console.log("overview");
  } else if (e.target.closest(".internal")) {
    renderInternalStructure(currentPlanetData);
  } else if (e.target.closest(".geology")) {
    renderGeology(currentPlanetData);
  }
});
