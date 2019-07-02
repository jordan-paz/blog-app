const white = "#FFFFFF";
const black = "#120000";
const salmon = "#fc7268";

const themeLight = {
  background: white,
  textColor: black,
  titleColor: black,
  postTitleColor: black,
  infoTextColor: salmon,
  oppositeBackground: black
};

const themeDark = {
  background: black,
  textColor: white,
  titleColor: white,
  postTitleColor: white,
  infoTextColor: salmon,
  oppositeBackground: white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
