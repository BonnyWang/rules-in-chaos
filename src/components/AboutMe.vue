<template>
    <span id="AboutMe">
        
        <div v-if="isAcademic" style="height: fit-content;">
            <img src="/ImgOriginal/portrait.png" alt="Bonny" id="portrait">
            <h3>
                <mark class="red">Hello!</mark>
            </h3>
            <h3>
                My name is <mark class="red"> 博尼  (Bonny Y. Wang)</mark> or 汪玥 (Yue Wang), a grad student in Astronomy & Astrophysics at <mark class="red">The University of Chicago</mark>. Previously, I was at the Flatiron Insititute (CCA), IPMU and CMU.
            </h3>
            <h3>
                I am a <mark class="red">researcher</mark>, a <mark class="red">developer</mark> and a <mark class="red">practicing astrophysicist</mark>! 
            </h3>
            <h3>
                Currently, my <mark class="red">research focuses on</mark> using machine learning methods to study the Large Scale Structure of the Universe. I am insterested in understanding the formation and evolution of cosmic structure, and how they can be used to probe the fundamental physics of the Universe.
            </h3>
            <h3>
                In addition, I’m deeply passionate about <mark class="red">scientific outreach</mark> because I didn’t have many opportunities to learn about astrophysics or research until later in my life. In fact, my first exposure to astro research was through my video game development internship! This unique experience has inspired me to spend my previous Master's studies at CMU on creating immersive experiences and interactive games for astronomy. I hope to encourage others to explore the wonders of astronomy and science in a more engaging and accessible way.
            </h3>
            <br>
            <h3>
            If you have any questions or want to chat, feel free to reach me at <mark style="color:red">bonnyw@uchicago.edu</mark>!
            </h3>
        </div>
        <div v-else style="height: fit-content;">
            <img src="/ImgOriginal/bonnyC.jpg" alt="Bonny" id="portraitC">
        <h3>
            <mark class="red">博尼 (Bonny Y. Wang) / 汪玥 (Yue Wang)</mark>
        </h3>
        <h3>
            Location: Chicago, IL
        </h3>
        <h3>
            Bonny Y. Wang is <mark class="red">a researcher, a game developer and a practicing astrophysicist</mark>, with a deep passion for merging astrophysics and interactive entertainment. 
        </h3>
        <h3>
            She is currently a grad student in Astronomy & Astrophysics at <mark class="red">University of Chicago</mark> and holds a Master's degree in Entertainment Technology from <mark class="red">Carnegie Mellon University</mark> and a Bachelor's degree of Engineering in Electrical and Computer Engineering from <mark class="red">The Cooper Union</mark>. Her diverse academic background equips her with a unique blend of skills in both scientific research and creative development.
        </h3>
        <h3>
            Bonny aims to integrate her love for astronomy and gaming, developing educational and immersive experiences that inspire curiosity about the cosmos. She believes being fun is the fundamental driving force for learning and the engaging nature of games can make complex astronomical ideas accessible, bridging entertainment and education.
        </h3>
        <h3>
           <mark  style="color: purple">Contact:</mark>
        </h3>
        <h3  style="color:red">
           bonnyw@uchicago.edu
        </h3>

            <h3>
                
            </h3>
        </div>
    </span>
  
</template>

<script>
import mapp from '../main';

export default {
    name:"AboutMe",
    data(){
        return {
            mapp: mapp,
            isAcademic: false,
        }
    },
    mounted(){
        this.isAcademic = this.mapp.isAcademic;
        console.log(this.isAcademic);
    }
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
#portraitC{
    width: 30%;
    border: none;
    /* align to the left */
    float: right;
    
    border-radius: 80%;

    /* fill the space with top and bottom margin */
    margin-left:50px;
    margin-bottom: 100%;

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

    #portraitC{
        border-radius: 0%;
        width: 60%;
        border:none;
        margin: 10%;
        margin-left: 50%;
        transform: translateX(-50%);
    }
}
</style>