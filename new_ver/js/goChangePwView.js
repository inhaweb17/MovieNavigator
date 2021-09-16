// 비밀번호 바꾸기 버튼을 누를때에 페이지 이동 

const changebtn = document.querySelector('.changepw_btn');

function movePage(){
    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', '/user');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify({ completed: false}))

    xhr.onload = () =>{
        if(xhr.status == 200){
            location.href('../jsp/modifyPwView.jsp');
        }else{
            console.error('ERROR', xhr.status);
            alert('접속에 실패하였습니다 다시 시도해주세요');
            location.reload();
        }
    }
}
changebtn.addEventListener('click',movePage);