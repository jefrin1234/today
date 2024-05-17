const people = [
  { name: 'John', age: 30, place: 'New York'  },
  { name: 'Alice', age: 25, place: 'Los Angeles' },
  { name: 'Bob', age: 17, place: 'Chicago' }, 
  { name: 'Emma', age: 40, place: 'Houston' },
  { name: 'Michael', age: 15, place: 'Seattle' }, 
  { name: 'Sophia', age: 28, place: 'Miami' },
  { name: 'David', age: 22, place: 'San Francisco' },
  { name: 'Olivia', age: 19, place: 'Boston' }, 
  { name: 'James', age: 35, place: 'Washington, D.C.' },
  { name: 'Emily', age: 16, place: 'Denver' }, 
  { name: 'William', age: 31, place: 'Dallas' },
  { name: 'Charlotte', age: 20, place: 'Phoenix' }, 
  { name: 'Daniel', age: 29, place: 'Philadelphia' },
  { name: 'Amelia', age: 18, place: 'San Diego' }, 
  { name: 'Matthew', age: 26, place: 'Austin' },
  { name: 'Mia', age: 14, place: 'Portland' }, 
  { name: 'Benjamin', age: 33, place: 'Atlanta' },
  { name: 'Ava', age: 23, place: 'Las Vegas' },
  { name: 'Ethan', age: 27, place: 'Detroit' },
  { name: 'Harper', age: 24, place: 'Minneapolis' },
  { name: 'Alexander', age: 32, place: 'San Antonio' },
  { name: 'Evelyn', age: 21, place: 'Orlando' }, 
  { name: 'Henry', age: 36, place: 'Raleigh' },
  { name: 'Madison', age: 13, place: 'Salt Lake City' }, 
  { name: 'Liam', age: 34, place: 'Nashville' },
  { name: 'Grace', age: 37, place: 'Kansas City' },
  { name: 'Gabriel', age: 38, place: 'Memphis' },
  { name: 'Chloe', age: 39, place: 'New Orleans' },
  { name: 'Jackson', age: 41, place: 'Cincinnati' },
  { name: 'Lily', age: 42, place: 'Milwaukee' },
  { name: 'Andrew', age: 43, place: 'Indianapolis' },
  { name: 'Zoe', age: 44, place: 'Oklahoma City' },
  { name: 'Samuel', age: 45, place: 'Tampa' },
  { name: 'Natalie', age: 46, place: 'Charlotte' },
];


 const eligibilityList = []


for( let i = 0 ; i < people.length ; i++  ) {
    
   const person = people[i]
   
  if(person.age >= 18 ){
      
    const eligibilityTrue = 
    {
      name:person.name,
      age:person.age,
      place:person.place,
      eligibility:true
  
    }


    eligibilityList.push(eligibilityTrue)

   }  else {
     
      const eligibilityfalse= {
        name:person.name,
        age:person.age,
        place:person.age,
        eligibilit:false
      }
     
      eligibilityList.push(eligibilityfalse)


    }


  
 
}
console.log(eligibilityList)

const votersList = []
for(let i = 0; i < eligibilityList.length; i++){
  const details =eligibilityList[i]

if(details.eligibility === true){
   
votersList.push(details)
}
}

console.log(votersList)