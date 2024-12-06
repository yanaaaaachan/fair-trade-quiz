

document.addEventListener('DOMContentLoaded', () => {
    let BananaAll = document.getElementById('banana_all');
    let MenuList = document.getElementById('menu_list');
    let Menu = document.getElementById('menu');
    BananaAll.src="img/banana_all2.png";
    BananaAll.style.width="80px";
    let IsBananaAll = true;
    BananaAll.addEventListener('click', () => {
        if(IsBananaAll){
        BananaAll.src="img/banana_off2.png";
        BananaAll.style.width="70px";
        MenuList.style.display="block";
        }else{
            BananaAll.src="img/banana_all2.png";
            BananaAll.style.width="80px";
            MenuList.style.display="none";
        }
        IsBananaAll = !IsBananaAll;

    });
});

//スマホ版
function picChangeMobile(){
    let BananaAll = document.getElementById('banana_all');
    BananaAll.src="img/banana_all2.png";
    BananaAll.style.width="80px";
    BananaAll.addEventListener('click', () => {
        BananaAll.src="img/banana_off2.png";
        BananaAll.style.width="70px";
        BananaAll.addEventListener('click', () => {
            BananaAll.src="img/banana_all2.png";
            BananaAll.style.width="80px";
        });
    });

}

//★PC版
// function picChangePC(){
//     let BananaAll = document.getElementById('banana_all');
//     BananaAll.src="img/banana_all2.png";
//     BananaAll.style.width="80px";
//     BananaAll.addEventListener('mouseover', () => {
//         BananaAll.src="img/banana_off2.png";
//         BananaAll.style.width="70px";
//         BananaAll.addEventListener('mouseout', () => {
//             BananaAll.src="img/banana_all2.png";
//             BananaAll.style.width="80px";
//         });
//     });
// }