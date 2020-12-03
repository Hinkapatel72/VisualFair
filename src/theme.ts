export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--foreground-default": "#ffffff",
        "--foreground-secondary": "#41474D",
        "--foreground-tertiary": "#797C80",
        "--foreground-quaternary": "#F4FAFF",
        "--foreground-light": "#41474D",
        "--foreground-more": "#9E9E9E",

        "--background-default": "#fafafa",
        "--background-secondary": "#4E0D3E",
        "--background-tertiary": "#5D1049",
        "--background-light": "#FFFFFF",

        "--background-post": "#ffffff",
        "--foreground-post": "#000000",


        "--primary-default": "#5DFDCB",
        "--primary-dark": "#24B286",
        "--primary-light": "#B2FFE7",

        "--error-default": "#EF3E36",
        "--error-dark": "#800600",
        "--error-light": "#FFCECC",

        "--background-tertiary-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)"
    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        "--foreground-default": "#ffffff",
        "--foreground-secondary": "#A3B9CC",
        "--foreground-tertiary": "#F4FAFF",
        "--foreground-quaternary": "#E5E5E5",
        "--foreground-light": "#FFFFFF",
        "--foreground-more": "#9E9E9E",

        "--background-default": "#121212",
        "--background-secondary": "#525252",
        "--background-tertiary": "#414141",
        "--background-light": "#41474D",

        "--background-post": "#313131",
        "--foreground-post": "#ffffff",

        "--primary-default": "#5DFDCB",
        "--primary-dark": "#24B286",
        "--primary-light": "#B2FFE7",

        "--error-default": "#EF3E36",
        "--error-dark": "#800600",
        "--error-light": "#FFCECC",

        "--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)"
    }
};