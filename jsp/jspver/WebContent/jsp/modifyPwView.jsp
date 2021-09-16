<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>비밀번호 바꾸기</title>

    <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="../css/reset.css">
  <link rel="stylesheet" href="../css/fonts.css">
  <link rel="stylesheet" href="../css/modifyPwView.css">
</head>
<body>
 <div class="body_container">
        <header>
            <div class="point"></div>
            <div class="logo">
                <strong>Movie</strong>
                <strong>Navigator</strong>
            </div>
            <div class="subtitle">
                비밀번호 바꾸기
            </div>
        </header>

        <article class="pwContainer">
            <section class="pwChangeContainer">
                <div class="changePWContainer">
                    <div class="pwForm">
                        <div class="idContainer">
                            <label for="user_id">나의 아이디 </label>
                            <input type="text" id="user_id" class="user_id" placeholder="아이디 입력">
                        </div>
                        <div class="oldpwContainer">
                            <label for="oldpw">예전 비밀번호</label>
                            <input type="password" class="oldpw" id="oldpw" placeholder="예전 비밀번호 입력">
                        </div>
                        <div class="newpwContainer">
                            <label for="newpw">새 비밀번호</label>
                            <input type="password" class="newpw" id="newpw" placeholder="새로운 비밀번호">
                        </div>

                        <div class="newpwok">
                            <label for="pwok">새 비밀번호 학인</label>
                            <input type="password" class="pwok" id="pwok" placeholder="비밀번호 확인">
                        </div>

                        <button class="pwbutton" type="button">확인</button>
                    </div>
                </div>
            </section>
        </article>
        
    </div>
</body>
<script src="../js/sendPw.js"></script>
</html>