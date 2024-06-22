/*

1. Write a function in React that takes an array of numbers and
returns a new array with each number doubled using the map method.

Example:
Input: [1, 2, 3, 4, 5]
Output: [2, 4, 6, 8, 10]

2. Write a function in React that takes an array of strings and returns a new array
containing only the strings with more than 3 characters using the filter method.

Example:
Input: ["cat", "lion", "dog", "elephant", "fox"]
Output: ["elephant"]

3. Write a function in React that takes an array of objects representing people
(with name and age properties) and returns a new array of names of people who
are 18 or older using the filter and map methods.

Example:
Input: [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 15 },
]
Output: ["Alice", "Charlie"]

4. Write a function in React that takes an array of numbers and
returns the sum of all numbers using the reduce method.

Example:
Input: [1, 2, 3, 4, 5]
Output: 15

5. Write a function in React that takes an array of strings and returns a single string
concatenating all the elements separated by a comma using the reduce method.

Example:
Input: ["apple", "banana", "cherry"]
Output: "apple,banana,cherry"

6. Write a function in React that takes an array of numbers and returns a
new array with only the even numbers using the filter method.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]

7. Write a function in React that takes an array of objects representing products (with name and price properties) and
returns a new array with only the names of the products that cost more than $20 using the filter and map methods.

Example:
Input: [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Pencil", price: 5 },
  { name: "Bag", price: 50 },
]
Output: ["Notebook", "Bag"]

8. Write a function in React that takes an array of strings and
returns a new array with each string reversed using the map method.

Example:
Input: ["hello", "world", "react"]
Output: ["olleh", "dlrow", "tcaer"]

9. Write a function in React that takes an array of objects representing books 
(with title, author, and year properties) and returns a new array of books 
published after 2000, sorted by year using the filter and sort methods.

Example:
Input: [
  { title: "Book1", author: "Author1", year: 1998 },
  { title: "Book2", author: "Author2", year: 2009 },
  { title: "Book3", author: "Author3", year: 1995 },
  { title: "Book4", author: "Author4", year: 2008 },
]
Output: [
  { title: "Book4", author: "Author4", year: 2008 },
  { title: "Book2", author: "Author2", year: 2009 },
]

10. Write a function in React that takes an array of numbers and
returns the product of all numbers using the reduce method.

Example:
Input: [2, 3, 4]
Output: 24

11. Write a function in React that takes an array of objects representing
students (with name, grade, and subjects properties) and returns a new 
array of students who have passed all subjects (where every subject score
is greater than or equal to 60) using the filter method.

Example:
Input: [
  { name: "Alice", grade: "A", subjects: { math: 70, science: 65, english: 80 } },
  { name: "Bob", grade: "B", subjects: { math: 55, science: 60, english: 75 } },
  { name: "Charlie", grade: "A", subjects: { math: 80, science: 70, english: 85 } },
]
Output: [
  { name: "Alice", grade: "A", subjects: { math: 70, science: 65, english: 80 } },
  { name: "Charlie", grade: "A", subjects: { math: 80, science: 70, english: 85 } },
]

12. Write a function in React that takes an array of numbers
and returns the largest number using the reduce method.

Example:
Input: [10, 5, 20, 15]
Output: 20

13. Write a function in React that takes an array of objects representing transactions 
(with id, type, and amount properties) and returns the total amount of all deposits 
(where type is 'deposit') using the reduce method.

Example:
Input: [
  { id: 1, type: "deposit", amount: 100 },
  { id: 2, type: "withdrawal", amount: 50 },
  { id: 3, type: "deposit", amount: 200 },
  { id: 4, type: "deposit", amount: 150 },
]
Output: 450

14. Write a function in React that takes an array of numbers and returns a new 
array with only the unique numbers using the reduce method.

Example:
Input: [1, 2, 2, 3, 2, 4, 3, 5]
Output: [1, 2, 3, 4, 5]

15. Write a function in React that takes an array of strings and returns a new array 
with only the unique strings, ignoring case sensitivity, using the reduce method.

Example:
Input: ["Apple", "Banana", "apple", "banana", "Cherry"]
Output: ["Apple", "Banana", "Cherry"]

16. Write a function in React that takes an array of numbers and returns an object 
with the count of even and odd numbers using the reduce method.

Example:
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Output: { even: 5, odd: 5 }

17. Write a function in React that takes an array of objects representing orders (with id, product, and 
quantity properties) and returns the total quantity of all products ordered using the reduce method.

Example:
Input: [
  { id: 1, product: "Pen", quantity: 10 },
  { id: 2, product: "Notebook", quantity: 5 },
  { id: 3, product: "Pencil", quantity: 20 },
]
Output: 35

18. Write a function in React that takes an array of numbers and returns a new array 
with the square root of each number using the map method.

Example:
Input: [1, 4, 9, 16, 25]
Output: [1, 2, 3, 4, 5]

19. Write a function in React that takes an array of objects representing students 
(with name and grades properties, where grades is an array of numbers) and returns 
a new array of students with their average grade included using the map method.

Example:
Input: [
  { name: "Alice", grades: [90, 85, 88] },
  { name: "Bob", grades: [75, 70, 72] },
  { name: "Charlie", grades: [95, 92, 90] },
]
Output: [
  { name: "Alice", grades: [90, 85, 88], average: 87.7 },
  { name: "Bob", grades: [75, 70, 72], average: 72.3 },
  { name: "Charlie", grades: [95, 92, 90], average: 92.3 },
]

20. Write a function in React that takes an array of numbers and returns the 
first number that is greater than 10 using the find method.

Example:
Input: [5, 8, 12, 15, 20]
Output: 12

21. Write a function in React that takes an array of objects representing products 
(with name, category, and price properties) and returns an array of objects 
grouped by category using the reduce method.

Example:
Input: [
  { name: "Pen", category: "Stationery", price: 10 },
  { name: "Notebook", category: "Stationery", price: 25 },
  { name: "Apple", category: "Food", price: 3 },
  { name: "Banana", category: "Food", price: 2 },
]
Output: {
  Stationery: [
    { name: "Pen", category: "Stationery", price: 10 },
    { name: "Notebook", category: "Stationery", price: 25 },
  ],
  Food: [
    { name: "Apple", category: "Food", price: 3 },
    { name: "Banana", category: "Food", price: 2 },
  ]
}

22. Write a function in React that takes an array of numbers and returns a new array with 
each number replaced by its position in the original array using the map method.

Example:
Input: [10, 20, 30, 40]
Output: [0, 1, 2, 3]

23. Write a function in React that takes an array of objects representing events (with name, 
date, and location properties) and returns an array of event names that occur in the 
current year using the filter method.

Example:
Input: [
  { name: "Event1", date: "2024-06-01", location: "NY" },
  { name: "Event2", date: "2023-06-15", location: "LA" },
  { name: "Event3", date: "2024-07-20", location: "SF" },
  { name: "Event4", date: "2022-05-10", location: "TX" },
]
Output: ["Event1", "Event3"]

24. Write a function in React that takes an array of objects representing tasks (with id, 
description, and completed properties) and returns a new array of objects where each task 
includes a new status property based on the completed property using the map method. The 
status should be 'done' if completed is true and 'pending' if completed is false.

Example:
Input: [
  { id: 1, description: "Task 1", completed: true },
  { id: 2, description: "Task 2", completed: false },
  { id: 3, description: "Task 3", completed: true },
  { id: 4, description: "Task 4", completed: false },
]
Output: [
  { id: 1, description: "Task 1", completed: true, status: "done" },
  { id: 2, description: "Task 2", completed: false, status: "pending" },
  { id: 3, description: "Task 3", completed: true, status: "done" },
  { id: 4, description: "Task 4", completed: false, status: "pending" },
]

25. Write a function in React that takes an array of objects representing sales (with product, 
quantity, and price properties) and returns the total revenue for each product using the
reduce method. The result should be an object where keys are product names and values are the
total revenue for that product.

Example:
Input: [
  { product: "Laptop", quantity: 2, price: 1000 },
  { product: "Phone", quantity: 5, price: 500 },
  { product: "Laptop", quantity: 1, price: 1000 },
  { product: "Phone", quantity: 3, price: 500 },
]
Output: {
  Laptop: 3000,
  Phone: 3500,
}

*/
