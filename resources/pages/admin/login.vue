{{{{raw}}}}
<template>
    <section class="hero is-fullheight">
        <div class="columns">
            <div class="column is-4">
                <section class="hero is-fullheight">
                    <div class="hero-heading">
                        <div class="section has-text-centered">
                            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" width="150px">
                        </div>
                    </div>
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns">
                                <div class="column is-8 is-offset-2">
                                    <h1 class="avatar has-text-centered section">
                                        <img height="128" width="128" src="https://avatars2.githubusercontent.com/u/8288216?v=3&s=460">
                                    </h1>
                                    <div class="login-form">
                                        <b-field>
                                            <b-input placeholder="Email" type="email" icon-pack="fa" icon="user">
                                            </b-input>
                                        </b-field>
                                        <b-field>
                                            <b-input type="password" placeholder="●●●●●●●" icon-pack="fa" icon="lock">
                                            </b-input>
                                        </b-field>
                                        <p class="control login">
                                            <button class="button is-success is-outlined is-large is-fullwidth">Login</button>
                                        </p>
                                    </div>
                                    <div class="section forgot-password">
                                        <p class="has-text-centered">
                                            <a href="#">Forgot password</a>
                                            <a href="#">Need help?</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="column is-8 is-hidden-mobile hero-banner">
                <section class="hero is-fullheight is-dark">
                    <div class="hero-body">
                        <div class="container section">
                            <div class="has-text-left">
                                <h1 class="title is-1">Login</h1>
                                <br>
                                <p class="title is-3">Secure User Account Login</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>
{{{{/raw}}}}
<script>
export default {
    layout: 'clear'
}
</script>
