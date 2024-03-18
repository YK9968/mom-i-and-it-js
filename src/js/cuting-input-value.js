
// oninput="cuttingInputText()"

const inputComments = document.querySelector('.worktogether-form-comments');

function cuttingInputText() {
    

    const maxLength = 50;

    if(inputComments.value.length > maxLength) {
        inputComments.value = inputComments.value.subctring(0, maxLength);
        inputComments.value += '...';

    }
    // console.log(inputComments.value);
}