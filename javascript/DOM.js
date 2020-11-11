
let tmp1 = '<h1>Hello HTML</h1><p>show me !</p>';
let tmp2 = '<div><label>Name:<input type="text"></label><br><button>Send</button></div>';


window.onload = function() {
    //Code ...
    // window.document.body.innerHTML = tmp2;
        // 找出 id='btn2'的按钮标签元素
    let btn2 = document.getElementById('btn2');
    // 找到之后，绑定click事件，并指向changeLink2 函数
    if (btn2){
        // // 做法一：透过 onclick 事件属性
        // btn2.onclick = changeLink2;
        
        // 做法二：透过HtmlElement.addEventListener('事件名称',函数指标)
        // 优点：可以绑定多个函数指标
        btn2.addEventListener('click',changeLink2);
        btn2.addEventListener('click',clickOK);
    }
    
    
};

function changeLink2() {
    // 找出Link 2 的标签元素
    let elms = document.getElementsByName('a-2');
        // 若找到二个以上时，判断内容是否符合 Link 2 字串
    // if (elms.length > 1) {
    //     for (let i =0; i< elms.length; i++) {
    //         // 判断元素是否存在
    //         if (elms[i].innerText == 'Link 2'){
    //         // 当找到元素后
    //             // 将文字改成 Link to Google
    //             elms[i].innerText = 'Link to Google';
    //             // 将超链接路径改成 https://www.google.com.tw
    //             elms[i].href = 'https://www.google.com.tw'
    //         }
    //     }
    // } else {
    //     if (elms.length ==1) {
    //         if (elms[0].innerText == 'Link 2') {
    //             elms[0].innerText = 'Link to Google';
    //             elms[0].href = 'https://www.google.com.tw';
    //         }
    //     }
        
    // }
    // if (elms.length > 0) {
        for (let i =0; i< elms.length; i++) {
            // 判断元素是否存在
            if (elms[i].innerText == 'Link 2'){
            // 当找到元素后
                // 将文字改成 Link to Google
                elms[i].innerText = 'Link to Google';
                // 将超链接路径改成 https://www.google.com.tw
                elms[i].href = 'https://www.google.com.tw';
            }
        }
    // }
}
function clickOK() {
    window.alert('OK');
}

if (btn2){
    // 做法一：透过 onclick 事件属性
    btn2.onclick = changeLink2;
}