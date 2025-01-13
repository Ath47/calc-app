import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState("");
  const [isResult, setIsResult] = useState(false);

  const operators = ["+", "-", "*", "/"];

  const handlePress = (value) => {
    if (isResult && !operators.includes(value)) {
      setInput(value);
      setIsResult(false);
      return;
    }

    const lastChar = input.slice(-1);
    if (operators.includes(lastChar) && operators.includes(value)) {
      // Replace the last operator with the new one
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
    setIsResult(false);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
      setIsResult(true);
    } catch (error) {
      setInput("Error");
      setIsResult(true);
    }
  };

  const handleClear = () => {
    setInput("");
    setIsResult(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <TextInput
          value={input}
          editable={false}
          style={styles.input}
          underlineColor="transparent" // Removes underline if present
          textColor="#FFFFFF"          // Ensures the text is white
        />
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("1")}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("2")}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("3")}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("+")}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("4")}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("5")}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("6")}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("-")}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("7")}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("8")}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("9")}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("*")}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonClear} onPress={handleClear}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("0")}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEqual} onPress={handleCalculate}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("/")}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.footerText}>Calc by Atharva</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  display: {
    width: '100%',
    padding: 20,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 50,
    width: '100%',
    textAlign: 'right',
    backgroundColor: '#2C2C2C',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  buttons: {
    width: '90%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    width: '20%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E3E3E',
    borderRadius: 10,
  },
  buttonClear: {
    width: '20%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D84B4B',
    borderRadius: 10,
  },
  buttonEqual: {
    width: '20%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footerText: {
    position: 'absolute',
    bottom: 10,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
