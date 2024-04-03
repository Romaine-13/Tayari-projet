
function validLengthName(param_name) {
    if (param_name.length >= 3 && param_name.length <= 50) {
        return 0
    }
    else if (param_name.length < 3) {
        return -1
    } else {
        return 1
    }
}