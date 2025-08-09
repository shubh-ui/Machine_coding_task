import Star from "./Star";

const StarContainer = () => {
    const starCount = 5;
    return (
        <div>
            <Star starCount={starCount} />
        </div>
    )
}

export default StarContainer