<template>
    <main class="main-register">
        <section class="login-box">
            <div class="info-box">
                <p>Bem-Vindo. Já está registrado em nosso sistema?</p>
                <button class="submit-login">Fazer Login</button>
            </div>

        </section>
        <section class="register-box">
            <h1>Cadastro</h1>
            <form class="form-register">
                <div class="form-input">
                    <label for="name">Nome</label>
                    <input type="text" name="name"/>
                </div>
                <div class="form-input">
                    <label for="matricula">Matricula</label>
                    <input type="text" name="matricula"/>
                </div>    
                <div class="form-input">
                    <label for="password">Senha</label>
                    <input type="password" name="password"/>
                </div>
            </form>
            <button class="submit">Enviar</button>

        </section>

    </main>
</template>
<style>
input{
    width:250px;
    height: 30px;
    padding-left: 5px;
    border:none;
    border:2px solid #92E3A9;
    border-radius:5px;
    border-color: #92E3A9;
}
.login-box{
    background-color: #92E3A9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 50%;
}
.info-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 30%;
}
.info-box p{
    color:white;
    font-size:1.3em;
}
.submit-login{
    background: none;
    border:1px solid white;
    color:white;
    height: 50px;
    width:200px;
}
.submit-login:hover{
    background-color: white;
    color:#92E3A9;
    cursor:pointer;
}
 .main-register{
        display:flex;
        align-items:center;
        justify-content:center;
        width:100vw;
        height:100vh;
        background-color:#FAFAFA
        
    }
    .register-box{
        background-color: white;
        width: 30%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        
    }
    .form-register{
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .form-input{
        height: 50%;
        display: flex;
        flex-direction: column;
    }
    .submit{
        background:none;
        border:none;
        background-color:#92E3A9;
        color:white;
        text-transform: uppercase;
        width: 250px;
        height: 40px;
        border-radius:5px;
    }

</style>