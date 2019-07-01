const white = "#FFFFFF";
const black = "#000000";
const salmon = "#ff5252";
const offWhite = "#ffffde";

const themeLight = {
  background: offWhite,
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
  postTitleColor: offWhite,
  infoTextColor: salmon,
  oppositeBackground: offWhite
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
