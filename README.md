# plz-noti-web

내가 마음대로 조직하는 내 디바이스 알림

- 옷 입기 전에 지금 날씨를 알고 싶어
- 출근하기 직전에 내가 타는 버스 도착 정보를 알고 싶어
- 점심 시간에 오늘 인기인 소셜 미디어 인기글 정보를 보고 싶어

시간 기반 + 외부 데이터 소스 알림을 쉽게 받아보기 위한 사이드 프로젝트

## Prepare

### 1. HTTPS 인증서

```bash
mkcert --install
mkcert 192.168.0.103 192.168.0.104 localhost 127.0.0.1 ::1 127.0.0.1.nip.io
mv *-key.pem cert/cert-key.pem
mv *.pem cert/cert.pem
```

### 2. Firebase 설정

```bash
cp .env.example .evn
vim .env
```

## Running the app

```bash
# development
$ npm run dev

# run vite development server with option `--host 0.0.0.0`
$ npm run dev:expose
```
