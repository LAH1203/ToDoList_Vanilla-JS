# To Do List by Vanilla JS
#### To-do list by Vanilla Javascript

[웹페이지 링크](https://lah1203.github.io/ToDoList_VanillaJS/)

### 목차
> 1. [구현 목록](#구현-목록)
> 2. [특징](#특징)
> 3. [캡처 이미지](#캡처-이미지)
> 4. [참고 URL](#참고-url)

## 구현 목록
### 현재 날짜(연, 월, 일)와 시간(시, 분, 초)
### 배경 이미지
- images 폴더 내에서 랜덤으로 바뀜
### 이름
- 이름 작성 후 enter 입력 시 Hello, {이름}으로 바뀌며 이름 초기화 버튼이 나타남
- local에 저장되므로 새로고침해도 초기화되지 않고 남아있음
- 이름 초기화 버튼 클릭 시 local에 저장된 이름 초기화
### 할 일
- 할 일 작성 후 enter 입력 시 밑에 자동으로 내용과 삭제 버튼 나타남
- 이름과 마찬가지로 local에 저장되므로 새로고침해도 초기화되지 않고 남아있음
- ❌ 클릭 시 해당 할 일 삭제됨
### 현재 위치 기준 날씨
- OpenWeatherMap API를 받아와 날씨 및 온도, 위치, 아이콘 출력

## 특징
- 본인 위치에 따라 달라지는 아이콘과 온도, 위치
- 컴퓨터에 로컬로 이름과 할 일이 저장되어 새로고침해도 그대로 남아있다는 것!

## 캡처 이미지
### 초기 화면(이름X, 할일X)
![이름X 캡처](https://user-images.githubusercontent.com/57928612/106730825-22ac4a00-6652-11eb-893b-74babc480c01.png)
### 이름 입력 화면(이름O, 할일X)
![이름O 캡처](https://user-images.githubusercontent.com/57928612/106730460-c3e6d080-6651-11eb-89a3-fa19a266150e.png)
### 이름, 할일 입력 화면(이름O, 할일O)
![이름O할일O 캡처](https://user-images.githubusercontent.com/57928612/106731067-699a3f80-6652-11eb-97b1-3f01ed2c6cde.png)
### 이름, 할일 입력 작은 화면(이름O, 할일O, 작은 화면)
![작은 화면 캡처](https://user-images.githubusercontent.com/57928612/106731598-fe9d3880-6652-11eb-9752-0d21a6eb6019.png)

## 참고 URL
1. [ul, li에서 기호, 점 없애기](https://dev-mht.tistory.com/139)
2. [버튼 배경 투명하게 만들기](https://devnauts.tistory.com/17)
3. [OpenWeatherMap](https://openweathermap.org/)
