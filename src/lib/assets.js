const getIconsPath = (path) => {
  return process.env.PUBLIC_URL + `/icons/${path}`;
};

const getImagesPath = (path) => {
  return process.env.PUBLIC_URL + `/images/${path}`;
};

export const IMAGES = {
  NOT_FOUND: getImagesPath("not_found.svg"),
  PROFILE: getImagesPath("333.png"),
  UNIVERSE: getImagesPath("stars.png"),
  EMOJI: getImagesPath("emoji.png"),
  BUDDY: getImagesPath("Buddy.png"),
  GYMT: getImagesPath("Gymt.png"),
  KNOCKKNOCK: getImagesPath("KnockKnock.png"),
  PAWS: getImagesPath("Paws.png"),
  TODO: getImagesPath("ToDo.png"),
  RAINBOW: getImagesPath("Rainbow.png"),
  MOVIE: getImagesPath("movie.png"),
};

export const BUDDY_IMAGES = {
  LOGO: getImagesPath("Buddy/Buddy.png"),
  LOOK: getImagesPath("Buddy/Buddy_3d.png"),
  POSTER: getImagesPath("Buddy/poster.png"),

};

export const GYMT_IMAGES = {
  DESCRIPTION: getImagesPath("Gymt/description.png"),
  LOGO: getImagesPath("Gymt/logo.png"),
  HOME: getImagesPath("Gymt/home.png"),
  LIST: getImagesPath("Gymt/list.png"),
  LOGIN: getImagesPath("Gymt/login.png"),
}

export const ICONS = {
  CLOSE: getIconsPath("close.svg"),
};
