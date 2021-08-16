<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="author" name="이자선">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>검색화면</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/searchList.css">
    
    <script src="../js/goHome.js"></script>
    <script src="../js/searchList.js"></script>
</head>
<body>
<header>
        <div class="logo">MNavigator</div>
    </header>

    <article class="search_box">
        <p>#검색 결과</p>
        <section class="searchContainer">
            <img id="searchicon" src="../img/search.svg">
            <input class="movie_search" type="search" placeholder="영화검색하기"/>
            <span><button class="s_submit">검색</button></span>   
        </section>
    </article>

    <article class="result_box">
        
    </article>
</body>
</html>