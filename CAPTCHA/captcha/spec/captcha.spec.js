function captcha(PatternValue,OperatorValue,LeftoperandValue,RigthoperandValue) {

  var left = new leftoperand(PatternValue,LeftoperandValue);
  var oper = new operator(OperatorValue);
  var right = new rigthoperand(PatternValue,RigthoperandValue);

    this.generate = function (){
        return left+oper+right;
    };


}


function operator(OperatorValue) {
  this.toString = function (){
    if (OperatorValue === 1){
      return "+";
    }
    if (OperatorValue === 2){
      return "-";
    }
  }
}



function leftoperand(PatternValue,LeftoperandValue) {
  this.toString = function (){
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
}



function rigthoperand(PatternValue,RigthoperandValue) {
  this.toString = function (){
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
}

describe("CATPCHA", function() {
  describe("Pattrn is 1", function() {
    const pattern = 1

      it('should return "3+two" when input is 1,1,3,2', function() {
        let app = new captcha(pattern,1,3,2);
        expect(app.generate()).toEqual('3+two');
      });

      it('should return "4+six" when input is 1,1,4,6', function() {
        let app = new captcha(pattern,1,4,6);
        expect(app.generate()).toEqual('4+six');
      });

      it('should return "7+nine" when input is 1,1,7,9', function() {
        let app = new captcha(pattern,1,7,9);
        expect(app.generate()).toEqual('7+nine');
      });

      it('should return "0+four" when input is 1,1,0,4', function() {
        let app = new captcha(pattern,1,0,4);
        expect(app.generate()).toEqual('0+four');
      });

      it('should return "7+five" when input is 1,1,7,5', function() {
        let app = new captcha(pattern,1,7,5);
        expect(app.generate()).toEqual('7+five');
      });

      it('should return "1-four" when input is 1,2,1,4', function() {
        let app = new captcha(pattern,2,1,4);
        expect(app.generate()).toEqual('1-four');
      });

      it('should return "6-eight" when input is 1,2,6,8', function() {
        let app = new captcha(pattern,2,6,8);
        expect(app.generate()).toEqual('6-eight');
      });

      it('should return "7-zero" when input is 1,2,7,0', function() {
        let app = new captcha(pattern,2,7,0);
        expect(app.generate()).toEqual('7-zero');
      });

  });

});
