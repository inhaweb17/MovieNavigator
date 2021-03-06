<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>MYPAGE</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/myPage.css">
    
    <script src="../js/goHome.js"></script>
    <script src="../js/myPage.js"></script>
    <script src="../js/myReview.js"></script>
    <script src="../js/myLike.js"></script>
    <script src="../js/myPw.js"></script>
</head>
<body>
	<header>
        <div class="logo">MNavigator</div>
    </header>
    <article class="myInfo_container">
        <nav>
            <div class="tab tab0" data-index="0">MY INFO</div>
            <div class="tab tab1" data-index="1">내가 쓴 리뷰</div>
            <div class="tab tab2" data-index="2">좋아요 한 영화</div>
            <div class="tab tab3" data-index="3">비밀번호 수정하기</div>
        </nav>
        <section class="tab-content_container">
            <div class="tab-content myInfo active">
                <form  class="myInfoForm" action="#" method="post">
                    <table>
                        <tr>
                            <td><label for="user_name">이름</label></td>
                            <td><p>사용자 이름</p></td>
                        </tr>
                        <tr>
                            <td><label for="user_id">아이디</label></td>
                            <td><p>사용자 아이디</p></td>
                        </tr>
                        <tr>
                            <td><label for="user_genre">좋아하는 영화 장르</label></td>
                            <td><p>코미디</p> <p>멜로</p></td>
                        </tr>
                        <tr>
                            <td><label for="user_email">이메일</label></td>
                            <td><p>123456@gmail.com</p></td>
                        </tr>
                        <tr>
                            <td><label for="user_number">전화번호</label></td>
                            <td><p>010-0000-0000</p></td>
                        </tr>
                        <tr>
                            <td><label for="user_bday">생년월일</label></td>
                            <td><p>00.01.01</p></td>
                        </tr>
                    </table>
                    <button>수정하기</button>
                </form>
            </div>
            <div class="tab-content hidden review">
                <div class="review_list">
                    
                </div>
            </div>
            <div class="tab-content hidden like">
                <div class="movie_like_list">
    
                </div>
            </div>
            <div class="tab-content hidden pwd">
                <div class="modifyPw">
                    <form action="#" method="POST">
                        <table>
                            <tr>
                                <td>비밀번호</td>
                                <td><input type="password"></td>
                            </tr>
                            <tr>
                                <td>새로운 비밀번호</td>
                                <td><input type="password"></td>
                            </tr>
                            <tr>
                                <td>새로운 비밀번호 확인</td>
                                <td><input type="password"></td>
                            </tr>
                        </table>
                        <input class="ok_btn" type="submit" value="확인">
                    </form>
                </div>
            </div>
            
        </section>
        
    </article>
</body>
</html>