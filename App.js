import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import MyTabs from './navigation/AppNavigator';

class App extends Component {

  NetInfoSubscribtion = null;

  constructor(props) {
    super(props);
    this.state = {
      connection_status: false,
      connection_type: null,
      connection_net_reachable: false,
      connection_wifi_enabled: false,
      connection_details: null,
    }
  }

  componentDidMount() {

    this.NetInfoSubscribtion = NetInfo.addEventListener(
      this._handleConnectivityChange,
    );

  }

  componentWillUnmount() {
    this.NetInfoSubscribtion && this.NetInfoSubscribtion();
  }

  _handleConnectivityChange = (state) => {
    this.setState({
      connection_status: state.isConnected,
      connection_type: state.type,
      connection_net_reachable: state.isInternetReachable,
    })
  }

  render() {
    const trueConnect = <MyTabs />;
    const falseConnect = 
    <View style={styles.body}>
      <Image style={styles.Images} source={require('./Imageeee/NotConnection.png')} />
    </View>
    return (
      this.state.connection_net_reachable ? trueConnect : falseConnect
    );
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#FFCC99",
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  Images:{
    flex:1,
    width: win.width,
    height: win.height
  }
});

export default App;