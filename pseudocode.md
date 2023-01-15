# Password Generator

## The Challenge
Create a web application that can be used to generate a random password based on criteria the user has selected.

## 1
- When the button is clicked, prompt() a message asking for the desired password length (between 10 and 64).
- If number entered is between 10 and 64... (see ##2)
- If number isn't, alert() a message that user will need to try again.

## 2 
- ...Ask user if they want special characters (use confirm() to get boolean value).
- Ask user if they want number characters (use confirm() to get boolean value).
- Ask user if they want lowercase characters (use confirm() to get boolean value).
- Ask user if they want uppercase characters (use confirm() to get boolean value).
- If none are selected, alert() a message that user will need to try again.

## 3
- Collate all of the selected characters into a new array (concat?).

## 4
- Use Math.random to choose a random index in the new array.
- Using for loop, repeat the length of the password length.
- Output loop into string variable.

## OTHER
- Find out how to reset the values so that the website can create multiple passwords without being refreshed
- Don't update the password placeholder text unless valid user input.