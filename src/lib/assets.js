const getIconsPath = (path) =>{
    return process.env.PUBLIC_URL + `/icons/${path}`;
}

const getImagesPath = (path) =>{
    return process.env.PUBLIC_URL + `/images/${path}`;
}

export const IMAGES = {
    NOT_FOUND: getImagesPath('not_found.svg'),
    PROFILE: getImagesPath('333.png'),
    UNIVERSE: getImagesPath('stars.png'),
    EMOJI: getImagesPath('emoji.png'),
    BUDDY: getImagesPath('Buddy.png'),
    GYMT: getImagesPath('Gymt.png'),
    KNOCKKNOCK: getImagesPath('KnockKnock.png'),
    PAWS: getImagesPath('Paws.png'),
}

export const ICONS = {
    CLOSE: getIconsPath('close.svg')
}