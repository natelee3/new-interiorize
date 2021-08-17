import CarouselContainer from './Carousel';
import './styleQuiz.css';

const StyleQuiz = () => {
    return (
        <>
        <div className="wrapper">
            <div className="container">
                <div className="quizContainer">
                    <h1>Style Quiz</h1>
                    <p>The style quiz is an essential part of our process at Interiorize. This quiz helps us put together the perfect interior design box for you by establishing your basic style profile. </p>
                    <CarouselContainer/>
                </div>
            </div>

        </div>
        </>
    )
}

export default StyleQuiz;