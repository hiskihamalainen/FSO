const Header = ({ course }) => {
    return (
      <div>
        <h1>
          {course.name}
        </h1>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part) =>
        <p key={part.id}>
          {part.name} {part.exercises}
          </p>)}
      </div>
    )
  }
  
  const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return (
      <div>
        <p>
          Number of exercises {totalExercises}
        </p>
      </div>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course
  