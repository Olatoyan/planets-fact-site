"use strict";

const main = document.querySelector("main");
const planetsList = document.getElementById("planet-list");
const planets = document.querySelectorAll(".planet");
const mercury = document.querySelector(".mercury");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  planetsList.classList.toggle("sma:-translate-x-full");
  planetsList.classList.toggle("sma:opacity-0");
  planetsList.classList.toggle("sma:invisible");

  console.log("menu");
});

const renderPlanets = function (data) {
  let color;
  if (data.name === "Mercury") color = "vibrant-blue";
  if (data.name === "Venus") color = "warm-orange";
  if (data.name === "Earth") color = "deep-purple";
  if (data.name === "Mars") color = "bold-red-orange";
  if (data.name === "Jupiter") color = "bright-red";
  if (data.name === "Saturn") color = "rich-orange";
  if (data.name === "Uranus") color = "teal";
  if (data.name === "Neptune") color = "dark-blue";
  console.log(data);
  console.log(`sma:border-${color}`);
  const html = `
          <section
          class="grid grid-cols-2 justify-items-center pt-52 items-center pb-36 planet-section pl-16 lag:grid-cols-1 lag:px-16 mid:gap-y-20 xs:px-8 sma:relative sma:pb-20"
        >
          <div class="relative sma:grid sma:justify-items-center">
            <img src="${data.images.planet}" alt="${data.name}" class="sma:w-1/2" />
          </div>
          <div class="flex flex-col px-60 pr-72 gap-20 xlg:px-40 lag:grid lag:grid-cols-2 lag:items-center lag:px-0 lag:gap-24 mid:grid-cols-1 mid:text-center">
            <div class="flex flex-col gap-10">
              <h1
                class="text-8rem font-antonio font-400 leading-norm uppercase primary-heading "
              >
              ${data.name}
              </h1>
              <p class="font-spartan text-1.8rem leading-2.5rem font-400">
               ${data.overview.content}
              </p>
              <div
                class="flex items-center font-spartan text-1.4rem leading-2.5rem font-400 opacity-50 mid:justify-center"
              >
                <span> Source :</span>
                <a
                  href="${data.overview.source}"
                  class="underline font-700 pr-3" target="_blank"
                >
                  Wikipedia</a
                >
                <img src="assets/icon-source.svg" alt="source" />
              </div>
            </div>
            <div class="flex flex-col gap-7 more-info-box sma:absolute sma:top-0 sma:flex-row sma:justify-center sma:w-full sma:px-8 sma:left-0">
              <div
                class="flex items-center gap-12 cursor-pointer bg-${color} py-5 px-11 overview sma:bg-transparent sma:border-b-4 sma:border-${color} sma:px-3 "
              >
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50 sma:hidden "
                >
                  01
                </p>
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan"
                >
                  Overview
                </p>
              </div>
              <div
                class="flex items-center gap-12 py-5 px-11 border border-white border-opacity-20 cursor-pointer hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 internal sma:border-0 sma:hover:bg-opacity-0 sma:hover:border-opacity-0 sma:hover:border-0 sma:px-3 "
              >
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50 sma:hidden"
                >
                  02
                </p>
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50 "
                >
                <span class="sma:hidden">Internal</span> Structure
                </p>
              </div>
              <div
                class="flex items-center gap-12 py-5 px-11 border border-white border-opacity-20 cursor-pointer hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 geology sma:border-0 sma:hover:bg-opacity-0 sma:hover:border-opacity-0 sma:hover:border-0 sma:px-3 "
              >
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50 sma:hidden"
                >
                  03
                </p>
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
                >
                  Surface <span class="sma:hidden">Geology</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="grid grid-cols-4 gap-12 pr-72 pl-60 pb-24 xlg:px-40 lag:px-16 mid:grid-cols-2 xs:px-8 xs:grid-cols-1 sma:gap-4">
          <div
            class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
          >
            <h3
              class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50 "
            >
              Rotation Time
            </h3>
            <p
              class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
            >
              ${data.rotation}
            </p>
          </div>
          <div
            class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
          >
            <h3
              class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
            >
              Revolution Time
            </h3>
            <p
              class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
            >
              ${data.revolution}
            </p>
          </div>
          <div
            class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
          >
            <h3
              class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
            >
              Radius
            </h3>
            <p
              class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
            >
              ${data.radius}
            </p>
          </div>
          <div
            class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
          >
            <h3
              class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
            >
              Average Temp.
            </h3>
            <p
              class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
            >
              ${data.temperature}
            </p>
          </div>
        </section>
       `;

  main.innerHTML = html;
};

const renderInternal = function (data) {
  let color;
  if (data.name === "Mercury") color = "vibrant-blue";
  if (data.name === "Venus") color = "warm-orange";
  if (data.name === "Earth") color = "deep-purple";
  if (data.name === "Mars") color = "bold-red-orange";
  if (data.name === "Jupiter") color = "bright-red";
  if (data.name === "Saturn") color = "rich-orange";
  if (data.name === "Uranus") color = "teal";
  if (data.name === "Neptune") color = "dark-blue";
  const html = `
          <section
          class="grid grid-cols-2 justify-items-center pt-52 items-center pb-36 planet-section pl-16 lag:grid-cols-1 lag:px-16 mid:gap-y-20 xs:px-8 sma:relative sma:pb-20"
        >
          <div class="relative sma:grid sma:justify-items-center">
            <img src="${data.images.internal}" alt="${data.name}" class="sma:w-1/2"/>
          </div>
          <div class="flex flex-col px-60 pr-72 gap-20 xlg:px-40  lag:grid lag:grid-cols-2 lag:items-center lag:px-0 lag:gap-24 mid:grid-cols-1 mid:text-center">
            <div class="flex flex-col gap-10">
              <h1
                class="text-8rem font-antonio font-400 leading-norm uppercase primary-heading"
              >
                ${data.name}
              </h1>
              <p class="font-spartan text-1.8rem leading-2.5rem font-400">
               ${data.structure.content}
              </p>
              <div
                class="flex items-center font-spartan text-1.4rem leading-2.5rem font-400 opacity-50  mid:justify-center"
              >
                <span> Source :</span>
                <a
                  href="${data.structure.source}"
                  class="underline font-700 pr-3" target="_blank"
                >
                  Wikipedia</a
                >
                <img src="assets/icon-source.svg" alt="source" />
              </div>
            </div>
            <div class="flex flex-col gap-7 more-info-box sma:absolute sma:top-0 sma:flex-row sma:justify-center sma:w-full sma:px-8 sma:left-0">
              <div
                class="flex items-center gap-12 cursor-pointer border border-white border-opacity-20 hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 py-5 px-11 overview sma:border-0 sma:hover:bg-opacity-0 sma:hover:border-opacity-0 sma:hover:border-0 sma:px-3 "
              >
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50 sma:hidden"
                >
                  01
                </p>
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
                >
                  Overview
                </p>
              </div>
              <div
                class="flex items-center gap-12 py-5 px-11 cursor-pointer  bg-${color} internal sma:bg-transparent sma:border-b-4 sma:border-${color} sma:px-3 "
              >
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50  sma:hidden"
                >
                  02
                </p>
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan"
                >
                <span class="sma:hidden">Internal</span> Structure
                </p>
              </div>
              <div
                class="flex items-center gap-12 py-5 px-11 border border-white border-opacity-20 cursor-pointer hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 geology sma:border-0 sma:hover:bg-opacity-0 sma:hover:border-opacity-0 sma:hover:border-0 sma:px-3 "
              >
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50 sma:hidden"
                >
                  03
                </p>
                <p
                  class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
                >
                  Surface <span class="sma:hidden">Geology</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="grid grid-cols-4 gap-12 pr-72 pl-60 pb-24 xlg:px-40 lag:px-16 mid:grid-cols-2 xs:px-8 xs:grid-cols-1 sma:gap-4">
          <div
            class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
          >
            <h3
              class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
            >
              Rotation Time
            </h3>
            <p
              class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
            >
             ${data.rotation}
            </p>
          </div>
          <div
            class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
          >
            <h3
              class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
            >
              Revolution Time
            </h3>
            <p
              class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
            >
              ${data.revolution}
            </p>
          </div>
          <div
            class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
          >
            <h3
              class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
            >
              Radius
            </h3>
            <p
              class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
            >
             ${data.radius}
            </p>
          </div>
          <div
            class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
          >
            <h3
              class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
            >
              Average Temp.
            </h3>
            <p
              class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
            >
              ${data.temperature}
            </p>
          </div>
        </section>
       `;
  main.innerHTML = html;
};

const renderGeology = function (data) {
  let color;
  if (data.name === "Mercury") color = "vibrant-blue";
  if (data.name === "Venus") color = "warm-orange";
  if (data.name === "Earth") color = "deep-purple";
  if (data.name === "Mars") color = "bold-red-orange";
  if (data.name === "Jupiter") color = "bright-red";
  if (data.name === "Saturn") color = "rich-orange";
  if (data.name === "Uranus") color = "teal";
  if (data.name === "Neptune") color = "dark-blue";
  const html = `
  <section
  class="grid grid-cols-2 justify-items-center pt-52 items-center pb-36 planet-section pl-16 lag:grid-cols-1 lag:px-16 mid:gap-y-20 xs:px-8 sma:relative sma:pb-20"
>
  <div class="relative sma:grid sma:justify-items-center">
    <img src="${data.images.planet}" alt="${data.name}" class="sma:w-1/2"/>
    <div class="w-64 absolute bottom-8 left-1/2 -translate-x-1/2 sma:w-36 sma:bottom-0" >
            <img
            src="${data.images.geology}"
            alt="${data.name}"
            class="object-cover"
          />
    </div>
  </div>
  <div class="flex flex-col px-60 pr-72 gap-20 xlg:px-40  lag:grid lag:grid-cols-2 lag:items-center lag:px-0 lag:gap-24 mid:grid-cols-1 mid:text-center">
    <div class="flex flex-col gap-10">
      <h1
        class="text-8rem font-antonio font-400 leading-norm uppercase primary-heading"
      >
        ${data.name}
      </h1>
      <p class="font-spartan text-1.8rem leading-2.5rem font-400">
       ${data.geology.content}
      </p>
      <div
        class="flex items-center font-spartan text-1.4rem leading-2.5rem font-400 opacity-50 mid:justify-center"
      >
        <span> Source :</span>
        <a
          href="${data.geology.source}"
          class="underline font-700 pr-3" target="_blank"
        >
          Wikipedia</a
        >
        <img src="assets/icon-source.svg" alt="source" />
      </div>
    </div>
    <div class="flex flex-col gap-7 more-info-box sma:absolute sma:top-0 sma:flex-row sma:justify-center sma:w-full sma:px-8 sma:left-0">
      <div
        class="flex items-center gap-12 cursor-pointer border border-white border-opacity-20 hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 py-5 px-11 overview sma:border-0 sma:hover:bg-opacity-0 sma:hover:border-opacity-0 sma:hover:border-0 sma:px-3 "
      >
        <p
          class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50  sma:hidden"
        >
          01
        </p>
        <p
          class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
        >
          Overview
        </p>
      </div>
      <div
        class="flex items-center gap-12 py-5 px-11 cursor-pointer   hover:bg-silver-gray hover:bg-opacity-20 hover:border-silver-gray hover:border-opacity-0 border border-white border-opacity-20 internal sma:border-0 sma:hover:bg-opacity-0 sma:hover:border-opacity-0 sma:hover:border-0 sma:px-3 "
      >
        <p
          class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50  sma:hidden"
        >
          02
        </p>
        <p
          class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50"
        >
        <span class="sma:hidden">Internal</span>  Structure
        </p>
      </div>
      <div
        class="flex items-center gap-12 py-5 px-11  cursor-pointer bg-${color} geology sma:bg-transparent sma:border-b-4 sma:border-${color} sma:px-3 "
      >
        <p
          class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan opacity-50 sma:hidden "
        >
          03
        </p>
        <p
          class="text-1.2rem font-700 leading-2.5rem tracking-0.2571rem uppercase font-spartan"
        >
          Surface <span class="sma:hidden">Geology</span> 
        </p>
      </div>
    </div>
  </div>
</section>
<section class="grid grid-cols-4 gap-12 pr-72 pl-60 pb-24 xlg:px-40 lag:px-16 mid:grid-cols-2 xs:px-8 xs:grid-cols-1 sma:gap-4">
  <div
    class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
  >
    <h3
      class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
    >
      Rotation Time
    </h3>
    <p
      class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
    >
     ${data.rotation}
    </p>
  </div>
  <div
    class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
  >
    <h3
      class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
    >
      Revolution Time
    </h3>
    <p
      class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
    >
      ${data.revolution}
    </p>
  </div>
  <div
    class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
  >
    <h3
      class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
    >
      Radius
    </h3>
    <p
      class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
    >
     ${data.radius}
    </p>
  </div>
  <div
    class="flex flex-col gap-2 pt-8 pb-11 px-9 border-white border border-opacity-50 slag:px-6"
  >
    <h3
      class="text-1.1rem font-700 font-spartan leading-2.5rem tracking-0.1rem uppercase opacity-50"
    >
      Average Temp.
    </h3>
    <p
      class="text-4rem uppercase font-antonio font-400 leading-norm -tracking-0.15rem slag:text-2.4rem slag:-tracking-0.09rem"
    >
      ${data.temperature}
    </p>
  </div>
</section>
`;
  main.innerHTML = html;
};

const getPlanets = async function () {
  try {
    const res = await fetch("data.json");
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
getPlanets();

let selectedPlanetData = null;
console.log(selectedPlanetData);

(async function () {
  const data = await getPlanets();
  selectedPlanetData = data[0];
  renderPlanets(selectedPlanetData);
  mercury.classList.remove("before:hidden");
})();
// renderPlanets(selectedPlanetData);

planetsList.addEventListener("click", async function (e) {
  const planet = e.target;
  if (!planet.closest(".planet")) return;
  planets.forEach((plan) => {
    plan.classList.add("before:hidden");
  });
  planetsList.classList.toggle("sma:-translate-x-full");
  planetsList.classList.toggle("sma:opacity-0");
  planetsList.classList.toggle("sma:invisible");
  const data = await getPlanets();
  e.preventDefault();
  if (planet.closest(".mercury")) {
    selectedPlanetData = data[0];
    renderPlanets(data[0]);
    planet.closest(".mercury").classList.remove("before:hidden");
  }
  if (planet.closest(".venus")) {
    selectedPlanetData = data[1];
    renderPlanets(data[1]);
    planet.closest(".venus").classList.remove("before:hidden");
  }
  if (planet.closest(".earth")) {
    selectedPlanetData = data[2];
    renderPlanets(data[2]);
    planet.closest(".earth").classList.remove("before:hidden");
  }
  if (planet.closest(".mars")) {
    selectedPlanetData = data[3];
    renderPlanets(data[3]);
    planet.closest(".mars").classList.remove("before:hidden");
  }
  if (planet.closest(".jupiter")) {
    selectedPlanetData = data[4];
    renderPlanets(data[4]);
    planet.closest(".jupiter").classList.remove("before:hidden");
  }
  if (planet.closest(".saturn")) {
    selectedPlanetData = data[5];
    renderPlanets(data[5]);
    planet.closest(".saturn").classList.remove("before:hidden");
  }
  if (planet.closest(".uranus")) {
    selectedPlanetData = data[6];
    renderPlanets(data[6]);
    planet.closest(".uranus").classList.remove("before:hidden");
  }
  if (planet.closest(".neptune")) {
    selectedPlanetData = data[7];
    renderPlanets(data[7]);
    planet.closest(".neptune").classList.remove("before:hidden");
  }
});

main.addEventListener("click", async function (e) {
  const data = await getPlanets();
  if (e.target.closest(".overview")) {
    renderPlanets(selectedPlanetData);
  }
  if (e.target.closest(".internal")) {
    renderInternal(selectedPlanetData);
  }
  if (e.target.closest(".geology")) {
    renderGeology(selectedPlanetData);
  }
});
