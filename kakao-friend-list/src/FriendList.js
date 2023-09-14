import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props) => {
    //삼항연산자 사용
    // return props.isOpened ? (
    //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom:bottomSpace }}>
    //         {props.data.map((item, index) => (
    //             <View key={index}>
    //             <Profile
    //                 uri={item.uri}
    //                 name={item.name}
    //                 introduction={item.introduction}
    //             />
    //             <Margin height={13}/>
    //             </View>
    //         ))}
    //     </ScrollView>
    // ) : null;
    
    //if문으로 주석처리
    if (!props.isOpened) return null;
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {props.data.map((item, index) => (
                <View key={index}>
                <Profile
                    uri={item.uri}
                    name={item.name}
                    introduction={item.introduction}
                />
                <Margin height={13}/>
                </View>
            ))}
        </ScrollView>
    )
}