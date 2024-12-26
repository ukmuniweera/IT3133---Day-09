import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Divider, TextInput, Button } from "react-native-paper";

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({ name, email, phone, message });
  };

  return (
    <View>
      <View style={styles.header}>
        <Text variant="headlineLarge" style={styles.text}>Contact Us</Text>
        <Divider />
      </View>
      <View style={styles.body}>
        <Text variant="bodyMedium" style={styles.text}>
          Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign. Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.
        </Text>
        <View style={styles.inputs}>
          <TextInput label="Name" mode="outlined" value={name} onChangeText={setName} />
        </View>
        <View style={styles.inputs}>
          <TextInput label="Email" mode="outlined" keyboardType="email-address" value={email} onChangeText={setEmail} />
        </View>
        <View style={styles.inputs}>
          <TextInput label="Phone No" mode="outlined" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
        </View>
        <View style={styles.inputs}>
          <TextInput label="Message" mode="outlined" multiline numberOfLines={5} value={message} onChangeText={setMessage} />
        </View>
        <View style={styles.inputs}>
          <Button mode='contained' onPress={handleSubmit}>Submit</Button>
        </View>
      </View>
      {submittedData && (
        <View style={styles.footer}>
          <Text style={styles.text}>User Input:</Text>
          <Text style={styles.text}>Name: {submittedData.name}</Text>
          <Text style={styles.text}>Email: {submittedData.email}</Text>
          <Text style={styles.text}>Phone: {submittedData.phone}</Text>
          <Text style={styles.text}>Message: {submittedData.message}</Text>
        </View>
      )}
    </View>
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
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  inputs: {
    padding: 8,
    marginBottom: 7,
  },
  text: {
    fontFamily: 'Calibri',
    color: 'black',
  },
});
