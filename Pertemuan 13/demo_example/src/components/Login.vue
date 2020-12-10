<template>
    <section class="section">
        <div class="container is-max-desktop">
            <h1 class="title">Login</h1>
            <hr>
            <b-field label="Username">
                <b-input maxlength="30"></b-input>
            </b-field>
            <b-field label="Password">
                <b-input type="password" maxlength="30"></b-input>
            </b-field>
            <b-button class="is-primary" expanded>Login</b-button>
        </div>
    </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
