<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="이자선">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/fonts.css">
    <link rel="stylesheet" href="../css/registerView.css">

</head>
<body>
	<div class="body_container">

    <header>
        <div class="point"></div>
        <div class="logo">
            <strong>Movie</strong>
            <strong>Navigator</strong>
        </div>
        <div class="title">회원가입</div>
    </header>

    <article class="JoinFormContainer">
        <section class="JoinForm">
            <form class="Join">

                <div class="nameForm">
                    <label for="user_name" class="namelabel">이름</label>
                    <input type="text" class="user_name" id="user_name" placeholder="이름">
                </div>

                <div class="idForm">
                    <label for="user_id" class="idlabel">아이디</label>
                    <input type="text" class="user_id" id="user_id" placeholder="아이디">
                    <button class="confirm">중복확인</button>
                </div>

                <div class="pwdForm">
                    <label for="user_pwd" class="pwdlabel">비밀번호</label>
                    <input type="password" class="user_pwd" id="user_pwd" placeholder="비밀번호">
                </div>

                <div class="emailForm">
                    <label for="user_email" class="emaillabel">이메일</label>
                    <input type="email" class="user_email" id="user_email" placeholder="이메일">
                </div>

                <div class="telForm">
                    <label for="user_tel" class="tellabel">전화번호</label>
                    <input type="tel" class="user_tel" id="user_tel" placeholder="전화번호">
                </div>

                <div class="dayForm">
                    <label for="user_date" class="datelabel">생년월일</label>
                    <input type="date" class="user_date" id="user_date" placeholder="생년월일">
                </div>

                <button type="submit" class="submit_btn">확인</button>
            </form>
        </section>
    </article>
</div>
</body>
</html>