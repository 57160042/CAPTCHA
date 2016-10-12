function captcha(var PatternValue,var OperatorValue,var LeftoperandValue,var RigthoperandValue) {

  var left = new leftoperand(PatternValue,LeftoperandValue);
  var oper = new operator(OperatorValue);
  var right = new rigthoperand(PatternValue,RigthoperandValue);

    this.generate = function (){
        return left+oper+right;
    }


}


function operator(OperatorValue) {
    if (OperatorValue == 1){
      return "+";
    }
    if (OperatorValue == 2){
      return "-";
    }
}



function leftoperand() {


}



function rigthoperand() {

}
