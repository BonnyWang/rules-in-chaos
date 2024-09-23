<template>
    <span id="AboutMe">
        <img src="/ImgOriginal/portrait.png" alt="Bonny" id="portrait">

        <div>
        <h3>
            <mark class="red">Hello!</mark>
        </h3>
        <h3 class="intro-text">
            My name is <mark class="red"> 博尼  (Bonny Y. Wang)</mark> or 汪玥 (Yue Wang), a grad student at <mark class="red">Carnegie Mellon University</mark> in Pittsburgh.
        </h3>
        <h3>
            I am a researcher, a technologist and a practicing astrophysits.
        </h3>
        <h3>
            <mark class="red">Current Location:</mark> 
        </h3>
        <h3>
            Pittsburgh, PA
        </h3>

        <br>
        <h3>
           If you have any questions or want to chat, feel free to reach me at <mark style="color:purple">yuew7@andrew.cmu.edu</mark>!
        </h3>
        </div>
    </span>
  
</template>

<script>

export default {
    name:"AboutMe",
}
</script>

<style>
#AboutMe{
    margin-top: 100px;
    height: 60%;
    overflow-y: scroll;
}

#portrait{
    width: 20%;
    border: none;
    /* align to the left */
    float: left;

    margin: 50px;
    margin-left: 0%;

}

.intro-text{
    line-height: 47px;
}


mark{
    color: red;
    background: none;
    font-size: 20px;
}

@media only screen and (max-width: 1000px) {
    #portrait{
        width: 60%;
        border:none;
        margin: 10%;
        margin-left: 50%;
        transform: translateX(-50%);

    }
}
</style>