import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

function clear() {
  setPrimeiroNumero("");
  setSegundoNumero("");
  setOperador("");
  setResultado(null);
}

function numeroPres(valor) {
  setPrimeiroNumero(primeiroNumero+valor);
}

function operadorPres(valor) {
  setSegundoNumero(primeiroNumero);
  setOperador(valor);
  setPrimeiroNumero("");
}

function igualdade() {
  switch(operation) {
    case "+":
      clear();
      setResultado(parseInt(segundoNumero) + parseInt(primeiroNumero));
      break;
    case "-":
      clear();
      setResultado(parseInt(segundoNumero) - parseInt(primeiroNumero));
      break;
    case "*":
      clear();
      setResultado(parseInt(segundoNumero) * parseInt(primeiroNumero));
      break;
    case "/":
      clear();
      setResultado(parseInt(segundoNumero) / parseInt(primeiroNumero));
      break;
    default:
      clear();
      setResultado(0);
      break;
  }
}

function numeroNaTela() {
  if(primeiroNumero === "") {
    return(<Text>0</Text>)
  }
  if(resultado != null) {
    return(<Text>{resultado}</Text>)
  }
  if(segundoNumero === "") {
    return(<Text>{primeiroNumero}</Text>)
  }
  if(operador != "") {
    return(<Text>{segundoNumero+operador}</Text>)
  }
  else {
    return(<Text>{segundoNumero+operador+primeiroNumero}</Text>)
  }
}

function Button({color = "#FCFDFD", onPress, children, fontSize2 = 22, rotate = '0deg'}) {
  return(
    <TouchableHighlight
      style={styles.button}
      onPress={onPress}
      underlayColor={color}>
        <Text
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            textAlignVertical: "center",
            color: color,
            fontWeight: "bold",
            fontSize: fontSize2,
            transform: [{ rotate: rotate}]
          }}>
            {children}
          </Text>
      </TouchableHighlight>
  );
}

export default function App() {
  const [primeiroNumero, setPrimeiroNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");
  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState(null);

  return (
    <View style={styles.container}>
      <View style={{color: 'red', flex: 5}}>
        {/* {numeroNaTela()} */}
      </View>
      <View style={styles.controls}>
        <View style={{flexDirection: 'row', gap: 20, flex: 1}}>
          <Button onPress={() => {clear}} color="#2eeec4">AC</Button>
          <Button onPress={() => {}} color="#2eeec4">+/-</Button>
          <Button onPress={() => {}} color="#2eeec4" fontSize2={32}>%</Button>
          <Button onPress={() => {}} color="#b4757c" fontSize2={32}>÷</Button>
        </View>
        <View style={{flexDirection: 'row', gap: 20, flex: 1}}>
          <Button onPress={() => {}}>7</Button>
          <Button onPress={() => {}}>8</Button>
          <Button onPress={() => {}}>9</Button>
          <Button onPress={() => {}} color="#b4757c" fontSize2={32}>×</Button>
        </View>
        <View style={{flexDirection: 'row', gap: 20, flex: 1}}>
          <Button onPress={() => {}}>4</Button>
          <Button onPress={() => {}}>5</Button>
          <Button onPress={() => {}}>6</Button>
          <Button onPress={() => {}} color="#b4757c" fontSize2={32}>–</Button>
        </View>
        <View style={{flexDirection: 'row', gap: 20, flex: 1}}>
          <Button onPress={() => {}}>1</Button>
          <Button onPress={() => {}}>2</Button>
          <Button onPress={() => {}}>3</Button>
          <Button onPress={() => {}} color="#b4757c" fontSize2={32}>+</Button>
        </View>
        <View style={{flexDirection: 'row', gap: 20, flex: 1}}>
          <Button onPress={() => {}} fontSize2={32} rotate='-90deg'>↺</Button>
          <Button onPress={() => {}}>0</Button>
          <Button onPress={() => {}}>.</Button>
          <Button onPress={() => {igualdade}} color="#b4757c" fontSize2={32}>=</Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22252e",
    flexDirection: 'column'
  },
  button: {
    flex: 1,
    backgroundColor: "#272b34",
    borderRadius: 10,
  },
  controls: {
    flex: 6,
    flexDirection: 'column',
    gap: 20,
    backgroundColor: "#292d36",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    padding: 20,
  }
});