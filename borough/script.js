// wishlist.js

// 1. 현재 HTML 파일의 이름(예: dongdaemun.html)을 자동으로 추출해서 저장 열쇠(Key)로 씁니다.
const pageKey = 'wish_' + window.location.pathname.split('/').pop().replace('.html', '');
const checkbox = document.querySelector('.wish-checkbox');

// 체크박스가 페이지에 존재할 때만 실행 (에러 방지)
if (checkbox) {
  
  // 2. 창고(localStorage)에서 현재 페이지에 맞는 하트 상태 꺼내와서 적용하기
  if (localStorage.getItem(pageKey) === 'true') {
    checkbox.checked = true;
  }

  // 3. 하트를 누를 때마다 현재 페이지 이름으로 창고에 저장하기
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      localStorage.setItem(pageKey, 'true');  // 💖 해당 구에 true 저장
    } else {
      localStorage.removeItem(pageKey);       // 🤍 체크 해제 시 삭제
    }
  });
}