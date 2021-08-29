<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta name="author" content="이자선">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scaleable=no, maximum-scale=1, minimum-scale=1">
    <title>MovieNavigator</title>
    <link rel="stylesheet" href="../css/reset.css" type="text/css">
    <link rel="stylesheet" href="../css/main.css" type="text/css">
    <link rel="stylesheet" href="../css/fonts.css" type="text/css">
    <link rel="stylesheet" href="../css/mainlist.css" type="text/css">
    <script src="../js/mainlist.js"></script>
    <script src="../js/goHome.js"></script>
    <script src="../js/showRankingApi.js"></script>
</head>
<body>
	
	<header>
        <div class="header_container">
            <div id="logo">MNavigator</div>
            <i class="ic-heart" style="font-size: 50px;"></i>
            <button class="login_btn">LOG IN</button>
            <button class="mypage_btn">MY PAGE</button>
        </div>       
    </header>

    <article id="boxoffice">
        <button class="left_btn" type="button"><img src="../img/left_btn.svg" alt="왼쪽 화살표"></button>
        <section class="boxoffice_list">
            <div class="p0">

            </div>
            <div class="p1">

            </div>
            <div class="p2">

            </div>
            <div class="p3">

            </div>
            <div class="p4">

            </div>
        </section>
        <button class="right_btn" type="button"><img src="../img/right_btn.svg" alt="오른쪽 화살표"></button>
    </article>

    <article id="search_box">
        <div>
            <img src="../img/search.svg">
            <input class="movie_search" type="search" placeholder="영화검색하기"/>
            <span><button class="s_submit">검색</button></span>
        </div>
    </article>

    <article id="category">
        <section class="now_link">
            <img src="../img/light.svg" alt="조명">
            <a href="./nowMovie.jsp">#현재 상영작</a>
        </section>
        <section class="genre_link">
            <img src="../img/light.svg" alt="조명">
            <a href="./genreMovie.jsp">#장르별 보기</a>
        </section>
    </article>

    <article id="review_list">
        <section class="review">
            <img src="../img/person.svg" alt="사람이미지">
            <div id="r1">
                <p></p>
                <div class="good">
                    <img alt="좋아요이미지" src="../img/good.svg">
                    <span>35</span>
                </div>
            </div>
        </section>
        <section class="review">
            <img src="../img/person.svg" alt="사람이미지">
            <div id="r2">
                <p></p>
                <div class="good">
                    <img alt="좋아요이미지" src="../img/good.svg">
                    <span>23</span>
                </div>
            </div>
        </section>
        <section class="review">
            <img src="../img/person.svg" alt="사람이미지">
            <div id="r3">
                <p></p>
                <div class="good">
                    <img alt="좋아요이미지" src="../img/good.svg">
                    <span>12</span>
                </div>
            </div>
        </section>
    </article>

    
    
</body>
</html>