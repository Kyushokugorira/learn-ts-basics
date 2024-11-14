type User = {
    name: string;
    age: number;
  };
  
  const greet=(user: User): void =>{
    console.log(`こんにちは、${user.name}さん。${user.age}歳ですね。`);
  };
  
  const person = { name: "鈴木", age: 30 };
  greet(person);