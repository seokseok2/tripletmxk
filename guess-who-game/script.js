// 인물 데이터 (이미지 경로 포함)
const historicalFigures = [
    { name: "알베르트 아인슈타인", hint: "상대성 이론을 개발한 과학자", image: "images/einstein.jpg" },
    { name: "마리 퀴리", hint: "노벨상을 두 번 받은 최초의 인물", image: "images/curie.jpg" },
    { name: "레오나르도 다빈치", hint: "모나리자를 그린 예술가", image: "images/davinci.jpg" },
    { name: "아이작 뉴턴", hint: "중력의 법칙을 발견한 과학자", image: "images/newton.jpg" },
    { name: "스티브 잡스", hint: "애플 공동 창립자", image: "images/jobs.jpg" },
    { name: "일론 머스크", hint: "테슬라와 스페이스X의 CEO", image: "images/musk.jpg" },
    { name: "윌리엄 셰익스피어", hint: "영국의 극작가, '햄릿' 작가", image: "images/shakespeare.jpg" },
    { name: "오프라 윈프리", hint: "미국의 방송인, '오프라 쇼' 진행자", image: "images/oprah.jpg" },
    { name: "간디", hint: "인도의 독립을 이끈 지도자", image: "images/gandhi.jpg" },
    { name: "마틴 루터 킹 주니어", hint: "'I Have a Dream' 연설로 유명한 인권 운동가", image: "images/king.jpg" },
    { name: "넬슨 만델라", hint: "남아프리카 공화국의 첫 흑인 대통령", image: "images/mandela.jpg" },
    { name: "아멜리아 에어하트", hint: "첫 대서양 횡단 여성 비행사", image: "images/earhart.jpg" },
    { name: "프리다 칼로", hint: "멕시코의 유명 화가", image: "images/kahlo.jpg" },
    { name: "이순신", hint: "임진왜란의 영웅, 한산대첩 승리", image: "images/leesoonshin.jpg" },
    { name: "세종대왕", hint: "훈민정음을 창제한 왕", image: "images/kingsejong.jpg" },
    { name: "장영실", hint: "조선의 과학자, 물시계와 측우기 발명", image: "images/jangyoungsil.jpg" },
    { name: "신사임당", hint: "조선 중기의 여성 예술가, 율곡 이이의 어머니", image: "images/shinsaimdang.jpg" },
    { name: "이황", hint: "성리학자, 퇴계라는 호로 불림", image: "images/leehwang.jpg" },
    { name: "안중근", hint: "독립운동가, 이토 히로부미 저격", image: "images/ahnjoonggeun.jpg" },
    { name: "김구", hint: "대한민국 임시정부의 지도자", image: "images/kimkoo.jpg" },
    { name: "유관순", hint: "3.1 운동을 이끈 여성 독립운동가", image: "images/yugwansoon.jpg" },
    { name: "김홍도", hint: "조선의 풍속화가, 단원이라는 호로 유명", image: "images/kimhongdo.jpg" },
    { name: "이성계", hint: "조선의 창업자, 조선 태조", image: "images/leeseonggye.jpg" },
    { name: "장보고", hint: "해상 무역과 해군을 이끌었던 통일 신라의 장군", image: "images/jangbogo.jpg" },
    { name: "단군", hint: "고조선을 세운 신화적 인물", image: "images/dangun.jpg" },
    { name: "주몽", hint: "고구려의 시조", image: "images/jumong.jpg" },
    { name: "온조", hint: "백제의 시조", image: "images/onjo.jpg" },
    { name: "박혁거세", hint: "신라의 시조", image: "images/parkhyeokgeose.jpg" },
    { name: "광개토", hint: "고구려를 확장시킨 대왕", image: "images/gwanggaeto.jpg" },
    { name: "이사부", hint: "우산국을 정벌한 신라의 장군", image: "images/leesabu.jpg" },
    { name: "백결", hint: "신라의 대악사", image: "images/baekgyeol.jpg" },
    { name: "의자왕", hint: "백제의 마지막 왕", image: "images/uijawang.jpg" },
    { name: "계백", hint: "백제의 장군, 황산벌 전투에서 싸움", image: "images/gyebaek.jpg" },
    { name: "김관창", hint: "황산벌 전투에서 싸운 신라의 화랑", image: "images/kimkwanchang.jpg" }
    // 다른 역사 인물 추가
];

const celebrities = [
    { name: "김태희", hint: "드라마 '아이리스'에 출연한 배우", image: "images/kimtaehee.jpg" },
    { name: "공유", hint: "드라마 '도깨비'에서 도깨비 역을 맡은 배우", image: "images/gongyoo.jpg" },
    { name: "유재석", hint: "대한민국의 국민 MC, 무한도전 출연", image: "images/yujaeseok.jpg" },
    { name: "강호동", hint: "대한민국의 예능 MC, 무릎팍도사 진행", image: "images/kanghodong.jpg" },
    { name: "쥴리", hint: "KISS OF LIFE 멤버, 리드 보컬", image: "images/julie.jpg" },
    { name: "나띠", hint: "KISS OF LIFE 멤버, 그룹의 메인 댄서", image: "images/natty.jpg" },
    { name: "벨", hint: "KISS OF LIFE 멤버, 래퍼", image: "images/belle.jpg" },
    { name: "하늘", hint: "KISS OF LIFE 멤버, 보컬", image: "images/haneul.jpg" },
    { name: "카리나", hint: "에스파의 리더, 메인 댄서", image: "images/karina.jpg" },
    { name: "윈터", hint: "에스파의 서브보컬, 비주얼 멤버", image: "images/winter.jpg" },
    { name: "지젤", hint: "에스파의 메인 래퍼", image: "images/giselle.jpg" },
    { name: "닝닝", hint: "에스파의 메인 보컬", image: "images/ningning.jpg" }
    // 다른 연예인 추가
];

let people = []; // 게임에 사용될 인물 배열

function selectCategory(category) {
    if (category === 'history') {
        people = historicalFigures;
    } else if (category === 'celebrity') {
        people = celebrities;
    }

    // 게임 시작 화면으로 이동
    document.getElementById("game-container").innerHTML = `
        <label for="question-count">문제 수 선택: </label>
        <select id="question-count">
            <option value="5">5문제</option>
            <option value="10">10문제</option>
            <option value="15">15문제</option>
            <option value="20">20문제</option>
        </select>
        <button onclick="startGame()">게임 시작</button>
        <p id="hint" style="display: none;"></p>
        <img id="person-image" src="" alt="힌트 이미지" style="display: none;">
        <input type="text" id="answer" placeholder="정답을 입력하세요" style="display: none;">
        <button id="submit-answer" style="display: none;" onclick="checkAnswer()">확인</button>
        <button id="skip-question" style="display: none;" onclick="skipQuestion()">스킵</button>
        <p id="result"></p>
        <p id="timer" style="display: none;">남은 시간: 10초</p>
    `;
}

let currentPerson;
let usedPeople = [];
let score = 0;
let questionCount = 5;
let questionNumber = 0;
let timer;
let timeLeft = 10; //기본 시간 설정

function startGame() {
    // 문제 수 및 시간 제한 선택
    questionCount = parseInt(document.getElementById("question-count").value);
    timeLimit = parseInt(document.getElementById("time-limit").value);
    
    //게임 초기화
    usedPeople = [];
    score = 0;
    questionNumber = 0;

    // 화면 요소 표시
    document.getElementById("hint").style.display = "block";
    document.getElementById("person-image").style.display = "block";
    document.getElementById("answer").style.display = "block";
    document.getElementById("submit-answer").style.display = "inline";
    document.getElementById("skip-question").style.display = "inline";
    document.getElementById("timer").style.display = "block";
    document.getElementById("result").innerText = "";

    // 게임 시작 버튼과 선택 메뉴 숨기기
    document.querySelector("button[onclick='startGame()']").style.display = "none";
    document.getElementById("question-count").style.display = "none";
    document.getElementById("time-limit").style.display = "none";

     // 엔터 키 이벤트 리스너 추가
     document.getElementById("answer").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            checkAnswer();
        }
    });

    nextQuestion();
}



function startTimer() {
    timeLeft = timeLimit; // 선택한 시간 제한 반영
    document.getElementById("timer").innerText = `남은 시간: ${timeLeft}초`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `남은 시간: ${timeLeft}초`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("result").innerText = `시간 초과! 정답은 "${currentPerson.name}"입니다. 다음 문제로 이동합니다.`;
            setTimeout(nextQuestion, 2000);
        }
    }, 1000);
}

function nextQuestion() {
    if (questionNumber >= questionCount || usedPeople.length === people.length) {
        endGame();
        return;
    }

    do {
        currentPerson = people[Math.floor(Math.random() * people.length)];
    } while (usedPeople.includes(currentPerson));

    usedPeople.push(currentPerson);
    questionNumber++;
    document.getElementById("hint").innerText = `힌트: ${currentPerson.hint}`;
    document.getElementById("person-image").src = currentPerson.image;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";

    clearInterval(timer);
    startTimer();
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = currentPerson.name;

    const nameParts = correctAnswer.split(" ");
    if (nameParts.some(part => userAnswer.includes(part))) {
        clearInterval(timer);
        document.getElementById("result").innerText = "정답입니다! 다음 문제로 이동합니다.";
        score++;
        setTimeout(nextQuestion, 1000);
    } else {
        clearInterval(timer);
        document.getElementById("result").innerText = `틀렸습니다! 정답은 "${currentPerson.name}"입니다. 다음 문제로 이동합니다.`;
        setTimeout(nextQuestion, 2000);  // 2초 후 다음 문제로 이동
    }
}


function skipQuestion() {
    clearInterval(timer);
    document.getElementById("result").innerText = `문제를 스킵합니다. 정답은 "${currentPerson.name}"입니다.`;
    setTimeout(nextQuestion, 1000);
}

function endGame() {
    clearInterval(timer);
    document.getElementById("game-container").innerHTML = `
        <h2>게임 종료!</h2>
        <p>맞힌 횟수: ${score} / ${questionCount}</p>
        <button onclick="restartToMain()">초기 화면으로 돌아가기</button>
    `;
}

// 초기 화면으로 돌아가는 함수 추가
function restartToMain() {
    document.getElementById("game-container").innerHTML = `
        <h1>인물 맞추기 게임</h1>
        <p>원하는 게임 모드를 선택하세요:</p>
        <button onclick="selectCategory('history')">역사 인물 맞추기</button>
        <button onclick="selectCategory('celebrity')">연예인 맞추기</button>
        <p id="hint" style="display:none;">힌트: ???</p>
        <img id="person-image" src="" alt="힌트 이미지" style="display: none;">
        <input type="text" id="answer" placeholder="정답을 입력하세요" style="display:none;">
        <button id="submit-answer" onclick="checkAnswer()" style="display:none;">확인</button>
        <button id="skip-question" onclick="skipQuestion()" style="display:none;">스킵</button>
        <p id="result"></p>
        <p id="timer" style="display:none;">남은 시간: 10초</p>
    `;
}


function selectCategory(category) {
    if (category === 'history') {
        people = historicalFigures;
    } else if (category === 'celebrity') {
        people = celebrities;
    }

    // 게임 설정 화면으로 전환
    document.getElementById("game-container").innerHTML = `
        <h2>게임 설정</h2>
        <label for="question-count">문제 수 선택: </label>
        <select id="question-count">
            <option value="5">5문제</option>
            <option value="10">10문제</option>
            <option value="15">15문제</option>
            <option value="20">20문제</option>
        </select>
        <br>
        <label for="time-limit">문제 당 제한 시간: </label>
        <select id="time-limit">
            <option value="5">5초</option>
            <option value="10">10초</option>
        </select>
        <br>
        <button onclick="startGame()">게임 시작</button>
        <p id="hint" style="display: none;"></p>
        <img id="person-image" src="" alt="힌트 이미지" style="display: none;">
        <input type="text" id="answer" placeholder="정답을 입력하세요" style="display: none;">
        <button id="submit-answer" style="display: none;" onclick="checkAnswer()">확인</button>
        <button id="skip-question" style="display: none;" onclick="skipQuestion()">스킵</button>
        <p id="result"></p>
        <p id="timer" style="display: none;">남은 시간: 10초</p>
    `;
}
