<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<form action="#" method="post">
            <table>
                <tr>
                    <td><label for="user_name">이름</label></td>
                    <td><input type="text" id="user_name" name="user_name" 
                        placeholder="이름을 입력해주세요"></td>
                </tr>
                <tr>
                    <td><label for="user_id">아이디</label></td>
                    <td><input type="text" id="user_id" name="user_id" 
                        placeholder="아이디을 입력 해주세요"></td>
                    <td><button class="confirmRepetition">중복확인</button></td>
                </tr>
                <tr> <!--비밀번호 규칙 추가 예정-->
                    <td><label for="user_pw">비밀번호</label></td>
                    <td><input type="text" id="user_pw" name="user_pw"
                        placeholder="비밀번호를 입력 해주세요"></td>
                </tr>
                <tr>
                    <td><label for="user_genre">좋아하는 영화장르</label></td>
                    <td>
                        <select id="user_genre1">
                            <option>범죄</option>
                            <option>공포</option>
                            <option>액션</option>
                            <option selected="selected">코미디</option>
                            <option>멜로</option>
                            <option>드라마</option>
                            <option>사극</option>
                            <option>미스터리</option>
                            <option>판타지</option>
                            <option>다큐멘터리</option>
                            <option>SF</option>
                        </select>
                        <select id="user_genre2">
                            <option>범죄</option>
                            <option>공포</option>
                            <option>액션</option>
                            <option selected="selected">코미디</option>
                            <option selected="selected">멜로</option>
                            <option>드라마</option>
                            <option>사극</option>
                            <option>미스터리</option>
                            <option>판타지</option>
                            <option>다큐멘터리</option>
                            <option>SF</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label for="user_email">이메일</label></td>
                    <td><input type="email" id="user_email" name="user_email"
                        placeholder="이메일을 입력해주세요"></td>
                </tr>
                <tr>
                    <td><label for="user_number">전화번호</label></td>
                    <td><input type="tel" id="user_number" name="user_number"
                        placeholder="전화번호를 입력해주세요"></td>
                </tr>
                <tr>
                    <td><label for="user_bday">생년월일</label></td>
                    <td><input type="date" id="user_bday"></td>
                </tr>
                <input type="submit" id="ok_btn" value="확인">
                           
            </table>

        </form>
</body>
</html>