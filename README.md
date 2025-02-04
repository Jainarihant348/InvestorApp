# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

3.

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

4. EAS CLI is the command-line app that you will use to interact with EAS services from your terminal. To install it, run the command:

```bash
npm install -g eas-cli
```

5. Login to your expo account:

```bash
eas login
```

6. Configure the app using:

```bash
eas build:configure
```

7. To build for ios run:

```bash
eas build --profile production --platform ios
```

8. After the build is successful, make sure to update the api key in eas.json and then submit the app using:

```bash
eas submit --platform ios
```
