// function getData(){
//     $.ajax('ajax.json', {
//         type: 'GET',
//         success: function(data, status, xhr) {
//           console.log(data);
//         },
//         error: function(xhr, status, errorThrown) {
//           console.log(xhr, status, errorThrown);
//         },
//     })
// }
// window.onload = getData;

let number = 1;
let data = [];
const title = document.getElementById('title');
const content = document.getElementById('content');
const video = document.getElementById('video');
const button = document.getElementById('btn');

function getData(callback){
    const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState==4 && request.status==200){
            data.push(request.response);
            callback(data);
        }
    }
    request.open('GET','ajax.json');
    request.responseType='json';
    request.send(null);
}

function changeVideo(){
    getData(function(data){
        console.log(data);
        title.innerHTML = data[0][0].title;
        content.innerHTML = data[0][0].content;
        video.setAttribute('src',data[0][0].url);
        button.addEventListener('click',e=>{
            title.innerHTML = data[0][number].title;
            content.innerHTML = data[0][number].content;
            video.setAttribute('src',data[0][number].url);
            number == 2 ?number = 0: number++;
        })
    });    
}

window.onload = changeVideo;

// $(function(){
//     const button = $("#btn");
//     const cnt = $("#content");
//     const titleArea = $("#title");
//     const videoArea = $("#video");
//     let number = 0;
//     function getData(){
//        return $.ajax('ajax.json',{
//         type: 'GET',
//        })
//     };
//     function changeVideo(){
//         button.click(function(){
//             getData().then(function(data){
//                 console.log(data)
//                 titleArea.html(data[number].title);
//                 cnt.html(data[number].content);
//                 videoArea.attr('src',data[number].url);
//                 number == 2 ? number = 0 : number++;
//             });
//         })
//     };
//     changeVideo();
// })