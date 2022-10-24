<template>
<main class="main-login">
    <div class="login-box">
        <div class="box-image">
        </div>
        <div class="div-login">
         <h2 class="title-login">Login</h2>
            <div class="input-login">
            <div class="input">
             
                <input type="text" placeholder="Digite sua matrícula">
            </div>
            <div class="input">
                
                <input type="Password" placeholder="Digite sua senha">
            </div>
            </div>
             <button class="button">Entrar</button>
        </div>
    </div>
</main>
</template>
<style>
   

    .main-login{
        display:flex;
        align-items:center;
        justify-content:center;
        width:100vw;
        height:100vh;
        background-color:#FAFAFA;
        
    }
    .login-box{
        width:70%;
        height:70%;
        background-color:white;
        display:flex;
        justify-content:space-around;
        align-items:center;
        
    }
    .title-login{
    color:#32A027;
    }
     .box-image{
        width:50%;
        height:100%;
        background: url("../imgs/Library-bro.svg"); 
        background-repeat:no-repeat;
        background-position: center;
    
    }
    .div-login{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        height:55%;
        width:50%;
     }
     .input-login{
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-direction:column;
        height:35%;
     }
    input{
        border:1px solid #92E3A9;
        border-radius:20px;
        padding-left:10px;
        width:200px;
        height:40px;
    }
    .button{
        background:none;
        width:200px;
        height:40px;
        background-color:#32A027;
        color:white;
        border:none;
        border-radius:20px;
    }
</style>