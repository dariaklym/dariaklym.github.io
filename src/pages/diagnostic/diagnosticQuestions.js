const diagnosticQuestions = [

//Pre-Algebra testing
// Unit 1
{
  question: "Which of the following statements is completely correct?",
  choices: [
    "-4 + 6 = 2, 9 - (-3) = 12, -2 * 5 = -10, and |-7| = 7", 
    "-4 + 6 = -10, 9 - (-3) = 6, -2 * 5 = 10, and |-7| = -7", 
    "-4 + 6 = 10, 9 - (-3) = -12, -2 * 5 = -10, and |-7| = -7", 
    "-4 + 6 = 2, 9 - (-3) = 6, -2 * 5 = 10, and |-7| = 7"
  ],
  correct: 1,
  course: "Pre-Algebra",
  unit: 1,
  lessonTitle: "Working with Numbers"
},


//Unit 2  
{
  question: "Which of the following statements is completely correct?",
  choices: [
    "3/4 = 0.75, 0.2 = 20%, 2/3 * 3/4 = 1/2, and 25% of 40 is 10", 
    "3/4 = 0.34, 0.2 = 2%, 2/3 * 3/4 = 5/7, and 25% of 40 is 15", 
    "3/4 = 0.75, 0.2 = 2%, 2/3 * 3/4 = 1/2, and 25% of 40 is 20", 
    "3/4 = 0.25, 0.2 = 20%, 2/3 * 3/4 = 1/2, and 25% of 40 is 10"
  ],
  correct: 1,
  course: "Pre-Algebra",
  unit: 2,
  lessonTitle: "Fractions & Decimals"
},


//Unit 3 
{
  question: "Which of the following statements is completely correct?",
  choices: [
    "The ratio 6:9 simplifies to 2:3, 4/5 = 6/10, -6 + 9 = 15, and |-4| = -4", 
    "The ratio 6:9 simplifies to 3:2, 4/5 = 4/10, -6 + 9 = -3, and |-4| = -4", 
    "The ratio 6:9 simplifies to 2:3, 4/5 = 8/10, -6 + 9 = 3, and |-4| = 4", 
    "The ratio 6:9 simplifies to 6:3, 4/5 = 8/5, -6 + 9 = 3, and |-4| = 4"
  ],
  correct: 3,
  course: "Pre-Algebra",
  unit: 3,
  lessonTitle: "Ratios, Rates, & Percents"
},


//Unit 4 
{
  question: "Which option correctly identifies an expression, combines like terms, and solves equations?",
  choices: [
    "3x + 2x + 4 = 6x + 4, x + 6 = 21 --> x = 15, 2x + 6 = 20 --> x = 8", 
    "3x + 2x + 4 = 5x + 4, x + 6 = 15 --> x = 9, 2x + 6 = 20 --> x = 7", 
    "3x + 2x + 4 = 5x + 2, x + 6 = 15 --> x = 21, 2x + 6 = 20 --> x = 14", 
    "3x + 2x + 4 = 6x, x + 6 = 15 --> x = 3, 2x + 6 = 20 --> x = 6"
  ],
  correct: 2,
  course: "Pre-Algebra",
  unit: 4,
  lessonTitle: "Expressions & Equations (basics)"
},

//Unit 5 
{
  question: "Which of the following statements is completely correct?",
  choices: [
    "A right angle is 90 degrees, triangle angles sum to 180 degrees, a square has opposite sides equal, and a circle's area 2πr", 
    "A right angle is 180 degrees, triangle angles sum to 90 degrees, a square has no equal sides, and a circle's area is πd", 
    "A right angle is 45 degrees, triangle angles sum to 360 degrees, a square has two equal sides, and circle's area is 2πr", 
    "A right angle is 90 degrees, triangle angles sum to 180 degrees, a square has all sides equal, and a circle's area is πr^2"
  ],
  correct: 4,
  course: "Pre-Algebra",
  unit: 5,
  lessonTitle: "Expressions, Equations, and Inequalities"
},

//Unit 6 
{
  question: "Which of the following statements is completely correct?",
  choices: [
    "The point (2, -3) is in Quadrant IV, the distance from (1, 1) to (4, 5) is 5, the volume of a cube is s^3, and reflecting (5, -2) over the x-axis gives (5, 2)", 
    "The point (2, -3) is in Quadrant III, the distance from (1, 1) to (4, 5) is 3, the volume of a cube is 6s^2, and reflecting gives (-5, 2)", 
    "The point (2, -3) is in Quadrant IV, the distance from (1, 1) to (4, 5) is 6, the volume of a cube is s^2, and reflecting gives (5, -2)", 
    "The point (2, -3) is in Quadrant II, the distance from (1, 1) to (4, 5) is 5, the volume of a cube is s^3, and reflecting gives (-5, -2)"
  ],
  correct: 1,
  course: "Pre-Algebra",
  unit: 6,
  lessonTitle: "Geometry & Statistics Basics"
},

//Algebra Testing
// Unit 1 
{
  question: "Simplify the expression: 3(2x - 5) + 4x - 7",
  choices: [
    "10x - 12", 
    "6x - 22", 
    "10x - 22", 
    "6x - 12"
  ],
  correct: 3,
  course: "Algebra",
  unit: 1,
  lessonTitle: "Expressions and Simplifying"
},


//Unit 2 
{
  question: "Solve for x: 4(x - 3) + 2 = 2x + 10",
  choices: [
    "6", 
    "8", 
    "10", 
    "12"
  ],
  correct: 2,
  course: "Algebra",
  unit: 2,
  lessonTitle: "Solving Equations"
},


//Unit 3 
{
  question: "Solve the inequality: 3x - 7 ≤ 11",
  choices: [
    "x ≤ 6", 
    "x < 6", 
    "x ≥ 6", 
    "x > 6"
  ],
  correct: 1,
  course: "Algebra",
  unit: 3,
  lessonTitle: "Inequalities"
},


//Unit 4 
{
  question: "Given f(x) = 2x -5, find f(4)",
  choices: [
    "3", 
    "11", 
    "-3", 
    "13"
  ],
  correct: 1,
  course: "Algebra",
  unit: 4,
  lessonTitle: "Functions & Relations"
},

//Unit 5 
{
  question: "Solve the system of equations: { x + y = 10 and x - y = 2",
  choices: [
    "(4, 6)", 
    "(6, 4)", 
    "(5, 5)", 
    "(8, 2"
  ],
  correct: 2,
  course: "Algebra",
  unit: 5,
  lessonTitle: "Systems of Equations"
},

//Unit 6
{
  question: "Factor completely: x^2 + 5x + 6",
  choices: [
    "(x + 1)(x + 6)", 
    "(x - 2)(x - 3)", 
    "(x + 2)(x + 3)", 
    "Prime"
  ],
  correct: 3,
  course: "Algebra",
  unit: 6,
  lessonTitle: "Polynomials & Quadratics"
},

//Statistics Testing
// Unit 1 
{
  question: "Which of the following is a quantitative variable?",
  choices: [
    "Eye color", 
    "Type of pet", 
    "Number of siblings", 
    "Favorite music genre"
  ],
  correct: 3,
  course: "Statistics",
  unit: 1,
  lessonTitle: "Data Basics"
},


//Unit 2
{
  question: "Find the median of the data set: { 4, 7, 9, 12, 15 }",
  choices: [
    "7", 
    "9", 
    "10", 
    "12"
  ],
  correct: 2,
  course: "Statistics",
  unit: 2,
  lessonTitle: "Measures of Central Tendency"
},


//Unit 3
{
  question: "What is the range of the data set?  { 3, 6, 8, 10, 15 }",
  choices: [
    "10", 
    "11", 
    "12", 
    "15"
  ],
  correct: 2,
  course: "Statistics",
  unit: 3,
  lessonTitle: "Probability Basics"
},


//Unit 4 
{
  question: "Which graph is best for showing how a categorical variable is distributed?",
  choices: [
    "Line graph", 
    "Histogram", 
    "Scatter plot", 
    "Bar graph"
  ],
  correct: 4,
  course: "Statistics",
  unit: 4,
  lessonTitle: "Data Distributions"
},

//Unit 5 
{
  question: "A bag contains 3 red, 5 blue, and 2 green marbles. What is the probability of randomly selecting a blue marble?",
  choices: [
    "1/10", 
    "2/10", 
    "3/10", 
    "5/10"
  ],
  correct: 4,
  course: "Statistics",
  unit: 5,
  lessonTitle: "Correlation & Trends"
},


//Unit 6 
{
  question: "Which situation is most likely to produce a biased result?",
  choices: [
    "Randomly surveying students in the cafeteria", 
    "Surveying only athletes about school lunches", 
    "Surveying students from every grade", 
    "Randomly selecting names from a class list"
  ],
  correct: 2,
  course: "Statistics",
  unit: 6,
  lessonTitle: "Advanced Descriptive Statistics"
},

//Geomtery Testing
// Unit 1 
{
  question: "If two angles form a linear pair, what is their sum?",
  choices: [
    "90 degrees", 
    "180 degrees", 
    "270 degrees", 
    "360 degrees"
  ],
  correct: 2,
  course: "Geometry",
  unit: 1,
  lessonTitle: "Basics of Geometry"
},


//Unit 2
{
  question: "What is the measure of the third angle in a triangle if the other two angles are 45 degrees and 65 degrees?",
  choices: [
    "70", 
    "80", 
    "90", 
    "110"
  ],
  correct: 1,
  course: "Geometry",
  unit: 2,
  lessonTitle: "Triangles"
},

//Unit 3
{
  question: "What is the sum of the interior angles of a pentagon?",
  choices: [
    "360 degrees", 
    "540 degrees", 
    "720 degrees", 
    "900 degrees"
  ],
  correct: 2,
  course: "Geometry",
  unit: 3,
  lessonTitle: "Quadrilaterals & Polygons"
},

//Unit 4 
{
  question: "What is the diameter of a circle with a radius of 7 cm?",
  choices: [
    "3.5 cm", 
    "7 cm", 
    "14 cm", 
    "49 cm"
  ],
  correct: 3,
  course: "Geometry",
  unit: 4,
  lessonTitle: "Circles"
},


//Unit 5
{
  question: "Find the distance between the points (1, 2) and (4, 6)",
  choices: [
    "3", 
    "4", 
    "5", 
    "6"
  ],
  correct: 3,
  course: "Geometry",
  unit: 5,

  lessonTitle: "Coordinate Geometry"
},

//Unit 6
{
  question: "What is the volume of a rectangular prism with length 4, width 3, and height 5?",
  choices: [
    "12", 
    "20", 
    "60", 
    "120"
  ],
  correct: 3,
  course: "Geometry",
  unit: 6,
  lessonTitle: "Volume, Surface Area, & Transformations"
},

];

export default diagnosticQuestions;

