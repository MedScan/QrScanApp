import ApolloClient, { createNetworkInterface } from 'react-apollo';
// import { AsyncStorage } from 'react-native'
//import config from '../config.json';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cje11ajb54xk101502daj19iw',
});

networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

   // get the authentication token from local storage if it exists
    // const token = await AsyncStorage.getItem('token')
    // if (!!token) {
    //   req.options.headers.authorization = `Bearer ${token}`;
    // }
    next();
  },
}]);

export default new ApolloClient({ networkInterface });