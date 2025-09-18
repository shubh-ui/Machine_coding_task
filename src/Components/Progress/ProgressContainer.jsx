import Progress from "./Progress"

const ProgressContainer = () => {
    const bars = [1, 5, 10, 30, 60, 90];
    return (
      <>
        {bars.map((b, index) => (
          <Progress key={index} progress={b} />
        ))}
      </>
    );
}

export default ProgressContainer;