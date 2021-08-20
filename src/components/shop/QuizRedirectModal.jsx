const QuizRedirectModal = ({isVisible, handleClick}) => {
    return (
        <div className={!!isVisible ? "modal__overlay visible" : "hidden"}>
        <div className="modal__content" id="redirectModal">
          <button
            type="button"
            className="modal__close"
            onClick={handleClick}
          >
            x
          </button>

          <h1>We're Sorry </h1>
          <p>We Couldn't Find any matches for your preferences at this moment, but there are plenty of great options in our store. We will contact you soon when we update our inventory and have the perfect box you.</p>
          <button type="button" className="primaryBtn" onClick={handleClick}>Start Shopping</button>
          
        </div>
      </div>
    )
}

export default QuizRedirectModal;