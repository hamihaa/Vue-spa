<template>
        <div class="row">
            <div class="body-container col-md-8 col-md-offset-2">
                <p>
                    My name is Miha Babič. I'm 23 years old, junior web developer from Slovenia.
                </p>
                <p>
                    I'm bachelor of Engineering in Administrative Information Science.
                </p>
                <p>
                    I like music, cats, computer games and like to learn about new web technologies.
                </p>

                <div class="contact-info">
                    You can contact me on my social profiles
                    <div class="social-icons">
                        <span @click="goTo('git')"><icon class="social-item" name="github" scale="3"></icon></span>
                        <span @click="goTo('fb')"><icon class="social-item" name="facebook" scale="3"></icon></span>
                        <span @click="goTo('li')"><icon class="social-item" name="linkedin" scale="3"></icon></span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {

        methods: {
            goTo(url) {
                switch(url) {
                    case 'git':
                        window.open("https://github.com/hamihaa","_self");
                        break;
                    case 'fb':
                        window.open("https://facebook.com/miha.babic1","_self");
                        break;
                    case 'li':
                        window.open("https://www.linkedin.com/in/miha-babi%C4%8D-89a44b92/","_self");
                        break;
                }
            }
        }
    }
</script>


<style lang="scss">
    .body-container {
        text-align: center;
        font-size: 16px;
        line-height: 1.4;
        padding: 5px 10px;

        .contact-info {
            .social-icons{
                padding-top: 50px;

                .social-item {
                    margin:10px;
                    color:black;
                    &:hover {
                         color: #41B883;
                     }
                }
            }
        }
    }
</style>