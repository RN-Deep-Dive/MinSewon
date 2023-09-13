import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native'

const InputBox = (props) => {
    return (
        <View style={{flexDirection: "row"}}>
                <TextInput 
                value={props.value} 
                onChangeText={props.onChangeText}
                style={{ borderBottomWidth: 1, width: 200}}
                placeholder={props.placeholder}/>
                <Button title="초기화" onPress={props.onReset}/>
            </View>
    )
}

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue); //state는 custom hook에서 선언
    const resetValue = () => setValue(initialValue);

    return {
        value,
        setValue,
        resetValue,
    }
}

const CustomHook = () => {
    const {
        value: name, //변수를 다른 변수명으로 재정의
        setValue: setName, 
        resetValue: resetName
    } = useInput("")
    const {
        value: age, 
        setValue: setAge, 
        resetValue: resetAge
    } = useInput("")
    const {
        value: city, 
        setValue: setCity, 
        resetValue: resetCity
    } = useInput("")

    // const name = output.value;
    // const setName = output.setValue;
    // const resetName = output.resetValue;

    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [city, setCity] = useState("");

    return (
        <View> 
            <InputBox 
                value={name}
                onChangeText={setName}
                placeholder="이름을 입력해주세요"
                onReset={() => {setName("")}}
            />
            <InputBox 
                value={age}
                onChangeText={setAge}
                placeholder="나이를 입력해주세요"
                onReset={() => {setAge("")}}
            />
            <InputBox 
                value={city}
                onChangeText={setCity}
                placeholder="도시를 입력해주세요"
                onReset={() => {setCity("")}}
            />
        </View>
    )
}

export default CustomHook