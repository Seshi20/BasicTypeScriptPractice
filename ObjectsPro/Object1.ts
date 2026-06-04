interface empdata
{
    empid : number,
    empname : string,
    emprole : string,
    isSalary : boolean,
    empex : number,
    empdomain : string,
    empadd :
            {
                estreet : string,
                hno : string,
                location : number
            }

}

let empinfo : empdata =
{
    empid : 6743,
    empname : "Seshi",
    emprole : "Technical Spl",
    isSalary : true,
    empex : 32,
    empdomain : "insurance",
    empadd :
    {
        estreet : "Alka",
        hno : "203",
        location : 500089 
    }
}
//console.log(empinfo)

console.log("The emp domain name is : "+empinfo.empdomain)
//add element to original object

empinfo.office = "DLF"

console.log("empex : ",empinfo.empex)
console.log("empex" in empinfo)
console.log(Object.entries(empinfo))
console.log("Type of Emp info data : ",typeof empinfo.empadd)