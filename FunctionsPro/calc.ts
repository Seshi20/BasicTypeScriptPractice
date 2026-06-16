function ageCheck() : Promise<string> 
{
    return new Promise((resolve, reject) => {
        let age : number =18;
        if (age >= 18) {
            resolve(age.toString());
        } else {
            reject(new Error("Age is not sufficient"));
        }
    });
}
async function ageValidate() : Promise<void>
{
   const eligible : string = await ageCheck();
   console.log("Age is " + eligible + ", you are eligible.");
}