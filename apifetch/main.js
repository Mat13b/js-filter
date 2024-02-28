async function fetchuser() { 
    const userresponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const userdata = await userresponse.json();
 
    console.log(userdata);
    console.log(userdata[0].name);

    userdata.forEach(i => {
        console.log(i.name)
        
    });
    
    }


    fetchuser()

