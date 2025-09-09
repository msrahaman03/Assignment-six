




const leveContiner = document.getElementById('leveContiner')
const plantContiner = document.getElementById('plantContiner')
const loadcatgorie = ()=>{
          fetch("https://openapi.programming-hero.com/api/categories")
          .then((res) => res.json())
          .then(data =>{
                    const categories = data.categories
                  //   console.log(data.categories)
                  
                  sowcatygore(categories);
          })

          .catch(err => {
                    console.console.log(err);
                    
          })

};

const sowcatygore = (categories) =>{
        categories.forEach(cat => {
                          leveContiner.innerHTML  += `
                          <li id="${cat.id}" class="w-[150px] hover:bg-green-500 cursor-pointer ">${cat.category_name}</li>
                  `
       });
     leveContiner.addEventListener('click', (e) =>
             {

                  const allLi =document.querySelectorAll('li')
                  allLi.forEach(li =>{
                        li.classList.remove('bg-green-500')
                  })
            if(e.target.localName === 'li'){
                  // console.log(e.target.id)
                  e.target.classList.add('bg-green-500')
                  loadTreeBycat(e.target.id)
            };
      });

};  

const loadTreeBycat = (treeId) => {
      console.log(treeId)
      fetch(`https://openapi.programming-hero.com/api/category/${treeId}`)
      .then(res =>res.json())
      .then(data =>{
            showterrscat(data.plants)
      })

.catch(err =>{
      console.log(err)
})

const showterrscat = (plants) =>{

      console.log(plants)
       plantContiner.innerHTML="";
      plants.forEach(plant =>{
            plantContiner.innerHTML += `
      <div class="w-[300px] border border-gray-200 m-[8px]">
            <div>
                  <img src="${plant.image}"/>
            </div>

            <div class="p-2">
                  <h2 class="font-bold">${plant.name}</h2>
                  
                  <p>${plant.description}</p>
                <div class='flex justify-between'>
            
                        <button class='btn rounded-2xl bg-green-200'>${plant.category}</button>
                        <p>BD:${plant.price}</p>
                        
                  </div>
                 
            </div>
             <button class="btn btn-wide m-[10px]  mx-auto rounded-2xl bg-green-600 text-[white]">Add to Cart</button>
        </div>
            `

      })

}

}


loadcatgorie();
                  

  




