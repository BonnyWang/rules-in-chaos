<template>
    <span id="AboutMe">
        <h3>
            Hi, I'm <mark class="red">博尼</mark>! Welcome to my world!
        </h3>
        <h3>
             I'm currently studying Electrical Engineering at the Cooper Union.
        </h3>

        <h3>
            This site is for showing all my work and projects.
        </h3>
        <h3>
            Hope you enjoy it!
        </h3>
        <br>
        <h3>
           If you have any questions, feel free to contact me at
        </h3>
        <h3 style="color:purple">
           wang27@cooper.edu
        </h3>
    </span>
  
</template>

<script>
export default {
    name:"AboutMe"

}
</script>

<style>
#AboutMe{
    margin-top: 100px;
    height: 60%;
    overflow-y: scroll;
}

mark{
    color: red;
    background: none;
    font-size: 30px;
}
</style>