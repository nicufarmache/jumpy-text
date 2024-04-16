const settings = {
  n1: [100, 400],
  n2: [50, 125],
  n3: [8, 14],
  n4: [-300, 500],
  n5: [324, 500],
  n6: [60, 263],
  n7: [40, 132],
  n8: [420, 570],
  n9: [500, 1000],
  n10: [500, 983],
  n11: [-500, -138],
  n12: [425, 1000],
  n13: [0, 360],
  n14: [0, 360],
}

const text = document.querySelector('.text');

setInterval(() => {
  Object.keys(settings).map((key) => {
    const [min, max] = settings[key];
    document.body.style.setProperty(`--setting-${key}`, Math.floor(Math.random() * (max - min + 1) + min));
  });
}, 1000);
