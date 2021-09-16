<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>영화 상세정보</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/fonts.css">
    <link rel="stylesheet" href="../css/detailView.css">

</head>
<body>
<div class="body_container">
    <header>
        <div class="point"></div>
        <div class="logo">
            <strong>Movie</strong>
            <strong>Navigator</strong>
        </div>
        <div class="title">
            영화상세정보
        </div>
    </header>

    <article class="movieInfoContainer">
        <section class="movieInfo">
            <div class="movieResult">

            </div>
        </section>
    </article>

    <article class="moviePointContainer">
        <section class="moviePoint">
            <div class="sub_title">
                #리뷰남기기
            </div>

            <div class="starForm">
                <div class="starContainer">

                </div>
                
                <h2 class="pointContainer">

                </h2>

                <div class="review">
                    <input type="text" class="review_input" placeholder="리뷰를 남겨주세요">
                </div>
                <div class="ok_btn">
                    <button class="review_submit" type="button">입력</button>
                </div>
            </div>
        </section>
    </article>

    <article class="reviewContainer">
        <section class="reviewInfo">
            <div class="reivewtitle">
                #리뷰리스트
            </div>
            <div class="review_list">

            </div>
        </section>
    </article>
        
</div>
</body>
<script src="../js/scoreGrade.js"></script>
</html>