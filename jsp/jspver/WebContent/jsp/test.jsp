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
                    <td><label for="user_name">�̸�</label></td>
                    <td><input type="text" id="user_name" name="user_name" 
                        placeholder="�̸��� �Է����ּ���"></td>
                </tr>
                <tr>
                    <td><label for="user_id">���̵�</label></td>
                    <td><input type="text" id="user_id" name="user_id" 
                        placeholder="���̵��� �Է� ���ּ���"></td>
                    <td><button class="confirmRepetition">�ߺ�Ȯ��</button></td>
                </tr>
                <tr> <!--��й�ȣ ��Ģ �߰� ����-->
                    <td><label for="user_pw">��й�ȣ</label></td>
                    <td><input type="text" id="user_pw" name="user_pw"
                        placeholder="��й�ȣ�� �Է� ���ּ���"></td>
                </tr>
                <tr>
                    <td><label for="user_genre">�����ϴ� ��ȭ�帣</label></td>
                    <td>
                        <select id="user_genre1">
                            <option>����</option>
                            <option>����</option>
                            <option>�׼�</option>
                            <option selected="selected">�ڹ̵�</option>
                            <option>���</option>
                            <option>���</option>
                            <option>���</option>
                            <option>�̽��͸�</option>
                            <option>��Ÿ��</option>
                            <option>��ť���͸�</option>
                            <option>SF</option>
                        </select>
                        <select id="user_genre2">
                            <option>����</option>
                            <option>����</option>
                            <option>�׼�</option>
                            <option selected="selected">�ڹ̵�</option>
                            <option selected="selected">���</option>
                            <option>���</option>
                            <option>���</option>
                            <option>�̽��͸�</option>
                            <option>��Ÿ��</option>
                            <option>��ť���͸�</option>
                            <option>SF</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label for="user_email">�̸���</label></td>
                    <td><input type="email" id="user_email" name="user_email"
                        placeholder="�̸����� �Է����ּ���"></td>
                </tr>
                <tr>
                    <td><label for="user_number">��ȭ��ȣ</label></td>
                    <td><input type="tel" id="user_number" name="user_number"
                        placeholder="��ȭ��ȣ�� �Է����ּ���"></td>
                </tr>
                <tr>
                    <td><label for="user_bday">�������</label></td>
                    <td><input type="date" id="user_bday"></td>
                </tr>
                <input type="submit" id="ok_btn" value="Ȯ��">
                           
            </table>

        </form>
</body>
</html>