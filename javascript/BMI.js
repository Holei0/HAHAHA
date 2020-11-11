// window.onload = function () {


// };

// window.onload = windowOnload;
// function windowOnload(){
//     let _elmBtnCompute = document.getElementById('btnCompute');

// }   
    
//     // 设定按钮绑定click事件的处理函数
//     _elmBtnCompute.onclick = function () {
//         // 取得UI元素
//         let _elmWeight = document.getElementById('weight');
//         let _elmHeight = document.getElementById('height');
//         let _elmBMI = document.getElementById('bmi');
//         let _elmMessage = document.getElementById('message');
//         // 将体重储存到变数 _weight
//         let _weight = _elmWeight.value;
//         // 将身高储存到变数 _height
//         let _height = _elmHeight.value;
//         // 体脂率计算（公式：体重/身高^2）
//         let _bmi = parseFloat(_weight)/Math.pow( parseFloat(_height/100),2);
//         // 判断体脂率范围
//         let _message = '';
//         if (_bmi >= 18.5 && _bmi < 24){
//             _message = '标准';
//         } else if (_bmi >= 24 && _bmi < 27){
//             _message = '过重';
//         }else if (_bmi >= 27){
//             _message = '肥胖';
//         } else{
//             _message = '过轻';
            
//         }
//         //显示其咨询
//         _elmBMI.innerText = _bmi;
//         _elmMessage.innerText = _message;


// }


// window.addEventListener('load',windowOnload);
// window.addEventListener('load',function () {
// })


window.onload = windowOnload;
function windowOnload(){
    let _elmBtnCompute = document.getElementById('btnCompute');
    _elmBtnCompute.onclick = btnComputeOnload;
}
function btnComputeOnload(){
    // 取得UI元素
    let _elmWeight = document.getElementById('weight');
    let _elmHeight = document.getElementById('height');
    let _elmBMI = document.getElementById('bmi');
    let _elmMessage = document.getElementById('message');
    // 将体重储存到变数 _weight
    let _weight = _elmWeight.value;
    // 将身高储存到变数 _height
    let _height = _elmHeight.value;
    // 体脂率计算（公式：体重/身高^2）
    let _bmi = parseFloat(_weight)/Math.pow( parseFloat(_height/100),2);
    // 判断体脂率范围
    let _message = '';
    if (_bmi >= 18.5 && _bmi < 24){
        _message = '标准';
        _bgcolor = 'color-2';
    } else if (_bmi >= 24 && _bmi < 27){
        _message = '过重';
        _bgcolor = 'color-3';
    }else if (_bmi >= 27){
        _message = '肥胖';
        _bgcolor = 'color-4';
    } else{
        _message = '过轻';
        _bgcolor = 'color-1';
        
    }
    // 显示其咨询
    _elmBMI.innerText = _bmi.toFixed(2);
    _elmMessage.className = '';
    // _elmMessage.className = _bgcolor;  没办法个别删除，只能添加
    _elmMessage.classList.add(_bgcolor);
    _elmMessage.innerText = _message;

}