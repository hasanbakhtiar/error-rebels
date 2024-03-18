function info(req, problem) {
    var resultSys = false;
    var resultText;
    if (req) {
        resultSys = true;
        if (resultSys) {
            resultText = "success";
        }
    }
    else {
        resultText = problem;
    }
    console.log(resultText);
    ;
}
info(false, "have a problem");
