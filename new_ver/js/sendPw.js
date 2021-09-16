const oldpw = document.querySelector('.oldpw');
const newpw = document.querySelector('.newpw');
const pwok = document.querySelector('.pwok');
const pwbtn = document.querySelector('.pwbutton');
const userid = document.querySelector('.user_id');

function submitPW(pw,id){
    const xhr = new XMLHttpRequest();

    pwObj = {
        "user_id" : id,
        "newpassword" : pw
    }

    xhr.open('POST', `/user/${id}`);
    xhr.setRequestHeader('content-type','application/json');
    xhr.send(JSON.stringify(pwObj));

    xhr.onload = () => {
        if(xhr.status == 200){
            alert('비밀번호 수정되었습니다');
            location.href('');
        }
        else{
            console.error('ERROR', xhr.status);
            alert('비밀번호 수정에 실패하였습니다')
            location.reload();
        }
    }

}

function goServer(e){
    const old = oldpw.value;
    const npw = newpw.value;
    const pok = pwok.value; 
    const id = userid.value;

    if (old == npw){
        alert('예전 비밀번호와 같습니다');
        location.reload();
    }

    if (npw != pok){
        alert('비밀번호가 일치 하지 않습니다');
        location.reload();
    }

    if (npw == pok){
        sumbitPW(npw,id);
    } 
}

pwbtn.addEventListener('click', goServer);