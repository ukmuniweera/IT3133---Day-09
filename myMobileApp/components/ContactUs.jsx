import { StyleSheet, View } from "react-native";
import { Text, Divider, TextInput } from "react-native-paper";

export default function ContactUs() {
  return (
    <div>
      <View style={styles.header}>
        <Text variant="headlineLarge">Contact Us</Text>
        <Divider />
      </View>
      <View style={styles.body}>
        <View style={styles.inputs}>
          <TextInput label="Name" mode="outlined" />
        </View>
        <View style={styles.inputs}>
          <TextInput label="Email" mode="outlined" />
        </View>
        <View style={styles.inputs}>
          <TextInput label="Phone No" mode="outlined" />
        </View>
        <View style={styles.inputs}>
          <TextInput
            label="Message"
            mode="outlined"
            multiline
            numberOfLines={5}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text>MyApp © 2024</Text>
      </View>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  body: {
    flex: 5,
    width: "100%",
    alignItems: "center",
  },
  footer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  inputs: {
    padding: 8,
    marginBottom: 7,
  },
});
