const person = {
  greeting: 'Good morning',
  speak() {
    console.log(this.greeting)
  }
}

const speak = person.speak
speak() // conflict between paradigms: functional and OO

const personSpeaking = person.speak.bind(person)
personSpeaking()