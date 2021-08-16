<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="author" content="이자선">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>아이디, 비밀번호 찾기</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/idPw.css">
    <script src="../js/goHome.js"></script>
</head>
<body>
	<div class="body__container">
    <header>
        <img src="../img/light.svg">
        <div class="logo">MNavigator</div>
    </header>

    <article class="idFind">
        <p>아이디 찾기</p>
        <section class="id_container">
            <form class="idFindform" action="#" method="POST">
                <table>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" id="user_name" name="user_name"></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type="email" id="user_id" name="user_id"></td>
                    </tr>
                </table>
                <input type="submit" class="ok_btn1" value="확인">
            </form>
            <div class="idResult">
                <p>아이디:</p>
                <p class="result">아이디결과</p>
            </div>
        </section>
    </article>

    <article class="pwFind">
        <p>비밀번호 찾기</p>
        <section class="pw_container">
            <form class="pwFindform" action="#" method="POST">
                <table>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" id="user_id" name="user_id"></td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td><input type="tel" id="user_number" name="user_number" placeholder="-없이 입력해주세요"></td>
                    </tr>
                </table>
                <input type="submit" class="ok_btn2" value="확인"> 
            </form>
            <div class="pwResult">
                <p>비밀번호:</p>
                <p class="result">비밀번호 결과 표기</p>
            </div>
        </section>
        
    </article>
</div>
</body>
</html>