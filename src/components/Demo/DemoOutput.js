import MyPara from "./MyPara";
const DemoOutput = (props) => {
  console.log("DemoOutPut is running");
  return <MyPara>{props.show ? "This is new" : ""}</MyPara>;
};

export default DemoOutput;
