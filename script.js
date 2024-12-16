

document.addEventListener('DOMContentLoaded', () => {
    let BananaAll = document.getElementById('banana_all');
    let MenuList = document.getElementById('menu_list');
    let Menu = document.getElementById('menu');
    BananaAll.src="banana_all2.png";
    BananaAll.style.width="80px";
    let IsBananaAll = true;
    BananaAll.addEventListener('click', () => {
        if(IsBananaAll){
        BananaAll.src="banana_off2.png";
        BananaAll.style.width="70px";
        MenuList.style.display="block";
        }else{
            BananaAll.src="banana_all2.png";
            BananaAll.style.width="80px";
            MenuList.style.display="none";
        }
        IsBananaAll = !IsBananaAll;

    });

    let StartBtn=document.getElementById("start_btn");
    (StartBtn)=>{
        let APP={
            data:[],
            init(){
                APP.addEventListeners();
            },
            addEventListeners(){
               StartBtn.addEventListener("click",APP.createData) 
            },
            createData(e){
                e.preventDefault();
                let formData=new FormData(StartBtn)
                APP.data.push(Array.form(formData.values()));
                console.log(APP.data)
            }
        };
        
        document.addEventListener("DOMContentLoaded",APP.init);

    }
});

//スマホ版
function picChangeMobile(){
    let BananaAll = document.getElementById('banana_all');
    BananaAll.src="banana_all2.png";
    BananaAll.style.width="80px";
    BananaAll.addEventListener('click', () => {
        BananaAll.src="banana_off2.png";
        BananaAll.style.width="70px";
        BananaAll.addEventListener('click', () => {
            BananaAll.src="banana_all2.png";
            BananaAll.style.width="80px";
        });
    });

}


//★PC版
// function picChangePC(){
//     let BananaAll = document.getElementById('banana_all');
//     BananaAll.src="banana_all2.png";
//     BananaAll.style.width="80px";
//     BananaAll.addEventListener('mouseover', () => {
//         BananaAll.src="banana_off2.png";
//         BananaAll.style.width="70px";
//         BananaAll.addEventListener('mouseout', () => {
//             BananaAll.src="banana_all2.png";
//             BananaAll.style.width="80px";
//         });
//     });
// }