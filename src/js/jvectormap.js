$("#world-map").vectorMap({
  map: "continents_merc",
  // backgroundColor: "#0D0C0C",
  zoomOnScroll: false,
  regionStyle: {
    hover: {
      "fill-opacity": 0.7,
    },
  },
  series: {
    regions: [
      {
        values: {
          AF: "#41EA40",
          NA: "#FFE900",
          OC: "#8424DB",
          AS: "#54EDFF",
          EU: "#FBAFD5",
          SA: "#F954CE",
        },
        attribute: "fill",
      },
    ],
  },
  onRegionTipShow: function (e, el, code) {
    el.html(`
      <div class="p-4">
        <div class="text-xl text-center">
          <h1>${continentData[code].name}</h1>
        </div>
        <div class="flex justify-center">
          ${renderPeople(continentData[code])}
        </div>
      </div>
    `);
  },
});

const continentData = {
  AF: {
    name: "Africa",
    value: 5,
  },
  NA: {
    name: "North America",
    value: 2,
  },
  OC: {
    name: "Oceania",
    value: 1,
  },
  AS: {
    name: "Asia",
    value: 8,
  },
  EU: {
    name: "Europe",
    value: 4,
  },
  SA: {
    name: "South America",
    value: 7,
  },
};

const renderPeople = (data) => {
  const arr = [];
  for (let i = 0; i <= data.value; i++) {
    arr.push('<i class="bx bx-user"></i>');
  }

  return arr.join("");
};
