
# The Funky GatsBoard - Gatsby FuncJam '21

This Web app let's you create soundboard from different sources (youtube, soundcloud, vimeo...).

1.  **Start developing.**

    To get started clone this repo locally.
    You need to create an Firebase account, with an empty collection named "boards" in  Firestore .Once you did that, add the appid and apiKey in an env.developement file like so:
    ```shell
    FIREBASE_apiKey=YourfirebaseapiKey
    FIREBASE_appId=YourfirebaseappId
    ```
    
    and run 

    ```shell
    npm install
    npm run develop
    ```

3.  **Deploy**

You can deploy this example on Gatsby Cloud by copying the example into a new repo and [connecting that to Gatsby Cloud](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/#set-up-an-existing-gatsby-site).


## Submission Checklist

- [x] Add installation documentation to the README
- [x] Update the `/api` folder with your function
- [x] Submit your theme at https://gatsbyjs.com/func-jam-21/
