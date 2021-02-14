![alt text][logo]

[logo]: https://github.com/larissarodr/developer-new-website/blob/master/frontend/src/assets/Logo1.png "Developer Software"

# Developer Software Website

This is a personal project where I built the website for a Software Development company based in Brazil.

The frontend was built with React.JS (based on create-react-app) and the backend in Node.JS.

In order to run the frontend:

```
yarn start
```

The application listens on port 3000.

Important: the backend is not being referenced by the frontend as the company's infrastructure couldn't handle Node. However, for future reference, I've decided to leave the backend code here.

## How to deploy the frontend into cpanel

After cloning the application locally, run:

```
yarn install #this will install all dependencies
yarn run build #this will generate a build folder in the root of the project
```

Log into cpanel (http://developer.inf.br/cpanel), go to the File Manager panel, go to /public_html and upload the new files generated inside the build folder. Important: the build folder should not be transferred. Files must be uploaded directly in the root of /public_html.

```
--/public_html
----static
------css
------js
------media
----asset-manifest.json
----favicon.ico
----index.html
```

In order to facilitate the process of uploading the static folder, you can compress it in a zip file, upload it and then extract it in cpanel.
