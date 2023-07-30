function submitData(name, email) {
    const data = {
      name: 'Steve',
      email: 'steve@steve.com'
    };
  
return fetch('http://localhost:3000/users',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
})
      .then(response => response.json())
      .then(data => {
        const newId = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        let message = 'Unauthorized Access'
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  
  
 
