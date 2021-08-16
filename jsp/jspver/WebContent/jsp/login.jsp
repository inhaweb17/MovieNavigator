<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="author" content="이자선">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/login.css">
    <script src="../js/goHome.js"></script>
    <script src="../js/login.js"></script>
</head>
<body>
<header>
        <div class="logoContainer">
            <div class="logo">MNavigator</div>
        </div>       
    </header>

    <article class="inputInfo">
        <form action="#" method="POST">
            <div class="idContainer">
                <label for="id">ID</label>
                <input type="text" name="id" id="id">
            </div>
            <div class="pwContainer">
                <label for="pw">PW</label>
                <input type="text" name="pw" id="pw">
            </div>
            <input type="submit" value="로그인" class="login_btn">
        </form>
    </article>

    <footer>
        <a href="./memberJoin.html">회원가입</a>
        <a href="./idPw.html">아이디/비밀번호찾기</a>
    </footer>
</body>
</html>