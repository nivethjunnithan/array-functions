/*

1. Write a function in React that takes an array of numbers and
returns a new array with each number doubled using the map method.

2. Write a function in React that takes an array of strings and returns a new array
containing only the strings with more than 3 characters using the filter method.

3. Write a function in React that takes an array of objects representing people
(with name and age properties) and returns a new array of names of people who
are 18 or older using the filter and map methods.

4. Write a function in React that takes an array of numbers and
returns the sum of all numbers using the reduce method.

5. Write a function in React that takes an array of strings and returns a single string
concatenating all the elements separated by a comma using the reduce method.

6. Write a function in React that takes an array of numbers and returns a
new array with only the even numbers using the filter method.

7. Write a function in React that takes an array of objects representing products (with name and price properties) and
returns a new array with only the names of the products that cost more than $20 using the filter and map methods.

8. Write a function in React that takes an array of strings and
returns a new array with each string reversed using the map method.

9. Write a function in React that takes an array of objects representing books 
(with title, author, and year properties) and returns a new array of books 
published after 2000, sorted by year using the filter and sort methods.

10. Write a function in React that takes an array of numbers and
returns the product of all numbers using the reduce method.

11. Write a function in React that takes an array of objects representing
students (with name, grade, and subjects properties) and returns a new 
array of students who have passed all subjects (where every subject score
is greater than or equal to 60) using the filter method.

12. Write a function in React that takes an array of numbers
and returns the largest number using the reduce method.

13. Write a function in React that takes an array of objects representing transactions 
(with id, type, and amount properties) and returns the total amount of all deposits 
(where type is 'deposit') using the reduce method.

14. Write a function in React that takes an array of numbers and returns a new 
array with only the unique numbers using the reduce method.

15. Write a function in React that takes an array of strings and returns a new array 
with only the unique strings, ignoring case sensitivity, using the reduce method.

16. Write a function in React that takes an array of numbers and returns an object 
with the count of even and odd numbers using the reduce method.

17. Write a function in React that takes an array of objects representing orders (with id, product, and 
quantity properties) and returns the total quantity of all products ordered using the reduce method.

18. Write a function in React that takes an array of numbers and returns a new array 
with the square root of each number using the map method.

19. Write a function in React that takes an array of objects representing students 
(with name and grades properties, where grades is an array of numbers) and returns 
a new array of students with their average grade included using the map method.

20. Write a function in React that takes an array of numbers and returns the 
first number that is greater than 10 using the find method.

21. Write a function in React that takes an array of objects representing products 
(with name, category, and price properties) and returns an array of objects 
grouped by category using the reduce method.

22. Write a function in React that takes an array of numbers and returns a new array with 
each number replaced by its position in the original array using the map method.

23. Write a function in React that takes an array of objects representing events (with name, 
date, and location properties) and returns an array of event names that occur in the 
current year using the filter method.

24. Write a function in React that takes an array of objects representing tasks (with id, 
description, and completed properties) and returns a new array of objects where each task 
includes a new status property based on the completed property using the map method. The 
status should be 'done' if completed is true and 'pending' if completed is false.

25. Write a function in React that takes an array of objects representing sales (with product, 
quantity, and price properties) and returns the total revenue for each product using the
reduce method. The result should be an object where keys are product names and values are the
total revenue for that product.

*/

// Answers

// Answer 1.

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = (numbers) => {
  return numbers.map((num) => num * 2);
};
const doubledNumbers = doubleNumbers(numbers);
console.log(doubledNumbers);

// Answer 2.

const strings = ["cat", "lion", "dog", "elephant", "fox"];
const filterLongStrings = (strings) => {
  return strings.filter((str) => str.length > 3);
};
const longStrings = filterLongStrings(strings);
console.log(longStrings);

// Answer 3.

const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 15 },
];
const getAdultNames = (people) => {
  return people
    .filter((person) => person.age >= 18)
    .map((person) => person.name);
};
const adultNames = getAdultNames(people);
console.log(adultNames);

// Answer 4.

const numbersSum = [1, 2, 3, 4, 5];
const getSum = (numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};
const sum = getSum(numbersSum);
console.log(sum);

// Answer 5.

const stringsConcat = ["apple", "banana", "cherry"];
const concatenateStrings = (strings) => {
  return strings.reduce((acc, str, index) => {
    return index === strings.length - 1 ? acc + str : acc + str + ",";
  }, "");
};
const concatenatedString = concatenateStrings(stringsConcat);
console.log(concatenatedString);

// Answer 6.

const numbersEven = [1, 2, 3, 4, 5, 6];
const getEvenNumbers = (numbers) => {
  return numbers.filter((num) => num % 2 === 0);
};
const evenNumbers = getEvenNumbers(numbersEven);
console.log(evenNumbers);

// Answer 7.

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Pencil", price: 5 },
  { name: "Bag", price: 50 },
];
const getExpensiveProductNames = (products) => {
  return products
    .filter((product) => product.price > 20)
    .map((product) => product.name);
};
const expensiveProductNames = getExpensiveProductNames(products);
console.log(expensiveProductNames);

// Answer 8.

const stringsToReverse = ["hello", "world", "react"];
const reverseStrings = (strings) => {
  return strings.map((str) => str.split("").reverse().join(""));
};
const reversedStrings = reverseStrings(stringsToReverse);
console.log(reversedStrings);

// Answer 9.

const books = [
  { title: "Book1", author: "Author1", year: 1998 },
  { title: "Book2", author: "Author2", year: 2009 },
  { title: "Book3", author: "Author3", year: 1995 },
  { title: "Book4", author: "Author4", year: 2008 },
];
const getRecentBooks = (books) => {
  return books
    .filter((id) => id.year > 2000)
    .sort((b1, b2) => b1.year - b2.year);
};
const recentBooks = getRecentBooks(books);
console.log(recentBooks);

// Answer 10.

const numbersList = [2, 3, 4];
const getProduct = (numbers) => {
  return numbers.reduce((product, num) => product * num, 1);
};
const product = getProduct(numbersList);
console.log(product);

// Answer 11.

const students = [
  {
    name: "Alice",
    grade: "A",
    subjects: { math: 70, science: 65, english: 80 },
  },
  { name: "Bob", grade: "B", subjects: { math: 55, science: 60, english: 75 } },
  {
    name: "Charlie",
    grade: "A",
    subjects: { math: 80, science: 70, english: 85 },
  },
];
const getPassedStudents = (students) => {
  return students.filter((item) =>
    Object.values(item.subjects).every((value) => value > 60)
  );
};
const passedStudents = getPassedStudents(students);
console.log(passedStudents);

// Answer 12.

const numberList = [10, 5, 20, 15];
const getLargestNumber = (numbers) => {
  return numbers.reduce((largest, number) => Math.max(largest, number));
};
const largestNumber = getLargestNumber(numberList);
console.log(largestNumber);

// Answer 13.

const transactions = [
  { id: 1, type: "deposit", amount: 100 },
  { id: 2, type: "withdrawal", amount: 50 },
  { id: 3, type: "deposit", amount: 200 },
  { id: 4, type: "deposit", amount: 150 },
];

const getTotalDeposits = (transactions) => {
  return transactions
    .filter((transaction) => transaction.type === "deposit")
    .reduce((total, transaction) => total + transaction.amount, 0);
};
const totalDeposits = getTotalDeposits(transactions);
console.log(totalDeposits);

// Answer 14.

const numList = [1, 2, 2, 3, 2, 4, 3, 5];
const getUniqueNumbers = (numbers) => {
  return numbers.reduce((uniqueArray, num) => {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
    return uniqueArray;
  }, []);
};
const uniqueNumbers = getUniqueNumbers(numList);
console.log(uniqueNumbers);

// Answer 15.

const stringList = ["Apple", "Banana", "apple", "banana", "Cherry"];
const getUniqueStrings = (strings) => {
  return strings.reduce((uniqueArray, str) => {
    if (!uniqueArray.some((s) => s.toLowerCase() === str.toLowerCase())) {
      uniqueArray.push(str);
    }
    return uniqueArray;
  }, []);
};
const uniqueStrings = getUniqueStrings(stringList);
console.log(uniqueStrings);

// Answer 16.

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const countEvenOdd = (numbers) => {
  return numbers.reduce(
    (count, num) => {
      num % 2 === 0 ? count.even++ : count.odd++;
      return count;
    },
    { even: 0, odd: 0 }
  );
};
const evenOddCount = countEvenOdd(numArray);
console.log(evenOddCount);

// Answer 17.

const orders = [
  { id: 1, product: "Pen", quantity: 10 },
  { id: 2, product: "Notebook", quantity: 5 },
  { id: 3, product: "Pencil", quantity: 20 },
];
const getTotalQuantity = (orders) => {
  return orders.reduce((total, order) => total + order.quantity, 0);
};
const totalQuantity = getTotalQuantity(orders);
console.log(totalQuantity);

// Answer 18.

const numberArray = [1, 4, 9, 16, 25];
const getSquareRoots = (numbers) => {
  return numbers.map((num) => Math.sqrt(num));
};
const squareRoots = getSquareRoots(numberArray);
console.log(squareRoots);

// Answer 19.

const studentGrades = [
  { name: "Alice", grades: [90, 85, 88] },
  { name: "Bob", grades: [75, 70, 72] },
  { name: "Charlie", grades: [95, 92, 90] },
];
const getStudentsWithAverage = (students) => {
  return students.map((student) => {
    const average =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length;
    return { ...student, average };
  });
};
const studentsWithAverage = getStudentsWithAverage(studentGrades);
console.log(studentsWithAverage);

// Answer 20.

const numbersToFind = [5, 8, 12, 15, 20];
const findNumberGreaterThan10 = (numbers) => {
  return numbers.find((num) => num > 10);
};
const numberGreaterThan10 = findNumberGreaterThan10(numbersToFind);
console.log(numberGreaterThan10);

// Answer 21.

const productsToGroup = [
  { name: "Pen", category: "Stationery", price: 10 },
  { name: "Notebook", category: "Stationery", price: 25 },
  { name: "Apple", category: "Food", price: 3 },
  { name: "Banana", category: "Food", price: 2 },
];
const groupByCategory = (products) => {
  return products.reduce((grouped, product) => {
    const category = product.category;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(product);
    return grouped;
  }, {});
};
const groupedProducts = groupByCategory(productsToGroup);
console.log(groupedProducts);

// Answer 22.

const numberPositions = [10, 20, 30, 40];
const replaceWithPosition = (numbers) => {
  return numbers.map((num, index) => index);
};
const positions = replaceWithPosition(numberPositions);
console.log(positions);

// Answer 23.

const events = [
  { name: "Event1", date: "2024-06-01", location: "NY" },
  { name: "Event2", date: "2023-06-15", location: "LA" },
  { name: "Event3", date: "2024-07-20", location: "SF" },
  { name: "Event4", date: "2022-05-10", location: "TX" },
];
const getCurrentYearEvents = (events) => {
  return events
    .filter(
      (event) => new Date(event.date).getFullYear() === new Date().getFullYear()
    )
    .map((event) => event.name);
};
const currentYearEvents = getCurrentYearEvents(events);
console.log(currentYearEvents);

// Answer 24.

const tasks = [
  { id: 1, description: "Task 1", completed: true },
  { id: 2, description: "Task 2", completed: false },
  { id: 3, description: "Task 3", completed: true },
  { id: 4, description: "Task 4", completed: false },
];
const addStatusToTasks = (tasks) => {
  return tasks.map((task) => ({
    ...task,
    status: task.completed ? "done" : "pending",
  }));
};
const tasksWithStatus = addStatusToTasks(tasks);
console.log(tasksWithStatus);

// Answer 25.

const sales = [
  { product: "Laptop", quantity: 2, price: 1000 },
  { product: "Phone", quantity: 5, price: 500 },
  { product: "Laptop", quantity: 1, price: 1000 },
  { product: "Phone", quantity: 3, price: 500 },
];

const calculateTotalRevenue = (sales) => {
  return sales.reduce((acc, sale) => {
    const { product, quantity, price } = sale;
    acc[product] = (acc[product] || 0) + quantity * price;
    return acc;
  }, {});
};
const totalRevenue = calculateTotalRevenue(sales);
console.log(totalRevenue);
