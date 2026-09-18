import { gapi } from "gapi-script";

const API_KEY = "AIzaSyArYFcYp622qhJoZQCfDXfmBLAsK72s6z0";
const CLIENT_ID = "996498839423-hj74ufcr1uate2ko0hgjnd6m4sas6o0v.apps.googleusercontent.com";

const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
];

const SCOPES = "https://www.googleapis.com/auth/drive.readonly";


export const getDrivePDFs = async (folderId = null) => {

    // Initialize Google API
    await new Promise((resolve, reject) => {

        gapi.load("client:auth2", async () => {

            try {

                await gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES
                });

                resolve();

            } catch (error) {

                console.error("Google Drive initialization error:", error);

                reject(error);

            }

        });

    });


    const auth = gapi.auth2.getAuthInstance();


    // Check Google login
    if (!auth.isSignedIn.get()) {

        console.log("Google account is not signed in.");

        // Open Google login
        await auth.signIn();

    }


    // Create Drive query
    let query = "mimeType='application/pdf' and trashed=false";


    if (folderId) {

        query += ` and '${folderId}' in parents`;

    }


    // Get files
    const response = await gapi.client.drive.files.list({

        q: query,

        pageSize: 1000,

        fields: "files(id,name,mimeType,webViewLink)"

    });


    const files = response.result.files || [];


    // Create useful objects
    return files.map((file) => ({

        id: file.id,

        name: file.name,

        url: `https://drive.google.com/file/d/${file.id}/view`

    }));

};