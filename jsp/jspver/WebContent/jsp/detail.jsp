<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="author" content="이자선">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>영화 상세정보</title>
    <link rel="stylesheet" href="../css/reset.css" type="text/css">
    <link rel="stylesheet" href="../css/main.css" type="text/css">
    <link rel="stylesheet" href="../css/detail.css" type="text/css">
    
    <script src="../js/goHome.js"></script>
    <script src="../js/detail.js"></script>
    <script src="../js/rating.js"></script>
</head>
<body>
	<header>
        <div class="logo">MNavigator</div>
    </header>
    <article class="container">
        <section class="movieContainer">
                <!--poster이미지 들어갈 곳 -->
            <div class="mposter"> </div>
                <!--영화 상세 정보들어갈 곳-->
            <div class="movieInfoContainer"></div>
            <div class="gradeInfo">
                <div class="grade"> <!--해당 영화 평점 표기할 곳-->
                    
                </div>
                <div class="like"> <!--영화 추천 수 표기 할 곳-->
                    
                </div>
            </div>

            <div class="starGrade">
                <div class="stars"> <!--별 5개 모양이 표기 될 곳-->

                </div>
                <div class="point"> <!--별에 따라서 점수가 기록 될 곳-->
                    0
                </div>
                    <!--해당 버튼 클릭시 별점저장-->
                <button class="submitGrade">별점 주기</button>
                <button class="submitLike">추천 하기</button>
            </div>
        </section>
    
        <section class="reviewContainer">
            <div class="reviewInput">
                <form class="reivew">
                    <label for="reviewText">리뷰 작성하기</label>
                    <input type="text" id="reviewText" name="reviewText">
                    <input type="submit" class="reviewBtn" value="입력">
                </form>
                <div class="sort_container">
                    <label for="sort">리뷰정렬</label>
                    <select id="sort">
                        <option>추천순</option>
                        <option>최신순</option>
                    </select>
                </div>
            </div>
                <div class="reviewList">
                    <div class="review">리뷰내용 예제</div>
                    <div class="reivew">리뷰</div>
                </div>
        </section>

    </article>
</body>
</html>