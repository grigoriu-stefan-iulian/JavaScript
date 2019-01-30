// const userAge = 2
// const message = userAge >= 18 ? 'You can VOTE' : 'You cannot VOTE'
// console.log(message)

const myAge = 21
const showPage = () => 'Showing the page'

const dontShowPage = () => 'Cannot see the page'

const message = myAge >= 21 ? showPage() : dontShowPage() 
console.log(message)

//CHALLENGE
const team = ['tyler', 'Porter ', 'Stephanson', 'Garcea']
const messageToTeam = team.length < 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(messageToTeam)