import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { GridStyles, PlayerOneGrid, PlayerTwoGrid, Operation, ChoiceButtonContainer, ChoiceButton, ScoreCounter, NumberText } from './gameScreenStyles'
import React, {useState, useEffect} from 'react'
import { randomizedOperationFuncs, randomizedOperationNumbers, operationEval, shuffleArray, getRandomArbitrary } from './gameLogic';
import { TouchableOpacity } from 'react-native-web';
import { log } from 'mathjs';





const OneVsOneScreen = () => {
  const [randomChoicesArray, setRandomChoicesArray] = useState([])
  const randomNumberChoice = getRandomArbitrary(0, 6)
  const randomOperation = randomizedOperationFuncs()
  const randomNumber = randomizedOperationNumbers()
  const arrayTesting = [ 1, 2 ,correctA]
  const randomShuffledNumbers = shuffleArray(arrayTesting)
  const [correctAnswer, setCorrectAnswer] = useState(correctA)
  const correctA = operationEval(randomNumber.leftHandSideNumber, randomOperation, randomNumber.rightHandSideNumber)

 console.log(correctA);
  const numbers = [1, 2, 3, 4, 5];



  return (
    <View>
    <GridStyles>

      <PlayerTwoGrid>
    </PlayerTwoGrid>
          <PlayerOneGrid>
           <Operation>
                <NumberText>
                    {randomNumber.leftHandSideNumber} {randomOperation} {randomNumber.rightHandSideNumber}
                </NumberText>
           </Operation>
           <ChoiceButtonContainer>
              {randomShuffledNumbers.map((item, i) => {
               return  <ChoiceButton key={i}>
                          <NumberText>{item}</NumberText>
                    </ChoiceButton>
     
              })}
            </ChoiceButtonContainer>
            <ScoreCounter/>
            
          </PlayerOneGrid>
    </GridStyles>
    </View>   
  )
}


const gridStyles = StyleSheet.create({
choiceButton: {
  width: '80px',
  height: '60px',
  backgroundColor: "#5a1a87",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
},})

export default OneVsOneScreen