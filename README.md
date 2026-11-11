# 안졸리나 | 꿈을 기록하는 일상 (Angelina Brand Site)

배우고, 기록하고, 함께 떠나는 삶. 콘텐츠 크리에이터 안졸리나의 꿈과 5년 실천 계획을 소개하는 다국어(한국어, English, 日本語) 1페이지 브랜드 매거진 웹사이트입니다.

---

## 1. 프로젝트 주요 기능

- **3개 국어 완벽 지원 (한국어 / English / 日本語)**:
  - 상단 내비게이션에서 즉시 전환 가능 (국기 대신 명확한 텍스트 버튼)
  - `localStorage`에 언어 설정 자동 보존
  - URL 파라미터 지원 (`?lang=ko`, `?lang=en`, `?lang=ja`)
  - 언어 전환 시 `document.title` 및 `html lang` 속성 실시간 동기화
- **정적 배포 최적화 (Serverless / Static)**:
  - React 19 + TypeScript + Vite + Tailwind CSS 기반
  - 외부 번역 API, Gemini API, DB 없이 모든 콘텐츠가 정적으로 완결 구동
- **정직하고 진정성 있는 콘텐츠 구성**:
  - 임의의 과장된 수치, 가짜 수강생 후기, 임의의 연락처 배제
  - 'AI로 그려본 꿈의 장면'임을 명확히 밝히는 갤러리 및 카드 안내문
  - 미공개 블로그 글은 '연재 예정' / 준비 중 상태로 비활성화
- **웹 접근성 & 모바일 최적화**:
  - `prefers-reduced-motion` 모션 감소 지원
  - 터치 타깃 44px 이상, 명확한 키보드 포커스링(`:focus-visible`)
  - 라이트박스 갤러리(Esc 닫기, 키보드 포커스 복귀)

---

## 2. 프로젝트 폴더 구조

```text
├── index.html                  # 메타 태그, 폰트(Noto Sans KR/JP), 웹 루트
├── vercel.json                 # Vercel 배포 설정
├── package.json                # 빌드 및 실행 스크립트 (dev, build, preview)
├── public/
│   ├── images/                 # 첨부 이미지 파일 위치 (01-dream.png 등)
│   └── videos/                 # (선택) 인트로 영상 파일 위치 (dream-intro.mp4)
├── src/
│   ├── components/             # UI 섹션 컴포넌트
│   │   ├── Navbar.tsx          # 상단 내비게이션 & 언어 스위처
│   │   ├── Hero.tsx            # 메인 대표 화면
│   │   ├── MyStory.tsx         # 나의 이야기 & 3대 가치
│   │   ├── ThreeDreams.tsx     # 세 가지 꿈 카드
│   │   ├── ActionPlan.tsx      # 오늘의 5단계 실천
│   │   ├── Roadmap.tsx         # 5년 준비 과정 (세로 타임라인)
│   │   ├── BlogTrilogy.tsx     # 꿈의 기록 블로그 3부작
│   │   ├── Gallery.tsx         # 꿈의 갤러리 (라이트박스 모달)
│   │   ├── VideoSection.tsx    # 영상 소개 영역 (조건부 노출)
│   │   ├── Connect.tsx         # 인스타그램 연동 영역
│   │   ├── Footer.tsx          # 푸터 및 상단 이동 버튼
│   │   └── SmartImage.tsx      # 이미지 미배치 시 정돈된 대체 뷰 컴포넌트
│   ├── content/
│   │   └── siteContent.ts      # 브랜드명, SNS 링크, 블로그 글 링크, 영상 설정
│   ├── context/
│   │   └── LanguageContext.tsx # 다국어 상태 관리 및 동기화
│   ├── i18n/
│   │   ├── types.ts            # 다국어 번역 타입 정의
│   │   ├── ko.ts               # 한국어 콘텐츠
│   │   ├── en.ts               # 영어 콘텐츠
│   │   └── ja.ts               # 일본어 콘텐츠
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

---

## 3. 이미지 파일 구성 안내 (5장 완료)

본 홈페이지에 필요한 5장의 고화질 비전 이미지가 모두 `public/images/` 폴더에 완벽히 등록되었습니다:

1. `public/images/01-dream.png` : 꿈을 적는 시간 (메인 첫 화면 대표 이미지 & 갤러리 1)
2. `public/images/02-creator.png` : 콘텐츠를 만드는 일상 (세 가지 꿈 1번째 카드: 경험을 나누는 콘텐츠 크리에이터)
3. `public/images/03-teaching.png` : 함께 배우는 교실 (세 가지 꿈 2번째 카드: 시니어의 시작을 돕는 AI 강사)
4. `public/images/04-learning.png` : 새로운 도구를 익히는 과정 (나의 이야기 섹션 & 갤러리 4)
5. `public/images/05-journey.png` : 미래를 향한 발걸음 (세 가지 꿈 3번째 카드: 남편과 함께하는 여행 기록자)

> 모든 이미지는 정적 배포(Vercel, GitHub Pages 등) 시 `dist/images/`로 자동 빌드되어 전 세계 어디서나 선명하게 표시됩니다.

---

## 4. 글과 링크 수정하는 방법

### 1) 브랜드 정보, 블로그 및 인스타그램 주소 수정
- 파일: `src/content/siteContent.ts`
  - `social.blog.url`: 네이버 블로그 주소 (현재 설정: `https://blog.naver.com/chaos716`)
  - `social.instagram.url`: 인스타그램 주소 (기본값: `https://www.instagram.com/heeya_reviewer/`)
  - `blogTrilogy[i].url`: 블로그 글이 발행되면 여기에 실제 URL(예: `https://blog.naver.com/...`)을 입력하세요. URL이 입력되면 자동으로 '글 읽기' 버튼이 활성화됩니다.
  - `video.showVideo`: 나중에 영상을 추가할 경우 `true`로 변경하세요.

### 2) 번역 및 본문 텍스트 수정
- 파일:
  - `src/i18n/ko.ts` (한국어)
  - `src/i18n/en.ts` (영어)
  - `src/i18n/ja.ts` (일본어)

---

## 5. 영상 파일 추가 방법 (선택 사항)

1. 영상 파일(`dream-intro.mp4`)을 `public/videos/` 폴더에 넣습니다.
2. `src/content/siteContent.ts` 파일에서 `showVideo: true`로 변경합니다.
3. 자막이 있는 경우 `public/videos/subtitles-ko.vtt` 등을 넣어 다국어 자막을 활성화할 수 있습니다.

---

## 6. 로컬 실행 및 빌드

```bash
# 1. 의존성 설치
npm install

# 2. 로컬 개발 서버 실행 (http://localhost:3000)
npm run dev

# 3. 배포용 정적 빌드 (/dist 폴더 생성)
npm run build

# 4. 빌드 결과물 로컬 미리보기
npm run preview
```

---

## 7. GitHub 및 Vercel 배포 방법

### GitHub 연동
1. 새 GitHub 저장소(예: `angelina-brand`)를 생성합니다.
2. 터미널에서 다음 명령어를 실행합니다:
   ```bash
   git init
   git add .
   git commit -m "feat: Angelina personal brand website"
   git branch -M main
   git remote add origin https://github.com/당신의아이디/angelina-brand.git
   git push -u origin main
   ```

### Vercel 배포
1. [Vercel](https://vercel.com)에 로그인 후 **Add New Project**를 선택합니다.
2. 방금 올린 GitHub 저장소를 불러옵니다.
3. Framework Preset에서 **Vite**를 확인합니다 (프로젝트에 `vercel.json`이 이미 포함되어 있어 별도 설정 없이 바로 배포됩니다).
4. **Deploy** 버튼을 누르면 약 1분 내에 전 세계 어디서나 접속 가능한 정적 웹사이트가 완성됩니다.
