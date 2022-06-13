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
export const PAWS_IMAGES = {
  DESCRIPTION: getImagesPath("paws/description.png"),
  LOGO: getImagesPath("paws/logo.png"),
  SEARCH: getImagesPath("paws/search.png"),
  SCROLL: getImagesPath("paws/scroll.png"),
  UPLOAD: getImagesPath("paws/upload.png"),
  API: getImagesPath("paws/api.png"),
}
export const KNOCK_IMAGES = {
  LOGO: getImagesPath("knock/logo.png"),
  DESCRIPTION: getImagesPath("knock/description.png"),
  ERD: getImagesPath("knock/erd.png"),
  SETTING: getImagesPath("knock/슬라이드1.png"),
  ENROLL: getImagesPath("knock/슬라이드2.png"),
  MYPAGE: getImagesPath("knock/슬라이드3.png"),
  LOGIN: getImagesPath("knock/슬라이드4.png"),
  REACT: getImagesPath("knock/react.png"),
};
export const ICONS = {
  CLOSE: getIconsPath("close.svg"),
};
