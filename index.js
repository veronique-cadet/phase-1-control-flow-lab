function scuberGreetingForFeet(someNumber) {
  let result;
  if (someNumber <= 400) {
    result = "This one is on me!";
  } else if ((someNumber) => 400 || someNumber <= 2000) {
    result = "That will be twenty bucks.";
  }
  if (someNumber > 2000) {
    result = "I will gladly take your thirty bucks.";
  }
  if (someNumber > 2500) {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(someCity) {
  const city = "NYC";
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip() {
  // Write your code here!
}
