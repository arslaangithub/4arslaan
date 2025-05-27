import React,{Component} from "react";
class X extends Component{
    constructor(props){
        super(props);
        this.state={count:1};
        console.log("Initialized");
    }
    static getDerivedStateFromProps(props,state){
        console.log("synced");
        
    }
    componentDidMount(){
        console.log("Mounted");
    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log("checked");
        return true;
        
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("captured");
     
    }
    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log("updated");
    }
    componentWillUnmount(){
        console.log("Unmounted")
    }
    

    render(){
        return(
            <div>
            <p>Counts : {this.state.count}</p>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>inc</button>
            </div>
        )
    }

}
export default X;