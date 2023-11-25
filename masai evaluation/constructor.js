
function Student(name, rollNo, className, section, marks) {
    this.name = name;
    this.roll_no = rollNo;
    this.class = className;
    this.section = section;
    this.marks = marks;


    this.printTop3Subjects = () => {
        const subjects = [];
        for (let subject in this.marks) {
            subjects.push({ name: subject, marks: this.marks[subject] });
        }


        subjects.sort((a, b) => b.marks - a.marks);

        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3 && i < subjects.length; i++) {
            console.log(`${i + 1}. ${subjects[i].name}`);
        }
    };


    this.printReportCard = () => {
        const totalSubjects = Object.keys(this.marks).length;
        const totalMarks = Object.values(this.marks).reduce((sum, mark) => sum + mark, 0);
        const percentage = (totalMarks / (totalSubjects * 100)) * 100;

        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}`);
        console.log(`| Roll no. - ${this.roll_no}`);
        console.log(`| Class    - ${this.class}`);
        console.log(`| Section  - ${this.section}`);

        for (let subject in this.marks) {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${this.marks[subject]}     |`);
        }

        console.log(`| Percentage - ${percentage.toFixed(1)} %`);
        console.log("+--------------------+");
    };
}


const student1 = new Student("Sudhanshu", 64, "XII", "A", {
    science: 79,
    maths: 77,
    social_science: 74,
    english: 85,
    hindi: 96
});


student1.printTop3Subjects();
student1.printReportCard();

