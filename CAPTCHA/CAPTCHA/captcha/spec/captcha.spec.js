function captcha(var PatternValue,var OperatorValue,var LeftoperandValue,var RigthoperandValue) {

  var left = new leftoperand(PatternValue,LeftoperandValue);
  var oper = new operator(OperatorValue);
  var right = new rigthoperand(PatternValue,RigthoperandValue);

    this.generate = function (){
        return left+oper+right;
    }


}


function operator(OperatorValue) {
    if (OperatorValue === 1){
      return "+";
    }
    if (OperatorValue === 2){
      return "-";
    }
}



function leftoperand(PatternValue,LeftoperandValue) {
    if(PatternValue === 1 ){
      if(LeftoperandValue === 0){
        left = "0";
        return left;
      }
      else if(LeftoperandValue === 1){
        left = "1";
        return left;
      }
      else if(LeftoperandValue === 2){
        left = "2";
        return left;
      }
      else if(LeftoperandValue === 3){
        left = "3";
        return left;
      }
      else if(LeftoperandValue === 4){
        left = "4";
        return left;
      }
      else if(LeftoperandValue === 5){
        left = "5";
        return left;
      }
      else if(LeftoperandValue === 6){
        left = "6";
        return left;
      }
      else if(LeftoperandValue === 7){
        left = "7";
        return left;
      }
      else if(LeftoperandValue === 8){
        left = "8";
        return left;
      }
      else if(LeftoperandValue === 9){
        left = "9";
        return left;
      }
    }

    if(PatternValue === 2 ){
      if(LeftoperandValue === 0){
        left = "zero";
        return left;
      }
      else if(LeftoperandValue === 1){
        left = "one";
        return left;
      }
      else if(LeftoperandValue === 2){
        left = "two";
        return left;
      }
      else if(LeftoperandValue === 3){
        left = "three";
        return left;
      }
      else if(LeftoperandValue === 4){
        left = "four";
        return left;
      }
      else if(LeftoperandValue === 5){
        left = "five";
        return left;
      }
      else if(LeftoperandValue === 6){
        left = "six";
        return left;
      }
      else if(LeftoperandValue === 7){
        left = "seven";
        return left;
      }
      else if(LeftoperandValue === 8){
        left = "eight";
        return left;
      }
      else if(LeftoperandValue === 9){
        left = "nine";
        return left;
      }
    }

}



function rigthoperand(PatternValue,RigthoperandValue) {

  if(PatternValue === 1){
    if(RigthoperandValue === 0){
      left = "zero";
      return left;
    }
    else if(RigthoperandValue === 1){
      left = "one";
      return left;
    }
    else if(RigthoperandValue === 2){
      left = "two";
      return left;
    }
    else if(RigthoperandValue === 3){
      left = "three";
      return left;
    }
    else if(RigthoperandValue === 4){
      left = "four";
      return left;
    }
    else if(RigthoperandValue === 5){
      left = "five";
      return left;
    }
    else if(RigthoperandValue === 6){
      left = "six";
      return left;
    }
    else if(RigthoperandValue === 7){
      left = "seven";
      return left;
    }
    else if(RigthoperandValue === 8){
      left = "eight";
      return left;
    }
    else if(RigthoperandValue === 9){
      left = "nine";
      return left;
    }
  }

  if(PatternValue === 2 ){
    if(RigthoperandValue === 0){
      left = "0";
      return left;
    }
    else if(RigthoperandValue === 1){
      left = "1";
      return left;
    }
    else if(RigthoperandValue === 2){
      left = "2";
      return left;
    }
    else if(RigthoperandValue === 3){
      left = "3";
      return left;
    }
    else if(RigthoperandValue === 4){
      left = "4";
      return left;
    }
    else if(RigthoperandValue === 5){
      left = "5";
      return left;
    }
    else if(RigthoperandValue === 6){
      left = "6";
      return left;
    }
    else if(RigthoperandValue === 7){
      left = "7";
      return left;
    }
    else if(RigthoperandValue === 8){
      left = "8";
      return left;
    }
    else if(RigthoperandValue === 9){
      left = "9";
      return left;
    }
  }

}