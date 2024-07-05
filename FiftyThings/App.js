import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native'

const App = () => {
  const [text, setText] = React.useState('8');
  const [question, setQuestion] = React.useState('hello');
  const [questionNumber, setQuestionNumber] = React.useState(0)

  const handleInputChange = (input) => {
    const parsed = parseInt(input, 10);
    if (!isNaN(parsed) || input === '') {
      setNumber(input);
    }
  };
  
  const swapQuestion = () => {
    messages = ["hello", "hi"]
    if (question == messages[0]) {
      setQuestion(messages[1])
    } else {
      setQuestion(messages[0])
    }
  };

  const rateYourDay = () => {
    setQuestionNumber(0)
    setQuestion("Rate your day out of 10")

  }

  const nextQuestion = () => {
    console.log(question + " " + questionNumber + ": " + text)
    setText("")
    setQuestionNumber(questionNumber + 1)
    if (questionNumber > 2) {
      rateYourDay()
    } else {
      swapQuestion()
    }
  }

  return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.question}>{question}</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleInputChange()}
            value={text}
          />
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.swapButton}
              underlayColor='#000'
              onPress={() => {swapQuestion()}}>
              <Text style={{color:'#000000'}}>Swap</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              underlayColor='#000'
              onPress={() => {nextQuestion()}}>
              <Text style={{color:'#000000'}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF5EC',
    flex: 1
  },
  container: {
    backgroundColor: '#FFF5EC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontSize: 30,
    alignItems: 'baseline'
  },
  input: {
    borderColor: '#B2ABA5',
    width: 300,
    height: 40,
    borderWidth: 1,
    margin: 10,
    padding: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  swapButton: {
    backgroundColor: '#ECE391',
    margin: 10,
    padding: 10,
    borderRadius: 5
  },
  nextButton: {
    backgroundColor: '#9EEC91',
    margin: 10,
    padding: 10,
    borderRadius: 5
  }
})

export default App