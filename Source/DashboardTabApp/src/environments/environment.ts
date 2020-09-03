export const environment = {
    production: false,
    apiBaseUrl: "https://qbotedukenthirteen.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "53d2d6b1-afa9-4b5c-92fa-6bd3a58789e7",
        clientId: "bab7f2e3-1906-4335-ae1a-bfa1fbb39a18",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
