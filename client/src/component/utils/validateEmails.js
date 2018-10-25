const re = 	
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {

    let invalidEmailArray = 
    emails.split(',')
        .map(email =>
            email.trim()).filter(email=>re.test(email)===false)
            console.log(invalidEmailArray)
    if (invalidEmailArray.length) {
        return `this are the emails that are invalid ${invalidEmailArray}`;
    }
    return
};  