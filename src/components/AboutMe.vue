<template>
    <span id="AboutMe">
        <img src="/ImgOriginal/portrait.png" alt="Bonny" id="portrait">

        <div style="height: 100%;">
        <h3>
            <mark class="red">Hello!</mark>
        </h3>
        <h3>
            My name is <mark class="red"> 博尼  (Bonny Y. Wang)</mark> or 汪玥 (Yue Wang), a grad student at <mark class="red">Carnegie Mellon University</mark> in Pittsburgh.
        </h3>
        <h3>
            I am a <mark class="red">researcher</mark>, a <mark class="red">developer</mark> and a <mark class="red">practicing astrophysicist</mark>!
        </h3>
        <h3>
            Currently, my <mark class="red">research focuses on</mark> using machine learning methods to study the Large Scale Structure of the Universe. I am insterested in understanding the formation and evolution of cosmic structure, and how they can be used to probe the fundamental physics of the Universe.
        </h3>
        <h3>
            In addition, I’m deeply passionate about <mark class="red">scientific outreach</mark> because I didn’t have many opportunities to learn about astrophysics or research until later in my life. In fact, my first exposure to astro research was through my video game development internship! This unique experience has inspired me to spend my current Master's studies on creating immersive experiences and interactive games for astronomy. I truly hope to encourage others to explore the wonders of astronomy and science in a more engaging and accessible way.
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