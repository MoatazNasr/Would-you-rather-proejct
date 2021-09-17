export function formatQuestion(question, author) {
  const { id, optionOne, optionTwo } = question
  const { name, avatarURL } = author

  const optionOneValues = Object.values(optionOne)
  const optionTwoValues = Object.values(optionTwo)

  const optionOneVotes =optionOneValues[0]
  const optionTwoVotes=optionTwoValues[0]

  const optionOneText = optionOneValues[1]
  const optionTwoText = optionTwoValues[1]





  return {
    name,
    id,
    optionOneText,
    optionTwoText,
    optionOneVotes,
    optionTwoVotes,
    avatar: avatarURL,


  }
}