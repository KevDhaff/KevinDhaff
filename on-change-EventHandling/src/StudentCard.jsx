export default function StudentCard(props) {
    const listOfstudents = props.students
    const student = listOfstudents.map(student => 
    <><h4 key={student.id}>Student ID Number: {student.idNumber}</h4>
    <p>Student Name: {student.name}</p>
    <p>Student Course: {student.course}</p>
    <p>Student Age: {student.age}</p>
    <p>Student Gender: {student.gender}</p>
    <p>Student Date: {student.date}</p></>)

    return(
        <>
            <div className="student-card">
                {student}
            </div>
        </>
    )
}