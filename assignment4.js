//? TASK 1:  You are tasked with creating a JavaScript program that simulates a digital library system. The program should allow users to add new books, search for books by title or author, and display information about the library's collection.
//! 1: Create a constructor function for the Book object with properties for title, author, and pages.
function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.displayInfo = function () {
		console.log(
			"Title:",
			this.title,
			"\nAuthor:",
			this.author,
			"\n# of Pages:",
			this.pages
		);
	};
}

//! 2: Implement a method within the Book object to display book information.
//! 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.
let catalog = [];
function addBook(title, author, pages) {
	const newBook = new Book(title, author, pages);
	catalog.push(newBook);
}

let book1 = addBook("Eye of the World", "Robert Jordan", 800);
let book2 = addBook("The Great Hunt", "Robert Jordan", 782);
let book3 = addBook(
	"Harry Potter and the Deathly Hallows",
	"J.K. Rowling",
	750
);

// console.log(catalog);

function searchTitle(title) {
	for (let book in catalog) {
		if (catalog[book].title == title) {
			catalog[book].displayInfo();
		} else {
			//pass
		}
	}
}
// searchTitle("Eye of the World");

function searchAuthor(author) {
	for (let book in catalog) {
		if (catalog[book].author == author) {
			catalog[book].displayInfo();
		} else {
			//pass
		}
	}
}
// searchAuthor("J.K. Rowling");

//! 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.
function filterByLength(book) {
	return book.pages < 800;
}

const lessThan800 = catalog.filter(filterByLength);
// console.log(lessThan800);

const updatedCatalog = catalog.map((book) => {
	return {
		...book,
		title: `Title: ${book.title}`,
		author: `Author: ${book.author}`,
	};
});

// console.log(updatedCatalog);

//? TASK 2:  You are tasked with developing a JavaScript program that simulates a simple banking application. The program should allow users to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.
//! 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.
function Account(accountNumber, balance, owner) {
	this.accountNumber = accountNumber;
	this.balance = balance;
	this.owner = owner;
	//! 2: Implement methods within the Account object to deposit and withdraw funds.
	this.deposit = function (amount) {
		this.balance += amount;
		return this.balance;
	};
	this.withdraw = function (amount) {
		if (this.balance >= amount) {
			this.balance -= amount;
			return this.balance;
		} else {
			console.log("Insufficient Balance. Current Balance: $" + this.balance);
		}
	};
	this.compoundInterest = function (rate, years) {
		const interest = this.balance * ((1 + rate / 12) ** (12 * years) - 1);
		const A = interest + this.balance;
		return A;
	};
}

//! 3: Create a method to calculate compound interest based on the balance and specified interest rate.
const newAccount = new Account(12345567, 10000, "John Doe");

console.log(newAccount.compoundInterest(0.03875, 5));
