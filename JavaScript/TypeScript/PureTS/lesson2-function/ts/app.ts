function info(req:boolean,problem:string):void{
        let resultSys:boolean = false;
        let resultText:string;
        if (req) {
            resultSys=true;
            if (resultSys) {
                resultText = "success"
            }
        }else{
            resultText = problem;
        }
         console.log(resultText);
         ;
}

info(false,"have a problem");
