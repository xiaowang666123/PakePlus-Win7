window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 自动保存账号密码（仅自用）
document.addEventListener('submit', function(e){
  const user = document.querySelector('input[name="username"]');
  const pwd = document.querySelector('input[name="pwd"]');
  if(user && pwd){
    localStorage.setItem('login_user', user.value);
    localStorage.setItem('login_pwd', pwd.value);
  }
})
window.onload = function(){
  setTimeout(()=>{
    const user = document.querySelector('input[name="username"]');
    const pwd = document.querySelector('input[name="pwd"]');
    if(user) user.value = localStorage.getItem('login_user') || '';
    if(pwd) pwd.value = localStorage.getItem('login_pwd') || '';
  }, 500)
}
