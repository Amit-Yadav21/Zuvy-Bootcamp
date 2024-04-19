function Form({ userIsRegistered }) {
    let buttonText;
    if (userIsRegistered === true) {
        buttonText = "Login";
    } else {
        buttonText = "Register";
    }

    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {!userIsRegistered && (
                <input type="password" placeholder="Confirm Password" />
            )}
            <button type="submit">{buttonText}</button>
        </form>
    );
}

export default Form;
