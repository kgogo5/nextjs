# NextJs R&D

SEO를 위한 Server Side Rendering(SSR) 프로젝트

- getServerSideProps : 서버에서만 작동되는 function, request time에 반드시 데이터를 fetch해와야 하는 페이지를 pre-render해야 하는 경우에만 getServerSideProps를 사용해야 한다. 데이터를 pre-render할 필요가 없다면 client side에서 데이터를 가져오는 것을 고려.



# React 앱에 NextJS 적용 시
- 설치 : <code>npm install next@latest</code> <code>yarn add next@latest</code>
- package.json 수정

<code>{
  ...
  "scripts": {
    "dev": "next",
    "start": "next start",
    "next build": "next build",
  }
  ...
}</code>
- pages 폴더 생성
- @babel/plugin-transform-runtime을 다운받고, regenerator를 true로 변경 : <code>yarn add -D @babel/plugin-transform-runtime</code>

<code>{
  ...
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}</code>
