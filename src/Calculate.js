
import  React from 'react';

class Calculate extends React.Component{
    constructor(props){
        super(props);
        this.operation = ["+", "-", "*"];
        this.state = {operation: "+", index:0, result:0 , x:0, y:0};
    }

    changeOperation(){
        var ind = this.state.index;
        ind += 1;
        ind = ind%3;
        var op = this.operation[ind];
        if(op == "+"){
            var r = this.state.x + this.state.y;
            this.setState({operation: op, index:ind, result:r});

        }else if(op == "-"){
            var r = this.state.x - this.state.y;
            this.setState({operation: op, index:ind,result:r});

        }else{
            var r = this.state.x * this.state.y;
            this.setState({operation: op, index:ind, result:r});
        }
    }
    getResultX(e){
        if(e.target.value == ''){
            var p1 = this.state.y;
            this.setState({result:p1});
            return;
        }
        var xval = parseInt(e.target.value);
        console.log(this.state.operation)
        if(this.state.operation == "+"){
            var r = xval + this.state.y;
            this.setState({x:xval, result:r});

        }else if(this.state.operation == "-"){
            var r = xval - this.state.y;
            this.setState({x:xval, result:r});

        }else{
            var r = xval * this.state.y;
            this.setState({x:xval, result:r});
        }
    }
    getResultY(e){
        if(e.target.value == ''){
            var p = this.state.x;
            this.setState({result:p});
            return;
        }
        var yval = parseInt(e.target.value);
        if(this.state.operation == "+"){
            var r = this.state.x + yval;
            this.setState({y:yval, result:r});

        }else if(this.state.operation == "-"){
            var r = this.state.x - yval;
            this.setState({y:yval, result:r});

        }else{
            var r = this.state.x * yval;
            this.setState({y:yval, result:r});
        }
    }

    render(){
        return(
            <>
            <div>
                <input onChange={(e)=>{this.getResultX(e)}}></input>
                <div>{this.state.operation}</div>
                <input onChange={(e)=>{this.getResultY(e)}}></input>
                <div>Result {this.state.result}</div>
            </div>
            
            <div>
                <button onClick={()=>{this.changeOperation()}}>click</button>
            </div>
            </>
        )
    }
}

export default Calculate;