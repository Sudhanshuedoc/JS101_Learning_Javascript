function Author(name, birthYear, nationality) {
    this.Name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}
function Book(title, Author, genre, price) {
    this.title = title;
    this.Author = Author;
    this.genre = genre;
    this.price = price;
    this.getBookInfo = function () {
        console.log(`Book title is : ${this.title}`);
        console.log(`author name is : ${this.Author}`);
        console.log(`Genre is : ${this.genre}`);
        console.log(`Price is : ${this.title}`);
    }
}

let a1 = new Author("Sudhanshu", "4-6-2000", "Indian")
let a2 = new Author("Manish", "3-10-2002", "Indian")
console.log(a1)
console.log(a2)
let b1 = new Book("Masai to the sky", a1.Name, "Inspiration", 2000)
b1.getBookInfo();