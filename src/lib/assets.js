const getIconsPath = (path) => {
  return process.env.PUBLIC_URL + `/icons/${path}`;
};

const getImagesPath = (path) => {
  return process.env.PUBLIC_URL + `/images/${path}`;
};

export const IMAGES = {
  NOT_FOUND: getImagesPath("not_found.svg"),
};

export const ICONS = {
  CLOSE: getIconsPath("close.svg"),
};
