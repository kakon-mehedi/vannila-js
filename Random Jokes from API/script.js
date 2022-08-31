getJokes()




function getJokes(){
    const makeGetRequest = async (url,config) => {
        const res = await fetch(url,config);
        if (!res.ok) {
          const message = `Error: ${res.status} occourd`;
          throw new Error(message);
        }
        data = await res.json();
        return data;
      };
      
      const getData = (url, config) => {
        makeGetRequest(url, config)
          .then((res) => {
      
      
            dadJokefromAPI = res.joke;
    
            document.querySelector(".joke").innerHTML = dadJokefromAPI
      
          }).catch((err) => console.log(err));
      };
      
      config = {
        headers:{
            'Accept': 'application/json'
        }
      }
      getData('https://icanhazdadjoke.com', config)
}