class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`Название: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Количество страниц: ${this.pages}`);
    }
}

const book = new Book('Изучаем программирование на JavaScript', 'Робсон Элизабет и Эрик Фримен', 704);
book.displayInfo();

class Student {
    constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
