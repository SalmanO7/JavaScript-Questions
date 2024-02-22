// given an array of object with "id" properties, use the "find" method to locate an object 
// with a sepcific "id" and update its "status" propertues to complicated

// Example
 
const list = [
    {id:1 , mission:"A", status: "pending"},
    {id:2 , mission:"B", status: "in-progress"},
    {id:3 , mission:"C", status: "pending"},
    {id:4 , mission:"D", status: "complicated"},
    {id:5 , mission:"E", status: "pending"}
];
const targetid = 2;
const foundMission = list.find(li => li.id=== targetid);
if(foundMission){
    foundMission.status = "complicated";
    console.log(list)
}
else{
    console.log("list not found")
}