// 物件導向事件驅動程式撰寫方法
// 當網頁載入完成(包含DOM元素建構完成)之後
// 最佳進入點
window.onload= function(){
    // this →window
    this.console.log('windowonload');
    // 找出“送出鈕” 
    // 寫法一
    // let elmBtnSubmit;
    // elmBtnSubmit = document.querySelector('#btnSubmit');
    // // querySelector：找到的第一個
    // 寫法二 let →指派記憶體寫法
    let elmBtnSubmit=document.querySelector('#btnSubmit');
    console.log(elmBtnSubmit);
    if (elmBtnSubmit)
    {
        this.console.log('find #btn Submit');
        // onlick 當使用者使用時
        elmBtnSubmit.onclick=function(){
            console.log('elmBtnSubmit.onclick');
            // 找出兩個群組選項
            let elmBuy1,elmBuy2;
            elmBuy1 = document.querySelector('input[name="preference"]:checked');
            elmBuy2 = document.querySelector('input[name="preference2"]:checked');
            
            console.log(elmBuy1,elmBuy2);

            if(elmBuy1 && elmBuy2){
                // 顯示提示對話方塊
            // window.alter只有確定鍵 window.confirm會出現確定和取消的選項
            window.confirm(
                '流行皮件選購確認：\n'+
                '\n'+
                '●真皮皮包：'+elmBuy1.value+'\n'+
                '●真皮短夾：'+elmBuy2.value
            )
            };

            

        };
        
    }

};