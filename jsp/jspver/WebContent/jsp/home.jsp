<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="author" content="이자선">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>MNavigator</title>

	<link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/fonts.css">
    <link rel="stylesheet" href="../css/mainlist.css">
    
</head>
<body>
	<div class="body_container">
        <header>
            <section class="searchbox">
                <form action="#" method="GET">
                    <input class="search" id="search" type="search" placeholder="검색">
                    <label for="search">
                        <button type="submit" class="search_btn" alt="검색버튼">
                            <i class="ic-search"></i>
                        </button>
                        
                    </label> 
                </form>
            </section>

            <section class="userbox">
                <div class="log in">
                    	login
                </div>
                <div class="user in">
                    	회원가입 
                </div>
                <div class="mypage">
                    	mypage
                </div>
            </section>

        </header>

        <article class="movie-rank">
            <section class="movieList">

                <button class="left_btn">
                    <i class="ic-left_btn_new"></i>
                </button>

                <div class="movies1">
                    <div class="p0"></div>
                    <div class="p1"></div>
                </div>

                <div class="logo">
                    <strong>
                        Movie
                    </strong>
                    <strong>
                        Navigator
                    </strong>
                </div>

                <div class="movies2">
                    <div class="p2"></div>
                    <div class="p3"></div>
                </div>

                <button class="right_btn">
                    <i class="ic-right_btn_new"></i>
                </button>
            </section>
        </article>

        <article class="category">

            <section class="categorybox">

                <div class="readymovie">
                    <i class="ic-now_movie"></i>
                    <div class="readymovie-link">
                        <a href="" alt="개봉예정작">#개봉예정작</a>
                    </div>
                </div>

                <div class="genremovie">
                    <i class="ic-genre_movie"></i>
                    <div class="genremovie-link">
                        <a href=""alt="장르별 보기">#장르별보기</a>
                    </div>
                </div>

            </section>
            
        </article>

        <article class="review-list">
            <section class="reviewbox">
                <div class="reviewtitle">
                    #실시간리뷰
                </div>
                <div class="reviews">
                    <div>
                        <i class="ic-watcher"></i>
                    <div class="r0"></div>
                    </div>
                    <div>
                        <i class="ic-watcher"></i>
                    <div class="r1"></div>
                    </div>
                    <div>
                        <i class="ic-watcher"></i>
                    <div class="r2"></div>
                    </div>
                    
                </div>
            </section>
        </article>

        <footer>
            

        </footer>
        <script src="../js/home.js"></script>
        <script src="../js/showRanking.js"></script>
    </div>
</body>
</html>