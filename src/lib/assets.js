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
  LOGO: getImagesPath("buddy/Buddy.png"),
  LOOK: getImagesPath("buddy/Buddy_3d.png"),
  POSTER: getImagesPath("buddy/poster.png"),

};

export const GYMT_IMAGES = {
  DESCRIPTION: getImagesPath("gymt/description.png"),
  LOGO: getImagesPath("gymt/logo.png"),
  HOME: getImagesPath("gymt/home.png"),
  LIST: getImagesPath("gymt/list.png"),
  LOGIN: getImagesPath("gymt/login.png"),
}

export const ICONS = {
  CLOSE: getIconsPath("close.svg"),
};
