<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>검색결과</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/fonts.css">
    <link rel="stylesheet" href="../css/searchView.css">
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
            검색결과
        </div>
        
        <div class="searchContainer">
            <form action="#" method="GET" class="searchForm">
                <input type="text" class="search" placeholder="영화검색">
                <button class="ok_btn" type="submit">
                    <i class="ic-search"></i>
                </button>
            </form>
        </div>
    </header>

    <article class="resultContainer">
        <section>
            <div class="movieResult">
                
            </div>
        </section>
    </article>
</div>
</body>
</html>