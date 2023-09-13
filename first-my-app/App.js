import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */


const Header = (props) => {
  return <Text>{props.title}</Text>
}
const MyProfile = (props) => {
  return <Profile
    name="지은"
    uri="http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
    profileSize={50}>
    </Profile>
}
const Division = () => {
  return <Text>Division</Text>
}
const FriendSection = () => {
  return <Text>FriendSection</Text>
}
const FriendList = () => {
  return (
    <View>
      <Profile name="안정근" uri="https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp" profileSize={30}></Profile>
      <Profile name="정환희" uri="https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp" profileSize={30}></Profile>
      <Profile name="김선우" uri="https://i.namu.wiki/i/PagwakcE00JZaGpEvXym79-IMvKFBmdqOBlq778J-bvJMwz15lDLleTKc56S2wwcRcaEm3FZZ4EtniRa5bXdeQ.webp" profileSize={30}></Profile>
      <Profile name="김정곤" uri="https://i.namu.wiki/i/PagwakcE00JZaGpEvXym79-IMvKFBmdqOBlq778J-bvJMwz15lDLleTKc56S2wwcRcaEm3FZZ4EtniRa5bXdeQ.webp" profileSize={30}></Profile>
      <Profile name="양원채" uri="https://i.namu.wiki/i/PagwakcE00JZaGpEvXym79-IMvKFBmdqOBlq778J-bvJMwz15lDLleTKc56S2wwcRcaEm3FZZ4EtniRa5bXdeQ.webp" profileSize={30}></Profile>
    </View>
  )
}

const Profile = (props) => {
  return (
    <View style={{flexDirection: "row"}}>
      <Image 
        source={{
          uri: props.uri
        }}
        style={{
          width: props.profileSize,
          height: props.profileSize,
        }}/>
      <Text>{props.name}</Text>
    </View>
  )
}
export default function App() {
  return (
  <View style={styles.container}>
    <Header></Header>
    <MyProfile></MyProfile>
    <Division></Division>
    <FriendSection></FriendSection>
    <FriendList></FriendList>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});