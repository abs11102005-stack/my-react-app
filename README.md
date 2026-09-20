Name of your project: my-react-app.
Description: This is my first react project after learn it. And by this, I start a new level of developement.
Technology that i use: 1.React 2.Typescript 3.JSX 4.Tailwind CSS 
3 features about my project: 1. In my this project i made a beautiful navbar and banner. 2. I made a Technology Explore             section when user can select any technology in stack and they can remove that, and also they can remove all are selected       technology in one click. 3. I made a nice footer where i add some necessary information and some social media link.

//questions answer//

i. What is JSX, and why is it used in React?
  =>JSX is JavaScript XML which is a syntax extention for javascript that lets us write HTML-like code inside JavaScript. It makes React components easier to read and build UI.

ii. What is the difference between props and state?
   =>1. Props: Data passed from a parent component to a child (read-only).
     2. State: Data managed inside a component that can change over time.

iii. What does the useState hook do, and where did you use it in this project?
  =>useState stores and updates dynamic data in a component. I used it to keep the JSON project list in state and update the  UI when needed.  

iv. What does the useEffect hook do, and why did you need it to load the JSON data?
  =>useEffect runs code after the component renders. I used it to fetch the local JSON file and load the project data when the page open.

v. Why does every item in a .map() list need a unique key prop?
  =>A unique key helps React identify each item, so it can update the list efficiently without re-rendering everything.

vi. What is conditional rendering? Show one place you used it.(example: the empty stack message).?
  =>Conditional rendering means showing different ui based on a condition. I used it to display the "No technologies selected yet." message when the tech stack array is empty.

vii. How do you pass data from a parent component to a child component, and how does a child send something back?
  =>A parent passes data using props. A child sends data back by calling a callback function passed from the parent through props.
