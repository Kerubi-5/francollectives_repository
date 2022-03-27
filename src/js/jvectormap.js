$("#world-map").vectorMap({
  map: "continents_merc",
  backgroundColor: "#0D0C0C",
  regionStyle: {
    "stroke-width": 0,
  },
  zoomOnScroll: false,
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
});
