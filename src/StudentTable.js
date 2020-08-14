import React from 'react';
import Table from './Table';
import {Link} from 'react-router-dom';
import './studentTable.css';

class StudentTable extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        const data = require("./student.json");
        let std=[];
        let marks = [];
        function calculate()
        {
        data.student.forEach(item =>{
            let m1 = parseInt(item.marks.Maths);
            let m2 = parseInt(item.marks.English)
            let m3 = parseInt(item.marks.Science)
            let status;

            if((m1>=20 && m1<=50) && (m2>=20 && m2<=50) && (m3>=20 && m3<=50))
            {
                status = "Pass"
            }
            else{
                status = "Fail"
            }

              let  sum = m1 + m2 + m3;
            
               let std1={
                    name:item.name,
                    marks:sum,
                    status: status,
                    roll : item.rollNumber
                }
              std.push(std1)
              marks.push(std1.marks)
            
        })
        }
         
            let max;
            function findmax(marks){
            max = marks.reduce(function(a,b){
               return Math.max(a,b)
           })}

           function sortByNames(std){
           std.sort(function(a,b){
               if(a.name < b.name)
                    return -1
                if(a.name > b.name)
                    return 1
                return 0
           })}
          
           function updateData(max){
           std.map( (item) => {
                if(item.marks == max){
                    item.status = "Topper"
                }
                item.name = item.name[0].toUpperCase() + item.name.slice(1);
            })
            }
           
            calculate()
            findmax(marks)
            sortByNames(std)
            updateData(max)

            const table_data =std.map(function(item){ 

            if(item.status === "Topper"){
                return  <Table green={true} red={false} item={item}/>
            }
            if(item.status === "Fail"){
                return  <Table green={false} red={true} item={item}/>
            }
            return <Table green={false} red={false} item={item}/>
            });
            
        return(
        <div>
            
            <table>
                <tr>
                    <th colspan="4">Students Records</th>
                </tr>
                <tr className="thead">
                <th>Name</th>
                <th>Roll number</th>
                <th>Marks</th>
                <th>Status</th>
                </tr>
                {table_data}
            </table>

            <Link to="/register"> <button type="button" id="btnreg" className="btn btn-primary">Register</button></Link>
        </div>
       
        );
    }
}

export default StudentTable;