const colorsName = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    porcelain: "#F2F3F4",
    mercury: "#E5E5E5",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    tropicalBlue: "#CDE0F7",
    anakiwa: "#8CC2FF",
    scienceBlueLight: "rgba(3, 102, 214, 0.2)",
    scienceBlueLightDarkTheme: "rgba(3, 102, 214, 0.5)",
    dodgerBlue: "#2188FF",
    shipCove: "#6D93BE",
    slateGray: "#6E7E91",
    scienceBlue: "#0366D6",
    parsley: "rgba(20, 70, 32, 0.2)",
    violet: "#090A33",
    tundora: "#414141",
    lightBlack: "#313131",
    mineShaft: "#252525",
};

const commonTheme = {
    breakpoints: {
        mobileMin: 360,
        mobileMax: 767,
        tablet: 991,
        desktop: 1199,
    },
    boxShadow: "0 -2px 50px rgba(9, 10, 51, 0.02), 0 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadius: "4px",
};

export const lightTheme = {
    ...commonTheme,
    colors: {
        primary: colorsName.scienceBlue,
        textPrimary: colorsName.mineShaft,
        site: {
            background: colorsName.whiteLilac,
            text: colorsName.slateGray,
        },
        buttonLink: {
            text: colorsName.white,
            border: colorsName.ironTransparent,
            shadow: colorsName.anakiwa,
            active: colorsName.parsley,
        },
        boxBackground: colorsName.white,
        headerLine: colorsName.mercury,
        tile: {
            border: colorsName.porcelain,
            borderHover: colorsName.tropicalBlue,
            header: colorsName.scienceBlue,
        },
        link: {
            text: colorsName.scienceBlue,
            underline: colorsName.scienceBlueLight,
            hover: colorsName.dodgerBlue,
        },
        socialIcons: {
            color: colorsName.black,
            hover: colorsName.scienceBlue,
        },
        themeSwitcher: {
            background: colorsName.mercury,
            border: colorsName.slateGray,
            icon: colorsName.white,
        },
    }
};

export const darkTheme = {
    ...commonTheme,
    colors: {
        primary: colorsName.dodgerBlue,
        textPrimary: colorsName.white,
        site: {
            background: colorsName.mineShaft,
            text: colorsName.white,
        },
        buttonLink: {
            text: colorsName.white,
            border: colorsName.ironTransparent,
            shadow: colorsName.shipCove,
            active: colorsName.parsley,
        },
        boxBackground: colorsName.lightBlack,
        headerLine: colorsName.tundora,
        tile: {
            border: colorsName.tundora,
            borderHover: colorsName.scienceBlueLightDarkTheme,
            header: colorsName.white,
        },
        link: {
            text: colorsName.scienceBlue,
            underline: colorsName.scienceBlueLight,
            hover: colorsName.dodgerBlue,
        },
        socialIcons: {
            color: colorsName.white,
            hover: colorsName.scienceBlue,
        },
        themeSwitcher: {
            background: colorsName.slateGray,
            border: colorsName.white,
            icon: colorsName.mineShaft,
        },
    }
};