const handleCategory = async () =>{
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await response.json();

   
    const tabContainer = document.getElementById("tab-container");

    const totalData = data.data;
    totalData .forEach((category) => {

        const div = document.createElement("div");
        div.innerHTML =`
        
        <a onclick="loadNews('${category.category_id}')" class="tab font-lg">${category.category}</a>
        `;

        tabContainer.appendChild(div);
    });

};

const loadNews = async (id) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await response.json();
    

       const cardContainer = document.getElementById("card-container")
       


       data.data.forEach((videos) => {
        console.log(videos);
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="card-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    Shoe!
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div class="card-footer flex justify-between mt-8">
                    <div class="flex">
                        <div>
                            <div class="avatar online">
                                <div class="w-14 rounded-full">
                                    <img src="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6>Hasib</h6>
                    </div>
                    <div class="card-detaild-btn">

                        <button class="inline-block cursor-pointer rounded-md bg-black px-4
                 py-3 text-center text-sm font-semibold uppercase text-white hover:bg-gray-900 ">

                            DETAILS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>  
        `;

        cardContainer.appendChild(div);

    });

};





handleCategory();