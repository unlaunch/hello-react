# hello-react

> Hello Unlaunch, from React!
 
This is a **demo** project showing how to integrate the [Unlaunch React SDK](https://github.com/unlaunch/react-sdk) in React applications.
For more details, read our [Getting Started](https://docs.unlaunch.io/docs/getting-started) tutorial.

Unlaunch is a free feature flag service. Please visit [https://www.unlaunch.io](https://www.unlaunch.io) to sign up for a new account today!

# Build Procedure
1. Download code. Edit src/index.js file set your Unlaunch SDK_KEY and FEATURE_FLAG_KEY you want to evaluate as: 

```
{
    flagKeys: ["your_flag_keys"],
    apiKey: "your_api_key",
    ....
}
```

By default, we have set these values to an example feature flag. So you can run the code as is.

Then on on the command line, type:

```
npm install
npm start
```