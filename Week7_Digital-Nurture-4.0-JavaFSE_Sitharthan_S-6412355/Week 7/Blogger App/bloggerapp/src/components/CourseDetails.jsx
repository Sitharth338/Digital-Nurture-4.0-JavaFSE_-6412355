const course = [
    {
        id: 1,
        name: 'Angular',
        date: '4/5/2021'
    },
    {
        id: 2,
        name: 'React',
        date: '5/6/2022'
    }
]
function CourseDetails(){
    return (
        <div>
            <h1>Course Details</h1>
            {course.map((c) =>(
                <div key={c.id}>
                    <h3>{c.name}</h3>
                    <p>{c.date}</p>
                </div>
            ))}
        </div>
    )
}

export default CourseDetails;