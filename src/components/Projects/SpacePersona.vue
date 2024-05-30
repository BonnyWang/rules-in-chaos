<template>
    <span class="projectContent">
        <h1 class="projectTitle">
            Space Persona
        </h1>
        <h2 class="projectSubTitle">
            Created for Origin Space
        </h2>
        <a href="https://bonnywang.github.io/spacePersona">
        <button class="playOnline"><b>Click Here to Play!</b></button>
        </a>
        <p style="color:aqua">
            (*Only available for mobile phones. If you do not have a mobile device with you, use the inspection mode of your browser and change the dimensions!)
        </p>
        <h3 class="projectSubTitle">
            A Personality Game About Finding Your Position in the Space Mining Era
            <br>
            Available in both Chinese and English
        </h3>
        <h3>
            Background:
        </h3>
        <p>
            According to the Kardashev scale, astronomer Carl Sagan believes we are still a Type 0.7 civilization. That means the energy we have exploited is very limited. While we have focused on using resources on Earth, there is much more we can explore in outer space.
            <br>
            <br>
            Asteroids contain abundant resources like heavy metals, which are rare and hard to mine on Earth, but crucial for industrial uses. One single asteroid like 16 Psyche could be estimated up to 10 Quintillion dollars, more than the current global economy. NASA has planned the Psyche mission to study this particular asteroid. Asteroids in near-Earth orbits also contain tremendous values.
            <br>
            <br>
            Space Persona would put you in a future era when space mining had become one of the major activities of society. By answering several dedicated questions, Space Persona would generate a specific guide based on your personality and help you find your way in the space mining era.
        </p>
        <h3>
            Sample screenshots:
        </h3>
        <img style="width:20%" src="/ImgThumbNail/spacePersona.jpg"/>
        <img style="width:20%" src="/ImgThumbNail/spacePersona_n0.jpg"/>
        <img style="width:20%" src="/ImgThumbNail/spacePersona_q1.jpg"/>
        <img style="width:20%" src="/ImgThumbNail/spacePersona_t0.jpg"/>
        <br>
        <br>
        <p>
            There are also <b><large>Easter eggs</large></b> in Space Persona designed for certain characters. Try to find them all! (*Hint: the rule is related to some sequences of dates.)
        </p>
        <h3>
            Sample Easter eggs:
        </h3>
        <img style="width:30%" src="/ImgThumbNail/spacePersona_s1.jpg"/>
        <img style="width:30%" src="/ImgThumbNail/spacePersona_s0.jpg"/>
        <h3>
            Sample gameplay video:
        </h3>
        <iframe width="60%" height="315" src="https://www.youtube.com/embed/oca73-tzRVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </span>
  
</template>

<script>
export default {
    name:"SpacePersona"

}
</script>

<style>

.projectTitle{
    font-size: 30px;
}

.projectSubTitle{
    font-weight: 100;
}

.projectContent{
    height: 80%;
    overflow-y: scroll;
    padding: 10px;
    padding-right: 30px;

}

.projectContent p{
    padding-right: 50px;
}

p{
    overflow-wrap: break-word;
    word-wrap: break-word; 

}

figcaption{
    overflow-wrap: break-word;
    word-wrap: break-word;
}

.projectContent img{
    width: 60%;
    border: none;
    margin-left: 0px;
    margin-right: 10px;
}

.projectContent a{
    color: aqua;
}

.playOnline{
    color: white;
    background-color: red;
    padding: 10px;
}

.playOnline:hover{
    color:red;
    cursor: pointer;
    background: none;
    border: red solid 2px;
}
</style>