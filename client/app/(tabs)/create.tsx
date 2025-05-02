// import { useState } from "react";
// import { ScrollView, Text, TextInput, Button, View } from "react-native";

// export default function Create() {   


//     const [text, setText] = useState('');

//     const handleInputChange = (input: string) => {
//       setText(input);
//     }
  
//     const handleSubmit = () => {
        
//       alert(`You entered: ${text}`);
//     }             
 
//     return(
//         <ScrollView>
//         <Text className="text-2xl font-bold text-center my-4">Createee</Text>
//             <TextInput
//             style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', margin: 10, padding: 10 }}
//             onChangeText={handleInputChange}
//             placeholder="enter the title of the bet"
//             value={text}
//         />
//         <View style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', margin: 10, padding: 10 }}>
//             <Button
//                 title="Yes"
//                 onPress={handleSubmit}

//             />
//              <Button
//                 title="No"
//                 onPress={handleSubmit}

//             />
//         </View>
                   
//     </ScrollView>
//     )
// }





















import { useState } from "react";
import { ScrollView, Text, TextInput, Button, View } from "react-native";

export default function Create() {
  const [text, setText] = useState('');

  const handleInputChange = (input: string) => {
    setText(input);
  };

  const handleSubmit = (answer: string) => {
    alert(`You selected: ${answer}\nTitle: ${text}`);
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 16 }}>
        Createee
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          margin: 10,
          padding: 10,
        }}
        onChangeText={handleInputChange}
        placeholder="Enter the title of the bet"
        value={text}
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <View style={{ margin: 10, width: '40%' }}>
          <Button title="Yes" color="blue" onPress={() => handleSubmit('Yes')} />
        </View>
        <View style={{ margin: 10 }}>
          <Button title="No" color="red" onPress={() => handleSubmit('No')} />
        </View>
      </View>
    </ScrollView>
  );
}
